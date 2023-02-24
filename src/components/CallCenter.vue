<script setup>
import { computed ,ref} from "vue";
const props = defineProps({
    currentLocalData : Array,
})
const emit = defineEmits(['deleteCart'])


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

const deleteHandler = (item) => {
    console.log(item);
    emit('deleteCart',item)
}

const totalPrice = computed (() => {
    if(!props.currentLocalData) return 0
    let total = 0
    for (let i = 0 ; i < props.currentLocalData.length ; i++) {
        total += props.currentLocalData[i].price * props.currentLocalData[i].quantity
    }
    return total
})
const hasCartList = computed (() => {
    if (!props.currentLocalData  || props.currentLocalData.length <= 0) {
        return false
    } else {
        return true
    }
})
const isCartListShow = ref(false)
</script>

<template>
    <div class="container">
        <a href="#" class="line">
            <img src="@/pic/line.png" alt="">
            <p>線上客服</p>
        </a>
        <div class="cart">
            <p>購物車</p>
            <div class="icon">
                <div class="badge">
                    <div v-if="currentLocalData">
                        {{ currentLocalData.length }}
                    </div>
                    <div v-else>0</div>
                </div>
                <v-icon icon="mdi-cart-variant" @click="isCartListShow = !isCartListShow"></v-icon>
            </div>
            <!-- <div :class="[cart-list,{'isShow' : isCartListShow}]"> -->
            <div :class="['cart-list', {'isShow' : isCartListShow}]">
                <div class="close" @click="isCartListShow = false">X</div>
                <div class="list-container">
                    <ul>
                        <li>
                            <div class="main-title">商品</div>
                            <div class="secondary-title">
                                <p>單價</p>
                                <p>數量</p>
                                <p>總計</p>
                            </div>
                        </li>
                        <li v-for="(item,index) in currentLocalData" :key="index" v-if="hasCartList">
                            <div class="item-title">
                                <div class="delete" @click="deleteHandler(item)">X</div>
                                <div class="pic">
                                    <img :src="item.src" alt="">
                                </div>
                                <p>{{ item.title }}</p>
                            </div>
                            <div class="content">
                                <div class="price">${{item.price}}</div>
                                <div class="quantity">{{ item.quantity }}</div>
                                <div class="total">${{ item.price *  item.quantity}}</div>
                            </div>                                                  
                        </li>
                        <li v-else>購物車內尚未有任何商品</li>
                    </ul>
                </div>
                <div class="confirm">
                    <div class="totalPrice">
                        總金額 ${{ totalPrice }} 
                    </div>
                    <div class="btn">
                        <button>去買單</button>
                    </div>
                </div>
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
        1.2.3 cart-list
            1.2.3.1 close
            1.2.3.2 list-container
                1.2.3.2.1 ul
                    1.2.3.2.1.1 first li>main-title / secondary-title
                    1.2.3.2.1.2 item-title
                        1.2.3.2.1.2.1 pic
                        1.2.3.2.1.2.2 p
                    1.2.3.2.1.3 content
                        1.2.3.2.1.3.1 price
                        1.2.3.2.1.3.2 quantity
            1.2.3.3 confirm
                1.2.3.3.1 totalPrice
                1.2.3.3.2 btn
                            
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
        bottom: -4rem;
        // left: 0;
        right: 0;
    }
    a{
        text-decoration: none;
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
        position: relative;
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
        >.cart-list{
            display: flex;
            align-items: center;
            flex-direction: column;
            padding: 1.5rem 2rem;
            min-width: 540px;
            max-height: 400px;
            overflow: hidden;
            position: absolute;
            background-color: white;
            border: 5px solid hsl(38.61,54.59%,63.73%);
            border-radius: 50px;
            transform: scale(1%);
            opacity: 0;
            visibility: hidden;
            top: -20px;
            right: -240px;
            transition : .5s;
            @media screen and (max-width : 600px) {
                min-width: 300px;
                top:-160px;
                right: -200px;
                padding: 2rem .5rem;
            }
            &.isShow{
                opacity: 1 ; 
                visibility:visible;
                transform: scale(100%);
                top: -100%;
                right: 100%;
                @media screen and (max-width : 600px) {
                    // top:-380px;
                    // right: -50px;
                    top: -400px;
                    right: 0;

                }
            }
            >.close{
                position: absolute;
                width: 20px;
                height: 20px;
                text-align: center;
                font-size: 12px;
                font-weight: bold;
                top: .5rem;
                right: 2rem;
                border: 1px solid hsl(0,0%,85.1%);
                border-radius: 50%;
                &:active{
                    background-color: hsl(0,0%,85.1%);
                }
            }
            >.list-container{
                width: 100%;
                height: 250px;
                overflow-y:scroll;
                margin-top: .5rem;
                padding: 0 1rem;
                margin-bottom: .5rem;
                ul {
                    li{
                        list-style: none;
                        display: flex;
                        justify-content: space-between;
                        &:first-child{
                            font-weight: bold;
                            background-color: hsl(0,0%,85.1%);
                        }
                        >.main-title{
                            width: 50%;
                        }
                        >.secondary-title {
                            display: flex;
                            width: 50%;
                            justify-content: space-around;
                        }
                        >.item-title{
                            width: 50%;
                            display: flex;
                            align-items: center;
                            >.delete{
                                width: 20px;
                                height: 20px;
                                text-align: center;
                                font-size: 12px;
                                font-weight: bold;
                                transform: translateX(-1rem);
                                border: 1px solid hsl(0,0%,85.1%);
                                &:active{
                                    background-color: hsl(0,0%,85.1%);
                                }
                            }
                            >.pic{
                                width: 20%;
                                margin-right: 2rem;
                                >img{
                                    width: 100%;
                                }
                            }
                        }
                        >.content{
                            display: flex;
                            width: 50%;
                            justify-content: space-around;
                            align-items: center;
                        }
                    }
                }
            }
            >.confirm{
                display: flex;
                align-items: center;
                @media screen and (max-width:600px) {
                    flex-direction: column;
                }
                >.totalPrice{
                    margin-right: 2rem;
                    @media screen and (max-width:600px) {
                        margin-right: 0;
                        margin-bottom: 1rem;
                }
                }
                >.btn {
                    button{
                        display: inline-block;
                        width: 200px;
                        padding: 12px 16px 12px 48px;
                        border-radius: 50px;
                        color: hsl(75.08,100%,37.45%);
                        font-weight:600;
                        font-size: 1.2rem;
                        letter-spacing: .15rem;
                        transition: all .3s;
                        position: relative;
                        overflow: hidden;
                        border: 1px solid hsl(75.08,100%,37.45%);
                        z-index: 1;
                        &:after {
                            content: '>';
                            position: absolute;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            font-size: 25px;
                            top: -2px;
                            left: 0;
                            width: 54.8px;
                            height: 54.8px;
                            color: white;
                            background-color: hsl(75.08,100%,37.45%);
                            border-radius: 50px;
                        }
                        &:before {
                            content: '';
                            position: absolute;
                            bottom: 0;
                            left: 0;
                            width: 54.8px;
                            height: 54.8px;
                            background-color: hsl(75.08,100%,37.45%);
                            transition: .5s;
                            border-radius: 10rem;
                            z-index: -1;
                        }
                        &:hover {
                            color: #fff;
                        &:before {
                            width: 100%;
                        }
                        }
                    }                    
                }
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



