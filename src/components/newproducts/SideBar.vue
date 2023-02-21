<script setup>
import { ref } from "@vue/reactivity";
const props = defineProps({
    menuItem : Array,
    tabsList : Array,
})

const emit = defineEmits(['selectItem', 'selectTab'])

const selectItem = (selectedItem) => {
  emit ( 'selectItem' , selectedItem)
}
const selectTab = (selectedTab) => {
  emit ( 'selectTab' , selectedTab)
}
</script>

<template>
    <div class="side-bar-zone">
      <div class="header">
        <div class="title">
              <img src="@/pic/logo.png" alt="">
              <p>products</p>
        </div>
        <div class="filter" >
          <input type="search" placeholder="產品搜尋" >
          <button>
            <v-icon icon="mdi-magnify"></v-icon>
          </button>
        </div>
      </div>
      <div class="tabs-group">
        <div class="menu">
          <ul>
            <li v-for="item in menuItem" :key="item.text" :class="{'active' : item.isActive}" @click="selectItem(item)">{{ item.text  }}</li>
        </ul>
        </div>
        <div class="tabs">
          <ul>
            <li v-for="tab in tabsList" :key="tab.id" :class="{'tabActive' : tab.isTabActive}" @click="selectTab(tab)">{{tab.item}}</li>
          </ul>
        </div>
      </div>
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
  .side-bar-zone {
    max-width: 1300px;
    background-color: white;
    display: flex;
    justify-content: center;
    border-radius: 50px;
    overflow: hidden;
    flex-wrap: wrap;
    align-items: center;
    >.header{
      width: 30%;
      padding: 2rem 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      @media screen and (max-width: 960px) {
        width: 100%;
        flex-direction: row;
      }
      @media screen and (max-width: 600px) {
        flex-direction: column;
      }
      >.title{
        width: 50%;
        box-sizing: border-box;
        text-align: center;
        color: rgba(128, 128, 128,.5);
        font-weight: bold;
        letter-spacing: .5rem;
        img{
          width: 100%;
          @media screen and (max-width: 960px) {
            width: 30%;
          }
          @media screen and (max-width: 600px) {
            width: 50%;
          }
        }
      }
      >.filter{
        width: 100%;
        margin-top: 2rem;
        display: flex;
        border: 1px solid hsl(0,0%,85.1%);
        border-radius: 50px;
        overflow: hidden;
        @media screen and (max-width: 960px) {
            margin: 0;
          }
          @media screen and (max-width: 600px) {
            margin-top: 2rem;
          }
        &:has(input:focus) {
          border: 2px solid black;
        }
        input{
          width: 80%;
          border: 1px solid black;
          padding:.5rem 1.5rem;
          border: none;
          &:focus{
            outline: none;
          }
        }
        button{
          width: 20%;
          border: none;
          color: hsl(38.61,54.59%,63.73%);
        }
      }
    }
    >.tabs-group{
      width: 70%;
      padding: 2rem 1rem;
      display: flex;
      flex-direction: column;
      @media screen and (max-width: 960px) {
        width: 100%;
      }
      >.menu{
        border-bottom: 1px dotted hsl(0,0%,85.1%);
        padding: 0 0 .3rem 0;
        ul{
          display: flex;
          flex-wrap: wrap;
          width: 100%;
          li{
            list-style: none;
            font-size: 1.1rem;
            letter-spacing: .2rem;
            width: 10rem;
            text-align: center;
            font-weight: bold;
            padding: 1rem 0;
            white-space:nowrap;
            box-sizing: border-box;
            position: relative;
            user-select: none;
            @media screen and (max-width: 600px) {
              margin: 0 auto;
            }
            &:after{
              content: '';
              position: absolute;
              width: 1px;
              height: 4px;
              background-color: $main-color;
              bottom: 0;
              left: 50%;
              transition: .6s;
              visibility: hidden;
            }
            &.active{
              &::before{
                content: '';
                width: 100%;
                height: 4px;
                background-color: $main-color;
                position: absolute;
                bottom: 0;
                left: 0;
              }
            }
            &:hover{
              color: hsl(0,0%,85.1%);
            }
            &:hover:after{
              visibility: visible;
              width: 100%;
              left: 0;
            }
          }
        }
      }
      >.tabs{
        padding: 1rem 0;
        ul{
          display: flex;
          flex-wrap: wrap;
          li{
            list-style: none;
            border: 1px solid $main-color;
            margin: .2rem;
            padding: .8rem;
            white-space:nowrap;
            border-radius: 50px;
            font-size: 1.1rem;
            font-weight: bold;
            letter-spacing: .2rem;
            transition: .6s;
            user-select: none;
            
            &.tabActive{
              background-color: $main-color;
              color: white;
            }
            &:hover{
              background-color: $main-color;
              color: white;
            }
          }
        }
      }
    }
  }

</style>