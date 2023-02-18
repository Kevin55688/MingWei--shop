
<script setup>
import { ref } from "@vue/reactivity"
import { useRouter } from 'vue-router'
const emit = defineEmits('isRoutChange')
const router = useRouter()
const props = defineProps({
    isScrollTop : Boolean,
    isBiggerMd : Boolean,
})
const isRoutChange = ref(null)

const toHome = () => {
    isRoutChange.value = false
    emit('isRoutChange' , isRoutChange.value)
    router.replace('/')
    document.documentElement.scrollTop = 0
}
const toOther = (val) => {
    isRoutChange.value = true
    emit('isRoutChange' , isRoutChange.value)
    router.push(val)
    document.documentElement.scrollTop = 0
}
</script>

<template>
    <header >
        <nav :class="{'justify-center' : isScrollTop}">
            <a href="/" :class="['logo' ,{'scroll-top-logo': isScrollTop}]" >
                <img src="../components/home/logo/logo.png" alt="">
            </a>
            <div :class="['nav-container', 'd-flex', {'scroll-top-nav-container' : isScrollTop}]">
                
                <div href="#" :class="['nav-item', {'scroll-top-nav-item' :isScrollTop ,'isNotScrollTopHover' : !isScrollTop} ]" @click="toHome">
                    <div class="icon">
                        <v-icon size="60px" class="d-none d-md-flex">mdi-home-outline</v-icon>
                    </div>
                    <p>首頁</p>
                </div >
                <div :class="['nav-item', {'scroll-top-nav-item' :isScrollTop ,'isNotScrollTopHover' : !isScrollTop} ]" @click="toOther('/about')">
                    <div class="icon">
                        <v-icon size="60px" class="d-none d-md-flex ">mdi-coffee-outline</v-icon>
                    </div>
                    <p>關於我們</p>
                </div >
                <div  :class="['nav-item', {'scroll-top-nav-item' :isScrollTop ,'isNotScrollTopHover' : !isScrollTop} ]" @click="toOther('/newproducts')">
                    <div class="icon">
                        <v-icon size="60px" class="d-none d-md-flex ">mdi-silverware-variant</v-icon>
                    </div>
                    <p>最新商品</p>
                    <div class="list-container">
                        <ul>
                            <li>紙製免洗餐具</li>
                            <li>塑膠免洗餐具</li>
                            <li>竹.木製餐具</li>
                            <li>鋁箔製餐具</li>
                            <li>包裝材料</li>
                            <li>清潔用品</li>

                        </ul>
                    </div>
                </div >
                <div  :class="['nav-item', {'scroll-top-nav-item' :isScrollTop ,'isNotScrollTopHover' : !isScrollTop} ]" @click="toOther('/contactus')">
                    <div class="icon">
                        <v-icon size="60px" class="d-none d-md-flex">mdi-email-outline</v-icon>
                    </div>
                    <p>聯絡我們</p>
                </div >
            </div>
        </nav>
        <div class="banner" v-if="isBiggerMd">
            <div class="banner-img">
                <img src="@/pic/dinner.jpg" alt="">
            </div>
            <div class="slogin">
                <h1>您的需求，我的服務，積極溝通，價格公道</h1>
            </div>
        </div>
    </header>
</template>


