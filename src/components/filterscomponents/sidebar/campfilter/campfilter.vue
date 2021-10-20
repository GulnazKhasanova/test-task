<template>
<div class="campfilter">
    <div class="camp-radio">
    <input type="checkbox" id="camp1" value="camp1" v-model="picked">
    <div class="checkbox-square">
      <div class="square">
        <img src="@i/campfilter.svg"  :class="{active:picked.indexOf('camp1') != -1}" alt="">
      </div>
    </div>
    <label for="camp1">Адыл-Су</label>
  </div>
  <div class="camp-radio">
      <input type="checkbox" id="camp2" value="camp2" v-model="picked" >
    <div class="checkbox-square">
      <div class="square">
        <img src="@i/campfilter.svg"  :class="{active:picked.indexOf('camp2') != -1}" alt="">
      </div>
    </div>
      <label for="camp2">Кязи</label>
  </div>
  <div class="camp-radio">
    <input type="checkbox" id="camp3" value="camp3" v-model="picked">
    <div class="checkbox-square">
      <div class="square">
        <img src="@i/campfilter.svg"  :class="{active:picked.indexOf('camp3') != -1}" alt="">
      </div>
    </div>
    <label for="camp3">Дигория</label>
  </div>
  <div class="camp-radio">
    <input type="checkbox" id="camp4" value="camp4" v-model="picked">
    <div class="checkbox-square">
      <div class="square">
        <img src="@i/campfilter.svg" :class="{active:picked.indexOf('camp4') != -1}" alt="">
      </div>
    </div>
    <label for="camp4">Джан-Туган</label>
  </div>
</div>
</template>

<script>
export default {
  props:{
    sign:{
      type: Boolean,
      default: true
    },
    pickedProp:{
      type: Array,
      default: ['camp1','camp3']
    }
  },
  name: "campfilter",
  data () {
    return{
      picked: this.pickedProp,
      sign: this.sign,
      filterShow: true
    }
  },
  watch:{
    picked(){
      this.$emit('filtercamp', this.picked)
    },
    pickedProp(){
      this.picked = this.pickedProp
    }
  }
}
</script>

<style lang="scss" scoped>

.campfilter {
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 149px;
  height: 178px;
  margin-bottom: 40px;
  .filter-title {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    .arrow {
      margin-left: 10px;
      margin-top: -5px;
      width: 15px;
      height: 15px;
    }

    h3 {
      margin-bottom: 6px;
      text-align: left;
      font-family: $base-ff;
      font-style: normal;
      font-weight: bold;
      font-size: 20px;
      line-height: 26px;
      color: #006058;
    }
  }

  .camp-radio{

    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    label{
      display: flex;
      align-items: center;
      font-family: $base-ff;
      font-style: normal;
      font-weight: normal;
      font-size: 20px;
      line-height: 26px;
      color: #303030;
      margin-left: 8px;
    }
    input{
      width: 25px;
      height: 25px;
      align-items: center;
      opacity: 0 ;
      z-index: 10;
    }
    .checkbox-square{
      position: absolute;
      width: 25px;
      height: 25px;
      background: #FFFFFF;
      border: 1px solid #C0E8E4;
      box-sizing: border-box;
      border-radius: 3px;
      .square{
        position: absolute;
        display: flex;
        justify-content: center;
        margin: 2px;
        width: 19px;
        height: 19px;
        border-radius: 2px;
      }
      img{
        opacity: 0;
      }
      .active{
        opacity: 1;
      }

  }
  }
}
</style>