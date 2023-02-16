<script setup>
import { ref } from "@vue/reactivity";

const quantity = ref(0)
const toTop = () => {
    let timer  = setInterval(() => {
        let backTop =  document.documentElement.scrollTop
        let speedTop = backTop/8
        document.documentElement.scrollTop = backTop - speedTop
        if(backTop < 50) {
            clearInterval(timer)
        }
    }, 30);
}


</script>

<template>
    <div class="container">
        <div class="line">
            <img src="@/pic/line.png" alt="">
            <p>線上客服</p>
        </div>
        <div class="cart">
            <p>購物車</p>
            <div class="icon">
                <div class="badge">{{ quantity }}</div>
                <v-icon icon="mdi-cart-variant"></v-icon>
            </div>
        </div>
        <div class="goTop " @click="toTop">
            <v-icon icon="mdi-chevron-up"></v-icon>
        </div>
    </div>
</template>

<style lang="scss" scoped>
/*
1.container
    1.1 line
        1.1.1 img
        1.1.2 p
    1.2 cart
        1.2.1 p
        1.2.2 icon
    1.3 goTop
*/




.container{
    width: 60px;
    height: 25rem;
    position: fixed;
    bottom: 5%;
    right: 1rem;
    z-index: 9999;
    border-radius: 50px;
    user-select: none;
    @media screen and (max-width : 600px) {
        width: 100%;
        display: flex;
        height: 7rem;
        bottom: -11%;
        left: 0;
    }
    >.line{
        width: 100%;
        height: 50%;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: hsl(75.08,100%,37.45%);
        border-top-right-radius: 50px;
        border-top-left-radius: 50px;
        @media screen and (max-width : 600px) {
            width: 45%;
            flex-direction: row;
        }
        >img{
            margin: 10px;
            width: calc(100% - 20px);
            @media screen and (max-width : 600px) {
            width: 12%;
        }
        }
        >p{
            writing-mode: vertical-lr;
            font-size: 1.2rem;
            letter-spacing: .8rem;
            color: white;
            font-weight: bold;
            @media screen and (max-width : 600px) {
                writing-mode:horizontal-tb;
            }
        }
    }
    >.cart{
        background: hsl(38.61,54.59%,63.73%);
        width: 100%;
        height: 50%;
        border-bottom-right-radius: 50px;
        border-bottom-left-radius: 50px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        @media screen and (max-width : 600px) {
            width: 45%;
            flex-direction: row;
            border-bottom-right-radius: 0px;
            border-bottom-left-radius: 0px;
            border-top-right-radius: 50px;
            border-top-left-radius: 50px;
        }
        >p{
            writing-mode: vertical-lr;
            font-size: 1.2rem;
            letter-spacing: 1.2rem;
            color: white;
            font-weight: bold;
            @media screen and (max-width : 600px) {
                writing-mode:horizontal-tb;
            }
        }
        >.icon{
            color: hsl(38.61,54.59%,63.73%);
            background-color: white;
            border-radius: 50%;
            padding: .3rem;
            position: relative;
            @media screen and (max-width : 600px) {
            }
            >.badge{
                position: absolute;
                top: -10px;
                right: -5px;
                padding: 1px;
                width: 1.2rem;
                height: 1.2rem;
                display: flex;
                justify-content: center;
                align-items: center;
                color: hsl(38.61,54.59%,63.73%);
                font-weight: bold;
                border-radius: 50%;
                background-color: white;
            }

        }
    }
    >.goTop{
        display: none;
        @media screen and (max-width : 600px) {
            width: 10%;
            height: 50%;
            background-color: hsl(49.58,100%,46.27%);
            border-top-right-radius: 50px;
            border-top-left-radius: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 2rem;
        }
    }
}
</style>



