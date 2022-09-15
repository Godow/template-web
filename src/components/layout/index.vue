<template>
  <div class="layout">
    <div class="header">
      <slot name="header">header</slot>
    </div>

    <div class="body">
      <slot name="body">body</slot>
    </div>

    <div class="footer">
      <slot name="footer">footer</slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "layout",
};
</script>

<style lang="less" scoped>
.layout {
  width: 100vw;
  height: 100vh;
  background-color: pink;
  display: flex;
  flex-direction: column;

  .header {
    height: 100px;
    background-color: gray;
  }

  .body {
    flex: 1;
  }

  .footer {
    height: 120px;
    background-color: yellow;
  }
}
</style>