<style lang="scss" scoped>
$main-color :hsl(37, 93%, 49%) ;
$main-color-dark-1 : hsl(28, 82%, 50%);
$transition-time : .5s;
header{
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 500;
    nav {
        width: 100%;
        display: flex;
        position: relative;
        .logo{
            min-width: 120px;
            max-width: 200px;
            border-bottom-left-radius: 100%;
            border-bottom-right-radius: 100%;
            object-fit: cover;
            overflow: hidden;
            box-shadow: 0px 13px 33px 8px rgba(0,0,0,0.35);
            z-index: 2;
            transition: $transition-time;
            img {
                width: 100%;
                vertical-align: bottom;
                opacity: .9;
            }
            &.scroll-top-logo{
                max-width: 230px;
            }
        }
        .nav-container{
            width: 100%;
            height: 60%;
            color: white;
            box-sizing: border-box;
            background-color: $main-color;
            position: relative;
            transition: $transition-time;
            
            &.scroll-top-nav-container{
                position: absolute;
                top: 400px;
                justify-content: space-around;
                background-color: transparent;

            }
            &:after{
                content: '';
                width: 100%;
                height: 100%;
                position: absolute;
                background-color: $main-color;
                transform: translateX(-100%);
            }
            .nav-item  {
                width: 25%;
                display: flex;
                justify-content: center;
                text-align: center;
                flex-direction: column;
                font-weight: bold;
                position: relative;
                margin: 10px;
                font-size: 1.5rem;
                transition: $transition-time;
                box-sizing: border-box;
                user-select: none;
                &:hover .icon{
                    transform: rotate(-30deg) translateY(-20px);
                }
                &:not(:first-child) {
                    &::after{
                        content: '';
                        width: 100%;
                        height: 100%;
                        position: absolute;
                        right: 10px;
                        border-left: 5px dotted white;
                    }
                }
                .icon{
                    display: flex;
                    justify-content: center;
                    transition: .3s ease-in-out; 
                }
                &:nth-child(3){
                    &:hover .list-container{
                        opacity: 1;
                        visibility: visible;
                        transform: translateX(-50%) translateY(80%);
                    }
                }
                &.isNotScrollTopHover:hover p{
                    color: gray;
                }
                &.isNotScrollTopHover:hover .list-container{
                    transform: translateX(-50%) translateY(66%);
                    color: white;
                    }
                
                &.scroll-top-nav-item{
                    background-color: $main-color;
                    width: 200px;
                    height: 200px;
                    border-radius: 50%;
                    border: 20px dotted yellow;
                    z-index: 2;
                    &::after{
                        content: '';
                        width: 100%;
                        height: 100%;
                        position: absolute;
                        border: none;
                    }
                }

                .list-container{
                    position: absolute;
                    min-width: 250px;
                    right: 50%;
                    left: 50%;
                    transform: translateX(-50%) scale(.1);
                    background-color: $main-color-dark-1;
                    border-radius: 10px;
                    opacity: 0;
                    visibility: hidden;
                    transition: 1s;
                    ul{
                        list-style: none;
                        font-size: 1rem;

                        >li{
                            padding : 20px 0;
                            box-sizing: border-box;
                            position: relative;
                            transition: .5s;
                            &:not(:last-child) {
                                &::after{
                                    content: '';
                                    position: absolute;
                                    width: 10%;
                                    bottom: 0;
                                    left: 45%;
                                    transition: .5s;
                                    border-top: 1px dotted white;
                                }
                            }
                            &:hover{
                                color: gray;
                            }

                            &:hover::after {
                                width: 70%;
                                left: 15%;
                            }
                        }
                    }
                    
                }
            }
        }
    }
    .banner {
        display: flex;
        justify-content: center;
        align-items: center;
        background-repeat: repeat;
        position: absolute;
        top: 0;
        width: 100%;
        background-color: hsl(26, 83%, 58%);
        overflow: hidden;
        z-index: -1;
        .banner-img{
            position: relative;
            img{
                animation: scale-up-center 20s cubic-bezier(0.390, 0.575, 0.565, 1.000) infinite alternate both;
            }
        }
        .slogin{
            position: absolute;
            top: 60%;
            color: white;
            font-weight: bold;
            font-size: 20px;
            text-align: center;
        }
        
    }
}

@keyframes scale-up-center {
    0% {
            transform: scale(1);
    }
    100% {
            transform: scale(1.5);
    }
}


.block{
    width: 100px;
    height: 600px;
    background-color: blue;
}

.block2{
    width: 300px;
    height: 300px;
    background-color: red;
}
</style>