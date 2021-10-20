<template>
  <div class="sidebar">

    <div class="filter-title">
      <h3>Даты</h3>
      <img id="date" class="arrow" :class="{active: show.indexOf('date') != -1}" src="@i/arrow_down.svg" alt="">
      <img class="arrow" :class="{active:show.indexOf('date') == -1}" src="@i/arrow_up.svg" alt="">
      <input type="checkbox" class="hidden" value="date" v-model="show">
    </div>

    <transition name="date">
      <Datefilter @DateIn="DateIn"
              @DateOn="DateOn"
              :indate="this.indate"
              :ondate ="this.ondate" v-show="show.indexOf('date') != -1"></Datefilter>
    </transition>

    <div class="filter-title">
      <h3>Длительность</h3>
      <img id="time" class="arrow" :class="{active: show.indexOf('time') != -1}" src="@i/arrow_down.svg" alt="">
      <img class="arrow" :class="{active:show.indexOf('time') == -1}" src="@i/arrow_up.svg" alt="">
      <input type="checkbox" class="hidden" value="time" v-model="show">
    </div>

    <transition name="time">
      <Timefilter @filtertime="onfiltertime"
                  :pickedProp="this.filtertime" v-show="show.indexOf('time') != -1"></Timefilter>
    </transition>

    <div class="filter-title">
      <h3>Альплагерь</h3>
      <img id="camp" class="arrow" :class="{active: show.indexOf('camp') != -1}" src="@i/arrow_down.svg" alt="">
      <img class="arrow" :class="{active:show.indexOf('camp') == -1}" src="@i/arrow_up.svg" alt="">
      <input type="checkbox" class="hidden" value="camp" v-model="show">
    </div>

    <transition name="camp">
      <Campfilter @filtercamp="onfiltercamp"
              :pickedProp="this.filtercamp" v-show="show.indexOf('camp') != -1"></Campfilter>
    </transition>

    <input class="blueBtn" type="button" value="Применить" @click="useFilter">

    <div class="cancelBtn">
      <img src="@i/cancelBtn.svg" alt="">
      <a href="#" @click="filterCancel">Сбросить</a>
    </div>

  </div>
</template>

<script>
import Datefilter from "@cf/sidebar/datefilter/datefilter";
import Timefilter from "@cf/sidebar/timefilter/timefilter";
import Campfilter from "@cf/sidebar/campfilter/campfilter";

export default {
  components: {Datefilter, Timefilter, Campfilter},
name: "sidebar",
  data(){
    return{
      sign: false,

      filtertime: '',
      filtercamp:[],
      indate: '',
      ondate: '',

      onUse: true,
      show: ['date','time','camp'],
      hidden: true,
      active: true
    }
  },
  methods:{
    onfiltertime(time){
      console.log(time)
      this.filtertime = time
    },
    onfiltercamp(camp){
      console.log(camp)
      this.filtercamp = camp
    },
    DateIn(indate){
      console.log(indate)
      this.indate = indate
    },
    DateOn(ondate){
      console.log(ondate)
      this.ondate = ondate
    },
    useFilter(sign){
     this.sign = true
    },
    filterCancel(sign){
      this.sign = false
      this.filtertime = ''
      this.filtercamp = []
      this.indate = ''
      this.ondate = ''
    },
  }
}
</script>

<style lang="scss" scoped>
.sidebar{
    display: flex;
    flex-direction: column;
    justify-content: start;
    margin-top: 50px;
    margin-left: 165px;
    margin-right: 15px;

  .filter-title {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    #date,#time,#camp{
      margin-left: 10px;
      z-index: 15;
      display: none;
    }
    .hidden{
      margin-left: -15px;
      width: 19px;
      height: 19px;
      opacity: 0;
      z-index: 20;
      display: none;
    }
    .arrow {
      margin-left: -15px;
      margin-top: -5px;
      width: 15px;
      height: 15px;
      opacity: 1;
      display: none;
    }
    .active{
      opacity: 0!important;
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
  }
@media (min-width: 541px) and (max-width: 900px) {
  .sidebar{
    display: flex;
    flex-direction: column;
    justify-content: start;
    margin: 50px auto;
  }
}
@media (max-width: 540px)
{
  .sidebar{
    display: flex;
    flex-direction: column;
    justify-content: start;
    margin: 50px auto;
    .filter-title {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
    #date,#time,#camp{
      margin-left: 10px;
      z-index: 15;
      display: flex;
    }
    .hidden {
      margin-left: -15px;
      width: 19px;
      height: 19px;
      opacity: 0;
      z-index: 20;
      display: flex;
    }
    .arrow {
      margin-left: -15px;
      margin-top: -5px;
      width: 15px;
      height: 15px;
      opacity: 1;
      display: flex;
    }
    .active{
      opacity: 0!important;
    }
    }
  }
}
</style>