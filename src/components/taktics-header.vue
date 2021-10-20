<template>
  <div>
    <div class="taktics-header">
      <h4 class="taktics-txt">Tactics</h4>
      <div class="taktic-grid">
        <div class="month">month</div>

        <div class="number">number</div>
        <div class="monday">day</div>
        <div>number</div>
        <div class="tuesday">day</div>
        <div>number</div>
        <div class="wednesday">day</div>
        <div>number</div>
        <div class="thursday">day</div>
        <div>number</div>
        <div class="friday">day</div>
        <div>number</div>
        <div class="saturday">day</div>
        <div>number</div>
        <div class="sunday">day</div>

        <div class="progress">progress</div>
      </div>
      <div class="goal-score">

      </div>
    </div>
    <div class="taktics-content">
      <h4>{{ taktic }}</h4>
      <div class="content">

      </div>
    </div>

  </div>


</template>

<script>

</script>

<style lang = "scss">
.taktics-header{
  max-width: 1111px;
  width: auto;
  display: flex;
  flex-direction: row;
  justify-columns: space-between;

  .taktics-txt{
    width: 300px;
    color: #A9ACBF;
    font-family: $base-ff;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.1px;
  }
  .taktic-grid{
    display: grid;
    grid-template-columns: repeat(8, 1fr) 67px;
    grid-template-rows: 18px 18px;
    grid-gap: 6px;
    grid-template-areas:
        "mon n n n n n n n pro"
        "mon m t w thu f s sun pro";

    .month{
      grid-area: mon;
      font-family: $base-ff;
      font-style: normal;
      font-weight: 300;
      font-size: 14px;
      line-height: 17px;
      text-align: center;
      letter-spacing: 0.1px;
      text-transform: capitalize;
      color: #A9ACBF;
    }
    .number{
      grid-area: n;
    }
    .monday{
      grid-area: m;
    }
    .tuesday{
      grid-area: t;
    }
    .wednesday{
      grid-area: w;
    }
    .thursday{
      grid-area: thu;
    }
    .friday{
      grid-area: f;
    }
    .saturday{
      grid-area: s;
    }
    .sunday{
      grid-area: sun;
    }
    .progress{
      grid-area: pro;
    }
  }
  .goal-score{
    width: 200px;
  }
}
.content{
  width: 258px;
  display: flex;
  justify-content: space-around;
}
</style>