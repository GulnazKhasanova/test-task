<template>
  <div class="timefilter">
    <div class="filter-radio">
      <input type="radio" id="week1" value="week1" v-model="picked">
        <div class="radio-square"><div class="square" :class="{active: picked==='week1'}"></div></div>
      <label for="week1">До 1 недели</label>
    </div>
    <div class="filter-radio">
      <input type="radio" id="week2" value="week2" v-model="picked">
        <div class="radio-square"><div class="square" :class="{active: picked==='week2'}"></div></div>
      <label for="week2">До 2 недель</label>
    </div>
    <div class="filter-radio">
      <input type="radio" id="week3" value="week3" v-model="picked">
        <div class="radio-square"><div class="square" :class="{active: picked==='week3'}"></div></div>
      <label for="week3">До 3 недель</label>
    </div>
    <div class="filter-radio">
      <input type="radio" id="week4" value="week4" v-model="picked">
        <div class="radio-square"><div class="square" :class="{active: picked==='week4'}"></div></div>
      <label for="week4">До 4 недель</label>
    </div>

  </div>
</template>

<script>
export default {
  name: "timefilter",
  props:{
    sign:{
      type: Boolean,
      default: true
    },
    pickedProp:{
      type: String,
      default: 'week1'
    }
  },
  data () {
    return{
      picked: this.pickedProp,
      filterShow: true
    }
  },
  mounted() {
    console.log(this.pickedProp)
  },
  watch:{
    picked(){
      this.$emit('filtertime', this.picked)
    },
    pickedProp(){
        this.picked = this.pickedProp
     }
  }
}
</script>

<style lang="scss" scoped>

.timefilter{
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 159px;
  height: 175px;
  margin-bottom: 40px;
  .filter-radio{
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
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
    }
    input{
      width: 19px;
      height: 19px;
      align-items: center;
      opacity: 0 ;
      z-index: 10;
    }
    .radio-square{
      position: absolute;
      width: 25px;
      height: 25px;
      background: #FFFFFF;
      border: 1px solid #C0E8E4;
      box-sizing: border-box;
      border-radius: 3px;
      .square{
        position: absolute;
        margin: 2px;
        width: 19px;
        height: 19px;
        background: #00B3A4;
        border-radius: 2px;
        opacity: 0;
      }
      .active{
        opacity: 1;
      }
    }
  }
}
</style>