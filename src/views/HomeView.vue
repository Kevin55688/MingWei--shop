<template>
  <Nav :isScrollTop="isScrollTop" :isBiggerMd="isBiggerMd"/>
  <HomeCom @isScrollTop="isScrollTopHandler" @isBiggerMd = "isBiggerMdHandler"/>
</template>

<script setup>
import { defineComponent, ref } from 'vue';
import Nav from "../components/home/NavCom.vue"
import HomeCom from '../components/HomeCom.vue'
const isScrollTop = ref(null)
const isBiggerMd = ref(null)

const isScrollTopHandler = (value) =>{
    isScrollTop.value = value
}

const isBiggerMdHandler = (value) => {
    isBiggerMd.value = value
}

</script>
