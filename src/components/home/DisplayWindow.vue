<script setup>
  import { useRouter } from "vue-router";
  const router = useRouter();

  const toOtherPage = (val) => {
    router.push(val);
    document.documentElement.scrollTop = 0;
  };
</script>



<template>
  <div class="container">
    <div
      class="main-title"
      ref="title"
    >
      <div class="logo">
        <img
          src="@/pic/logo.png"
          alt=""
        >
      </div>
      <p>products</p>
    </div>
    <div class="pdtList">
      <div
        class="card-container mx-5 my-10"
        @click="toOtherPage('/allproducts')"
      >
        <v-card class="cards">
          <img
            src="@/pic/紙製餐具.jpeg"
            alt=""
          >
        </v-card>
        <div class="second-title">
          <h3>紙製免洗餐具</h3>
        </div>
      </div>
      <div
        class="card-container mx-5 my-10"
        @click="toOtherPage('/allproducts')"
      >
        <v-card class="cards">
          <img
            src="@/pic/塑膠餐具.jpg"
            alt=""
          >
        </v-card>
        <div class="second-title">
          <h3>塑膠免洗餐具</h3>
        </div>
      </div>
      <div
        class="card-container mx-5 my-10"
        @click="toOtherPage('/allproducts')"
      >
        <v-card class="cards">
          <img
            src="@/pic/木製餐具.jpg"
            alt=""
          >
        </v-card>
        <div class="second-title">
          <h3>竹.木製餐具</h3>
        </div>
      </div>
      <div
        class="card-container mx-5 my-10"
        @click="toOtherPage('/allproducts')"
      >
        <v-card class="cards">
          <img
            src="@/pic/鋁箔餐具.jpeg"
            alt=""
          >
        </v-card>
        <div class="second-title">
          <h3>鋁箔製餐具</h3>
        </div>
      </div>
      <div
        class="card-container mx-5 my-10"
        @click="toOtherPage('/allproducts')"
      >
        <v-card class="cards">
          <img
            src="@/pic/包裝材料.jpg"
            alt=""
          >
        </v-card>
        <div class="second-title">
          <h3>包裝材料</h3>
        </div>
      </div>
      <div
        class="card-container mx-5 my-10"
        @click="toOtherPage('/allproducts')"
      >
        <v-card class="cards">
          <img
            src="@/pic/清潔用品.jpeg"
            alt=""
          >
        </v-card>
        <div class="second-title">
          <h3>清潔用品</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  $main-color: hsl(37.18, 100%, 50%);
  $second-color: hsl(38.61, 54.59%, 63.73%);
  .container {
    background-color: hsl(42, 62.5%, 96.86%);
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin: 500px auto;
    max-width: 1300px;
    // @media screen  and (max-width: 1300px){
    //     margin: 500px 8%;
    // }
    @media screen and (max-width: 600px) {
      margin: 500px auto 2rem;
    }

    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 500px;
      top: 0;
      left: 0;
      background-image: url("@/pic/floor-tile.png");
      background-repeat: repeat;
      mask: url("@/pic/bg.svg") no-repeat center top;
      -webkit-mask: url("@/pic/bg.svg") no-repeat center top;
      mask-size: 100% auto;
      -webkit-mask-size: 100% auto;
    }
    > .main-title {
      margin: 80px;
      text-align: center;
      color: rgba(128, 128, 128, 0.5);
      font-weight: bold;
      letter-spacing: 0.5rem;
      background-color: hsl(42, 62.5%, 96.86%);
      display: flex;
      flex-direction: column;
      @media screen and (max-width: 600px) {
        margin-bottom: 0;
      }
    }
    .pdtList {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      margin: 2rem 0;
      @media screen and (max-width: 600px) {
        margin: 0;
      }
      > .card-container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        cursor: pointer;
        position: relative;
        &:hover img {
          transform: scale(1.05);
        }
        &:hover .second-title {
          transform: translateY(-10px);
          background-color: hsl(75, 100%, 37%);
          color: white;
        }
        > .cards {
          max-width: 250px;
          min-height: 250px;
          // height: 200px;
          box-sizing: border-box;
          border-top-left-radius: 50%;
          border-top-right-radius: 50%;
          border: 8px solid $second-color;
          position: relative;
          @media screen and (max-width: 600px) {
            min-width: 150px;
            min-height: 150px;
          }
          > img {
            height: 234px;
            vertical-align: bottom;
            transition: 0.5s;
            @media screen and (max-width: 600px) {
              width: 134px;
              height: 134px;
            }
          }
        }
        > .second-title {
          background-color: $main-color;
          padding: 1rem 2rem;
          border-radius: 10px;
          box-sizing: border-box;
          position: absolute;
          bottom: -2.5rem;
          left: 0;
          font-weight: bold;
          transition: 1s;
          @media screen and (max-width: 600px) {
            padding: 0.5rem 1rem;
            bottom: -1.5rem;
          }
        }
      }
    }
  }
</style>
