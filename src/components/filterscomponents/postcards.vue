<template>
  <div class="postcards">
    <ItemPostcard></ItemPostcard>
  </div>

</template>

<script>
import ItemPostcard from "@cf/itemPostcard";
export default {
  components: {ItemPostcard},
  props: {
    index: {
      type: Number,
      default: 0
    }
  },
    name: "postcardComponent"
}
</script>

<style lang="scss" scoped>
.postcards{
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: flex-start;
  width: 855px;
  margin-top: 35px;
}
@media (max-width: 540px)
{
  .postcards{
    max-width: 540px;
    margin-top: 15px;
  }
}
</style>