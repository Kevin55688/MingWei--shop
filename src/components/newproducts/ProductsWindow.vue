<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const toPds = (val) => {
  router.push(val)
}
</script>


<template>
  <div class="pdtList">
    <div class="card-container mx-5 my-10" @click="toPds('/allproducts/lunchbox')">
        <v-card
        class="cards">
            <img src="@/pic/紙餐盒.png" alt="">
        </v-card>
        <div class="second-title">
            <h3>餐盒</h3>
        </div>
    </div>
    <div class="card-container mx-5 my-10" @click="toPds('/allproducts/paperbowl')">
        <v-card
        class="cards">
            <img src="@/pic/紙碗.jpg" alt="">
        </v-card>
        <div class="second-title">
            <h3>紙碗</h3>
        </div>
    </div>
    <div class="card-container mx-5 my-10"  @click="toPds('/allproducts/mealcup')">
        <v-card
        class="cards">
            <img src="@/pic/餐杯.jpg" alt="">
        </v-card>
        <div class="second-title">
            <h3>紙杯</h3>
        </div>
    </div>
    <div class="card-container mx-5 my-10" @click="toPds('/allproducts/plasticspoon')">
        <v-card
        class="cards">
            <img src="@/pic/湯匙.jpeg" alt="">
        </v-card>
        <div class="second-title">
            <h3>湯匙</h3>
        </div>
    </div>
    <div class="card-container mx-5 my-10">
        <v-card
        class="cards">
            <img src="@/pic/筷子.jpg" alt="" @click="toPds('/allproducts/plasticchopstick')">
        </v-card>
        <div class="second-title">
            <h3>筷子</h3>
        </div>
    </div>
    <div class="card-container mx-5 my-10" @click="toPds('/allproducts/woodenfork')">
        <v-card
        class="cards">
            <img src="@/pic/叉子.png" alt="">
        </v-card>
        <div class="second-title">
            <h3>叉子</h3>
        </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
$main-color:hsl(37.18,100%,50%);
$second-color : hsl(38.61,54.59%,63.73%);
.pdtList{
    max-width: 1300px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  >.card-container{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    cursor: pointer;
    position: relative;
    &:hover img{
        transform: scale(1.05);
    }
    &:hover .second-title {
        transform: translateY(-10px);
        background-color: hsl(75, 100%, 37%);
        color: white;
    }
    >.cards{
        max-width: 250px;
        min-height: 250px; 
        box-sizing: border-box;
        border-top-left-radius: 50%;
        border-top-right-radius: 50%;
        border: 8px solid $second-color;
        position: relative;
        >img{
            height: 250px;
            vertical-align:bottom;
            transition: .5s;
        }
    }
    >.second-title{
        background-color: $main-color;
        padding: 1rem 2rem;
        border-radius: 10px;
        box-sizing: border-box;
        position: absolute;
        bottom: -2.5rem;
        left: 0;
        font-weight:bold;
        transition: 1s;
    }
  }
}

</style>