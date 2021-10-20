<template>
  <div class="container">
    <Sidebar></Sidebar>
    <Filter></Filter>
  </div>
</template>

<script>
import Filter from "@cv/Filter";
import Sidebar from "@cf/sidebar/sidebar";
export default {
  name: "Filterpage",
  components: {Filter, Sidebar},
}
</script>

<style lang="scss" scoped>
.container{
  display: flex;
  justify-content: flex-start;
  width: auto;
  max-width: 1440px;
  min-height: 900px;
}
@media (min-width: 541px) and (max-width: 900px) {
  .container{
    display: flex;
    justify-content: flex-start;
    width: auto;
    max-width: 1440px;
    min-height: 900px;
  }
}
@media (max-width: 540px){
.container{display: flex;
  flex-wrap: wrap;
  width: auto;
  max-width: 900px;
  min-height: 900px;
  }

}
</style>