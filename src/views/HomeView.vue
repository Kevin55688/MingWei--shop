<template>
    <Nav :isScrollTop="isScrollTop" :isBiggerMd="isBiggerMd"/>
    <!-- 判斷是否在網頁最上面 -->
    <div class="isTopSensor" ref="isTopSensor"></div>
    <router-view @updateLocalStorage="updateLocalStorageHandler"></router-view>
    <HomeCom v-if="route.path === '/'"/>
    <CallCenter :currentLocalData="currentLocalData" @deleteCart="deleteCartHandler"/>
    <Footer/>
</template>

<script setup>
import {ref ,reactive} from 'vue';
import { onMounted, watch } from "@vue/runtime-core";
import Nav from "../components/NavCom.vue"
import HomeCom from '../components/HomeCom.vue'
import CallCenter from '../components/CallCenter.vue'
import Footer from '../components/FooterCom.vue'
import { useRoute } from 'vue-router';
const route = useRoute()
const windowSize = reactive({
    x:0
})
const isScrollTop = ref(null)
const isBiggerMd = ref(null)
const isTopSensor = ref(null)
const isRoutChange = ref(false)
const option = {
        rootMargin : "4000px 0px 0px 0px",
        threshold : 0
    }
const  callback = (entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            isScrollTop.value = false
        } else if(!entry.isIntersecting) {
            isScrollTop.value = true
        }
    }) 
}
const callbackRouter = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            isBiggerMd.value = false
        } else {
            isBiggerMd.value = true
        }
    })
}
const observe = new IntersectionObserver(callback,option)
const observeRouter = new IntersectionObserver(callbackRouter , option)

const toOtherRoutHandler = (val) => {
    isRoutChange.value = val
}


//取得最新localstorage內的購物車清單
const currentLocalData = ref(null)
const updateLocalStorageHandler = () => {
    if (!JSON.parse(localStorage.getItem('cartList'))) return 
    currentLocalData.value = [...JSON.parse(localStorage.getItem('cartList'))]
}
// 刪除購物車資料
const deleteCartHandler = (cartItem) => {
    currentLocalData.value = currentLocalData.value.filter((item) => {
        return item != cartItem
    })
    // 重新更新localStorage中的資料
    localStorage.setItem('cartList' , JSON.stringify(currentLocalData.value))
}

watch(windowSize,() => {
    if(windowSize.x > 960) {
        isTopSensor.value.getBoundingClientRect().y > window.innerHeight ? isScrollTop.value = true : isScrollTop.value = false
        observe.observe(isTopSensor.value)
    } else {
        isScrollTop.value = false
        observe.unobserve(isTopSensor.value)
    }
})
onMounted (() => {
    updateLocalStorageHandler()
    windowSize.x = window.innerWidth
    window.onresize = () => {
        windowSize.x = window.innerWidth
    }
    observeRouter.observe(isTopSensor.value)
})
</script>

<style scoped>
.isTopSensor{
    /* background-color: red; */
    border: 1px solid black;
    position: absolute;
    left: 0;
    width: 200px;
    height: 200px;
    top: 101vh;
    z-index: 9999;
    opacity: 0;
    visibility: 0;
}
</style>