<template>
  <div class="datefilter">
   <div class="d-f-item">
      <label for="in">c
      <input type="text" id="in"
             :class="dateStart"
              placeholder="ДД:ММ"
              v-model="dateIn">
      </label>

      <label for="on">по
        <input type="text" id="on"
             :class="{warning:valid(dateOn) === -1}"
             placeholder="ДД:ММ"
             v-model="dateOn">
      </label>

    </div>
  </div>
</template>

<script>
export default {
   name: "datefilter",
  props:{
    sign:{
      type: Boolean,
      default: true
    },
    ondate:{
      type: String,
      default: ''
    },
    indate:{
      type: String,
      default: ''
    }
  },
  data () {
    return {
      dateIn: this.indate,
      dateOn: this.ondate,
      filterShow: true,
      flag1:null,
      flag2:null
    }
  },
  methods:{
    valid(str){
      let pat = new RegExp("^(0?[1-9]|[12][0-9])[\.](0?[1-9]|1[012])$", "i")
      return str.search(pat)
    }
  },
  mounted() {
    console.log(this.indate)
  },
  computed:{
    dateStart(){
      let pat = new RegExp("^(0?[1-9]|[12][0-9])[\.](0?[1-9]|1[012])$", "i")
      return !this.flag1  || pat.test(this.dateIn) ? '' : 'warning'
    }
  },
  watch:{
    dateIn(){
      this.flag1 = true
      this.$emit('DateIn',this.dateIn)
    },
    dateOn(){
      this.flag2 = true
      this.$emit('DateOn',this.dateOn)
    },

    indate() {
      this.dateIn = this.indate
    },
    ondate(){
      this.dateOn = this.ondate
    }
  }
}
</script>

<style lang="scss" scoped>

.datefilter{
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 255px;
  margin-bottom: 40px;
  .filter-title{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  .arrow{
    margin-left: 10px;
    margin-top: -15px;
    width: 15px;
    height: 15px;
  }
  h3{
    margin-bottom: 18px;
    text-align: left;
    font-family: $base-ff;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 26px;
    color: #006058;
    }
  }
  .d-f-item{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 255px;
  label{
    position: relative;
    display: flex;
    width: 120px;
    height: 60px;
    justify-content: start;
    align-items: center;
    padding-left: 18px;
    font-family: $base-ff;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 21px;
    color: #303030;
  }
  input{
    margin-left: -14px;
    position: absolute;
    width: 120px;
    height: 60px;
    padding-left: 47px;
    align-items: center;
    background: #FFFFFF;
    border: 1px solid #C0E8E4;
    box-sizing: border-box;
    border-radius: 20px;
    font-family: $base-ff;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 21px;
    color: #8F8F8F;
    z-index: -999;
  }
    .warning{
      border: 1px solid #E79BCE;
    }
}

}

</style>