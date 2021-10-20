<template>
<div v-for="(item,i) in postcards"
     :key="i"
     :value="postcards.value">
  <img :src="item.value" alt="">
  <p>{{item.value}}</p>
</div>
</template>

<script>
export default {
name: "itemPostcard",
  props:{
    value: {
      type: String,
      default: "No filled"
    },
    index: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      postcards: [
        {index:'0', value: 'a'},
        {index:'0', value: 'b'},
        {index:'0', value: 'c'},
        {index:'0', value: 'd'}
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
div{
  margin: 15px;
  display: flex;
  width: 255px;
  height: 350px;
  background: #C4C4C4;
  border-radius: 15px;
  box-sizing: border-box;
}
@media (max-width: 540px)
{
  div{
    margin: 15px auto;
  }
}
</style>