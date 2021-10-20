<template>
  <router-view>
    <Filterpage></Filterpage>

  </router-view>

</template>

<script>

import Filterpage from "@cf/Filterpage";


export default {
  name: 'App',
  components: {Filterpage},
}
</script>

<style lang="scss" scoped>
#app {

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}
</style>
