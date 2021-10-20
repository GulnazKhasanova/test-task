<template>
    <input class="blueBtn" type="button" value="Применить" @click="onUse">
</template>

<script>
export default {
name: "blueBtn",
  data(){
    return {
      onUse: true
    }
  },
  computed: {
    onUse () {
     return this.$emit('onUse', this.onUse)
    }
  }
}
</script>

<style lang="scss" scoped>
.blueBtn{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 255px;
  height: 60px;
  background: #008a7e;
  border: none;
  border-radius: 20px;
  font-family: $base-ff;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 21px;
  color: #FFFFFF;
  cursor: pointer;
}
.blueBtn:hover {
  background: #05D6C4;
}
.blueBtn:active{
  background: #008A7E;
}
</style>