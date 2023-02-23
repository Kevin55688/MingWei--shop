<script setup>
import Pic from '@/pic/紙碗.jpg'
import { reactive } from "@vue/reactivity";
const emit = defineEmits(['updateLocalStorage'])
const pdsData = reactive({
    src :  Pic,
    title : '紙碗',
    items : ['規格1','規格2','規格3',],
    selected:['規格1'],
    format : [{title: '高度' , content : '23mm'},{title: '口徑' , content : '40mm'},{title: '入數/箱' , content : '1500'},{title: '每箱價格' , content : '$600'},{title: '外箱尺寸' , content : '410*260*310mm'},],
    quantity : 1 ,
    price : 600,
})
const minus = () => {
    if(pdsData.quantity <= 1) return 
    pdsData.quantity -= 1
}




const setLocalData = () => {
    const updatePds = {title : pdsData.title , quantity : pdsData.quantity, src : pdsData.src ,price : pdsData.price}

    let currentLocalData
    // 若已建立cartList，則 currentLocalData 等於 原cartList + 新商品資料
    if (JSON.parse(localStorage.getItem('cartList'))) {
        currentLocalData = [...JSON.parse(localStorage.getItem('cartList')) , updatePds]
    } 
    // 若尚未建立cartList，則currentLocalData等於新商品資料
    else {
        currentLocalData = [updatePds]
    }
    // 將更新的資料寫入localStorage的cartList中
    localStorage.setItem('cartList' , JSON.stringify(currentLocalData))
    emit('updateLocalStorage')
}
</script>


<template>
    <div class="introduction-container">
        <div class="pic">
        <img :src="pdsData.src"  alt="">
    </div>
    <div class="introduction-main">
        <div class="title">{{ pdsData.title }}</div>
        <div class="type">
            <div class="type-title">類型</div>
            <v-select
                :items="pdsData.items"
                density="compact"
                v-model="pdsData.selected"
                hide-details="true"
                class="type-select"
                >
            </v-select>
        </div>
        <div class="edit-box">
            <p>
            Day Young製造廠生產的食品紙容器提供單面淋膜的咖啡杯，以及雙面淋膜的冷飲杯、飲料杯、冷熱共用杯等多種款式；我們有多款公版圖以及客製化私版印刷設計，同時我們也有多樣化的冷飲紙杯尺寸提供顧客選擇，客製化的印刷服務，讓客戶的品牌大量曝光，也大幅的提高了品牌及產品的能見度。
            </p>
        </div>
        <div class="format-list">
            <ul>
            <li v-for="item in pdsData.format" :key="item.title">
                <div class="format-title">
                {{ item.title }}
                </div>
            <p>{{ item.content }}</p>
            </li>
            </ul>
        </div>
        <div class="select-quantity">
            <div class="quantity-title">
            數量
            </div>
            <div class="btn-group">
            <button @click="minus">-</button>
            <p>{{pdsData.quantity}}</p>
            <button @click="pdsData.quantity++">+</button>
            </div>
        </div>
        <div class="add-cart">
            <button @click="setLocalData">加入購物車</button>
        </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
/*
1.introduction-container
1.1 pic
1.2 introduction-main
    1.2.1 title
    1.2.2 type
    1.2.2.1 type-title
    1.2.2.2 type-select
    1.2.3 edit-box
    1.2.4 format-list
    1.2.4.1 ul>li>format-title
    1.2.4.2 ul>li>p
    1.2.5 select-quantity
    1.2.5.1 quantity-title    
    1.2.5.2 btn-group
    1.2.6 add-cart
*/





.introduction-container{
    max-width: 1300px;
    padding: 2rem 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    margin-top: 2rem;
    border-radius: 50px;
    @media screen and (max-width : 960px) {
        flex-direction: column;
    }
    >.pic{
        width: 50%;
        padding: 2rem;
        @media screen and (max-width : 960px) {
        width: 100%;
        }
        img{
        width: 100%;
        }
    }
    >.introduction-main{
        display: flex;
        justify-content: center;
        flex-direction: column;
        width: 50%;
        padding: 2rem;
        @media screen and (max-width : 960px) {
        width: 100%;
        }
        >.title{
            font-size: 1.5rem;
            font-weight: bold;
            margin-bottom: 2rem;
            position: relative;
            &::after{
                content: '';
                position: absolute;
                height: .5rem;
                width: 2.5rem;
                border-radius: 10px;
                background: hsl(75.08,100%,37.45%);
                left: 0;
                bottom: -1rem;
            }
        }
        >.type{
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: .5rem;
            >.type-title{
                padding: .25rem .5rem;
                margin-right: .5rem;
                border-radius: 50px;
                color: white;
                background-color: hsl(75.08,100%,37.45%);
                font-size: .8rem;
                font-weight: bold;
            }
        }
        >.edit-box{
            font-weight: bold;
            letter-spacing: .15rem;
            line-height: 1.6rem;
            margin-bottom: .5rem;
            font-size: 14px;
        }
        >.format-list{
            margin-bottom: .5rem;
            ul{
                li{
                    display: flex;
                    align-items: center;
                    list-style: none;
                    margin-top: .5rem;
                    font-weight: bold;
                    font-size: .9rem;
                >.format-title{
                    padding: .25rem .5rem;
                    margin-right: .5rem;
                    border-radius: 50px;
                    color: white;
                    background-color: hsl(38.61,54.59%,63.73%);
                    font-weight: bold;
                    font-size: .8rem;
                }
                }
            }
        }
        >.select-quantity{
            display: flex;
            margin-bottom: 1rem;
            >.quantity-title{
                padding: .25rem .5rem;
                margin-right: .5rem;
                border-radius: 50px;
                color: white;
                background-color: hsl(38.61,54.59%,63.73%);
                font-weight: bold;
                font-size: .8rem;
            }
            >.btn-group{
                border: 1px solid hsl(0,0%,85.1%);
                display: flex;
                justify-content:start;
                border-radius: 50px;
                overflow: hidden;
                >button{
                padding: 0 .25rem;
                &:active{
                    transform: translateY(1px);
                    background-color: hsl(0,0%,85.1%);
                }
                &:nth-child(1) {
                    border-right: 1px solid hsl(0,0%,85.1%);
                }
                &:nth-child(3) {
                    border-left: 1px solid hsl(0,0%,85.1%);
                }
                }
                >p{
                margin: 0 .5rem;
                min-width: 2rem;
                text-align: center;
                }
            }
        }
        >.add-cart{
        margin: 0 auto;
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
</style>