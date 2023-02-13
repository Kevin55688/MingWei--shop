<template>
    <div >
        <DisplayWindow @isScrollTop="isScrollTopHandler" @isBiggerMd = "isBiggerMdHandler"/>
        <ContactUs/>
    </div>
</template>

<script setup>
import Nav from "./home/NavCom.vue"
import DisplayWindow from "./home/DisplayWindow.vue"
import ContactUs from "./home/ContactUs.vue"
const emit = defineEmits('isScrollTop')

const isScrollTopHandler = (value) =>{
    emit('isScrollTop', value)
}

const isBiggerMdHandler = (value) => {
    emit('isBiggerMd', value)
}
</script>