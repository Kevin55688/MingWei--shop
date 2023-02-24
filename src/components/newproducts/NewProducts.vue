<script setup>
import SideBar from './SideBar.vue'
import { ref } from "@vue/reactivity";
const menuItem = ref([
  {text : '紙製免洗餐具' , isActive : true , list : [
                                                      {id : 1 , item : '全部' ,isTabActive : true},
                                                      {id : 2 , item : '多格餐盒' , isTabActive : false},
                                                      {id : 3 , item : '單格餐盒' , isTabActive : false},
                                                      {id : 4 , item : '湯杯.飲料杯' , isTabActive : false},
                                                      {id : 5 , item : '碗.紙餐盤' , isTabActive : false},
                                                      {id : 6 , item : '環保植纖維餐具' , isTabActive : false},
                                                      {id : 7 , item : '日式餐盒' , isTabActive : false},
                                                      {id : 8 , item : '美式餐盒' , isTabActive : false},
                                                                                        ]},
  {text : '塑膠免洗餐具' , isActive : false , list : [
                                                      {id : 1 , item : '全部' , isTabActive : true},
                                                      {id : 2 , item : '塑膠餐盒' , isTabActive : false},
                                                      {id : 3 , item : '塑膠杯' , isTabActive : false},
                                                      {id : 4 , item : '塑膠湯碗' , isTabActive : false},
                                                      {id : 5 , item : '透明食品盒' , isTabActive : false},
                                                                                      ]},
  {text : '竹.木製餐具' , isActive : false, list : [
                                                    {id : 1 , item : '全部' , isTabActive : true},
                                                                            ]},
  {text : '鋁箔製餐具' , isActive : false , list : [
                                                    {id : 1 , item : '全部' , isTabActive : true},
                                                                            ]},
  {text : '包裝材料' , isActive : false , list : [
                                                    {id : 1 , item : '全部' , isTabActive : true},
                                                                            ]},
  {text : '清潔用品' , isActive : false , list : [
                                                    {id : 1 , item : '全部',isTabActive : true},
                                                                            ]}
])
const emit = defineEmits(['updateLocalStorage'])
const tabsList = ref(menuItem.value[0].list)
const selectItem = (selectedItem) => {
  menuItem.value.forEach((item) => {
    item.isActive = item === selectedItem
    tabsList.value = selectedItem.list
  })
}

const selectItemHandler = (val) => {
  menuItem.value.forEach((item) => {
    item.isActive = item === val
    tabsList.value = val.list
  })
}

const selectedTabHandler = (val) => {
  tabsList.value.forEach ((tab) => {
    tab.isTabActive = tab === val
  })
}

const updateLocalStorageHandler = () => {
  emit('updateLocalStorage')
}
</script>

<template>
<div class="container">
  <SideBar :menuItem="menuItem" :tabsList="tabsList" @selectItem = "selectItemHandler" @selectTab="selectedTabHandler"/>
  <router-view @updateLocalStorage="updateLocalStorageHandler"></router-view>
</div>
</template>

<style lang="scss" scoped>
$main-color:hsl(75.08,100%,37.45%);
/*
    1. container
        1.1 side-bar-zone
          1.1.1 header
            1.1.1.1 title
              1.1.1.1.1 img
              1.1.1.1.2 p
            1.1.1.2 filter
          1.1.2 tabs-group
            1.1.2.1 menu
            1.1.2.2 tabs
*/
.container{
  margin: 0 8%;
  margin-top : 610px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media screen  and ( max-width: 600px){
    margin-top: 500px;
  }
}
</style>