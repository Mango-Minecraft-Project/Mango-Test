<template>
  <div class="terraria-item-info">
    <table>
      <tbody>
        <tr>
          <td colspan="2">{{ name }}</td>
        </tr>
        <tr>
          <td colspan="2" class="" img><Attachment link="/icon.png" /></td>
        </tr>
        <tr>
          <td colspan="2"></td>
        </tr>
        <tr>
          <td>{{ i18nText.id }}</td>
          <td>
            <code>{{ id }}</code>
          </td>
        </tr>
        <tr>
          <td>{{ i18nText.source }}</td>
          <td>{{ source }}</td>
        </tr>
        <tr>
          <td>{{ i18nText.rare }}</td>
          <td :style="{ color: rareColor }">{{ rare }}</td>
        </tr>
        <tr>
          <td>{{ i18nText.types._name }}</td>
          <td>{{ types }}</td>
        </tr>
        <tr>
          <td>{{ i18nText.stack }}</td>
          <td>{{ stack }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="scss">
.terraria-item-info {
  width: 200px;
  margin-left: 20px !important;
  display: flex;
  flex-direction: column;
  float: right;
  text-align: center;
  align-items: center;
  white-space: nowrap;
  z-index: 1000;

  img {
    max-height: 12em !important;
    max-width: 100% !important;
    height: 100% !important;
    width: 100% !important;
    image-rendering: -moz-crisp-edges;

    // object-fit: contain;

    // 作者：非洲难民
    // 链接：https://juejin.cn/post/7150901644556042270
    // 来源：稀土掘金
    // 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
    image-rendering: -o-crisp-edges;
    image-rendering: -webkit-optimize-contrast;
    image-rendering: crisp-edges;
    -ms-interpolation-mode: nearest-neighbor;
  }
}
</style>

<script lang="ts">
import { usePageLang } from "vuepress/client";

export default {
  computed: {
    item() {
      return this.$page.frontmatter.item;
    },

    i18nText() {
      return {
        "zh-CN": {
          id: "ID",
          source: "所属",
          rare: "品质",
          stack: "堆叠",
          blue: "蓝色",
          colors: {
            blue: "#9696FF",
          },
          types: {
            _name: "类型",
            material: "材料",
            ammo: "弹药",
          },
        },
      }[usePageLang().value];
    },

    name() {
      return this.item.name;
    },
    id() {
      return this.item.id;
    },
    source() {
      return this.item.source;
    },
    rare() {
      return this.i18nText[this.item.rare];
    },
    rareColor() {
      return this.i18nText.colors[this.item.rare];
    },
    types() {
      return this.item.types.map((key) => this.i18nText.types[key]).join("、");
    },
    stack() {
      return this.item.stack;
    },
  },
};
</script>
