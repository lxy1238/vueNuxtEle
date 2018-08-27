<template>
  <div>
    <head-nav></head-nav>
    <nuxt/>
    <foot-nav></foot-nav>
  </div>
</template>

<script>
import headNav from '~/components/headNav'
import footNav from '~/components/footNav'
export default {
  name: 'default',
  components: {
    headNav,
    footNav
  }
}
</script>


<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

</style>

