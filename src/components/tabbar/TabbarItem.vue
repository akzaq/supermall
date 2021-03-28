<template>
  <!-- 所有的item都展示在同一个图片，同一个文字 -->
  <div>
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "red"
    }
  },
  data(){
      return {
          
      }
  }

};
</script>

<style lang="scss" scoped></style>
