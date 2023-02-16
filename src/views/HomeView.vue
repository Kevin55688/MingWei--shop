<template>
    <Nav :isScrollTop="isScrollTop" :isBiggerMd="isBiggerMd" @isRoutChange="toOtherRoutHandler"/>
    <!-- 判斷是否在網頁最上面 -->
    <div class="isTopSensor" ref="isTopSensor"></div>
    <router-view></router-view>
    <HomeCom v-if="!isRoutChange"/>
    <CallCenter/>
    <Footer/>

</template>

<script setup>
import {ref ,reactive} from 'vue';
import { onMounted, watch } from "@vue/runtime-core";
import Nav from "../components/NavCom.vue"
import HomeCom from '../components/HomeCom.vue'
import CallCenter from '../components/CallCenter.vue'
import Footer from '../components/FooterCom.vue'
const windowSize = reactive({
    x:0
})
const isScrollTop = ref(null)
const isBiggerMd = ref(null)
const isTopSensor = ref(null)
const isRoutChange = ref(false)
const option = {
        rootMargin : "4000px 0px -200px 0px",
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
    console.log(val);
    isRoutChange.value = val
}
watch(windowSize,() => {
    if(windowSize.x > 960) {
        isTopSensor.value.getBoundingClientRect().y > 0 ? isScrollTop.value = true : isScrollTop.value = false
        observe.observe(isTopSensor.value)
    } else {
        isScrollTop.value = false
        observe.unobserve(isTopSensor.value)
    }
})
onMounted (() => {
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
    top: 600px;
    z-index: -9999;
    opacity: 0;
    visibility: 0;
}
</style>