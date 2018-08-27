<template>
  <header class="layout-header">
    <div class="header">
    </div>
    <div class="blank"></div>
  </header>
</template>

<script>
export default {
  name: 'headerNav',
  computed: {
    currentRoute () {
      return this.$route.path
    }
  }
}
</script>

<style lang="less" scoped>
  @head_height: 76px;
  .layout-header {
    .header {
      position: fixed;
      width: 100%;
      height: @head_height;
      background: #fff;
      box-shadow: #d1d1d1 0px 1px 2px 1px;
    }
    .blank {
      height: @head_height;
    }
  }
  
</style>
