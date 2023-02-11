<template>
    <div >
        <Nav :isScrollTop="isScrollTop" :isBiggerMd="isBiggerMd"/>
        <DisplayWindow @isScrollTop="isScrollTopHandler" @isBiggerMd = "isBiggerMdHandler"/>

    </div>
</template>

<script setup>
import Nav from "./home/NavCom.vue"
import DisplayWindow from "./home/DisplayWindow.vue"
import { ref } from "@vue/reactivity"
const isScrollTop = ref(null)
const isBiggerMd = ref(null)

const isScrollTopHandler = (value) =>{
    isScrollTop.value = value
}

const isBiggerMdHandler = (value) => {
    isBiggerMd.value = value
}
</script>