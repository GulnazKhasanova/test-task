<template>
<div class="cancelBtn">
  <img src="../../../../../src/assets/imgFilterPostcard/cancelBtn.svg" alt="">
  <a href="#" @click="CancelFilter">Сбросить</a>
</div>
</template>

<script>
export default {
  name: "cancelBtn",
  methods:{
    CancelFilter(){
      return this.$emit('cancelfilter')
    }
  }
}
</script>

<style lang="scss" scoped>
.cancelBtn{
  margin-top: 21px;
  width: 255px;
  height: 21px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  >img{
    width: 10px;
    height: 10px;
  }
  >a{
    font-family:$base-ff;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 21px;
    text-decoration-line: underline;
    color: #00B2A4;
    margin-left: 10px;
  }
}
.cancelBtn:hover a{
  color: #01D4C3;
}
</style>