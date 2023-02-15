<script>
</script>

<template>
  <div class="container">
    <div class="main-title">
        <div class="logo">
            <img src="@/pic/logo.png" alt="">
        </div>
        <p>contact us</p>
    </div>
    <div class="introduction">
      <div class="introduction-side">
        <p>創業初期在台南開設一間包裝材料行的小店面，當時只有一台小發財服務南台灣客戶，一路在地耕耘，直至民國86年成立「明威餐具有限公司」，至今已在免洗餐具行業經營20餘年。</p>
        <div class="picMask">
          <img src="@/pic/factory.jpg" alt="">
        </div>
      </div>
      <div class="introduction-main">
        <p>
        明威始終秉持著「服務至上」的精神，為了滿足各行業客戶對於免洗餐具的需求，這幾十年來我們不斷積極更新產品與把關產品品質，也積極拓廠至目前的1000坪廠房、10部貨車，服務南台灣餐飲業及消費者。穩定的倉量與踏實服務使昇威成為客戶最堅定的後盾。</p>
        <div class="pic-container">
          <div class="pic"></div>
          <div class="pic"></div>
          <div class="pic"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$rotate:3deg;
/*table of contents 
1.container
  1.1 side-title
  1.2.introduction
    1.2.1 introduction-side
    1.2.2 form
      1.2.2.1 submit
    1.2.2.introduction-main
      1.2.2.1 p
      1.2.2.2 pic-container
        1.2.2.2.1 pic
*/

.container{
  margin: 500px 8% 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  >.main-title{
    border-top-left-radius: 350px;
    border-top-right-radius: 350px;
    width: 350px;
    height: 175px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    overflow: hidden;
    p{
      color: hsl(180,0.99%,80.2%);
      letter-spacing: .5rem;
      font-weight: bold;
    }
  }
  >.introduction{
    display: flex;
    background-color: rgb(255, 255, 255);
    padding: 0 2rem 5rem 0;
    border-radius: 40px;
    flex-wrap: wrap;
    width: 100%;
    >.introduction-side{
      background:hsl(43.75,66.67%,57.65%);
      width: 40%;
      padding: 30px 10px;
      border-radius: 20px;
      font-size: 1.2rem;
      color: white;
      font-weight: bold;
      letter-spacing: .3rem;
      line-height: 2rem;
      transform: rotate(-$rotate);
      position: relative;
      top: 3rem;
      left: -2rem;
      @media screen and (max-width : 960px) {
        width: 100%;
      }
      &::after,&::before {
        content: '';
        position: absolute;
        color: black;
        transform: rotate($rotate);
        font-weight: bold;
        font-size: 1.5rem;
        border-radius: 10px;
      }
      &::before{
        content: 'mingwei';
        top: -15px;
        margin: 0px 30px;
        padding: 5px 20px;
        background: repeating-linear-gradient(120deg,hsl(51.53,100%,50%),hsl(51.53,100%,50%) 15px,white 0,white 30px)
      }
      &::after{
        width: 5rem;
        height: 2rem;
        padding: 5px 20px;
        right: -20px;
        bottom: 30px;
        background: repeating-linear-gradient(120deg,white,white 15px,hsl(51.53,100%,50%) 0,hsl(51.53,100%,50%) 30px)
      }
      >.picMask{
        transform: translateX(10%);
        width: 100%;
        margin-top: 50px;
        margin-bottom: 20px;
        mask:url('@/pic/picMask.svg') no-repeat center top;
        -webkit-mask:url('@/pic/picMask.svg') no-repeat center top;
        mask-size: contain;
        -webkit-mask-size: contain;
        img{
          transform: rotate($rotate);
          width: 100%;
          object-fit:contain;
        }
      }
    }
    .introduction-main{
      width: 60%;
      padding: 20px;
      @media screen and (max-width : 960px) {
        width: 100%;
      }
      >p{
        font-size: 1.2rem;
        font-weight: bold;
        letter-spacing: .2rem;
        margin-bottom: 3rem;
        line-height: 1.8rem;
      }
      >.pic-container{
        border-radius: 15px;
        overflow: hidden;
        display: grid;
        grid-template-columns: 1fr,1fr;
        grid-template-rows: 10rem 15rem ;
        grid-gap: 5px;
        >.pic{
          background-color: yellow;
          &:nth-child(1){
            grid-column:1/2;
            grid-row: 1/3;
            background-image: url('@/pic/about3.jpeg');
            background-size: cover;
          }
          &:nth-child(2){
            grid-column:2/3;
            grid-row: 1/2;
            background-image: url('@/pic/about1.jpg');
            background-size: cover;
          }
          &:nth-child(3){
            background-color: green;
            grid-column:2/3;
            grid-row: 2/3;
            background-image: url('@/pic/about2.jpg');
            background-size: cover;
          }
        }
      }
    }


    // form{
    //   width: 60%;
    //   padding: 20px;
    //   @media screen and (max-width : 960px) {
    //     width: 100%;
    //   }
    //   .input-title{
    //     white-space:nowrap;
    //     display: flex;
    //     font-weight: bold;
    //   }


    //   input{
    //     border: 1px solid black;
    //     padding: 6px 12px;
    //     border-radius: 10px;
    //     border-color: hsl(0,0%,86.27%);
    //     width: 100%;
    //   }
    //   .radio{
    //     display:flex;
    //     input{
    //       width: 13px;
          
    //     }
    //   }
    //   input[type="textarea"] {
    //       height: 200px;
    //     }
    //     .submit{
    //       button{
    //         display: inline-block;
    //         width: 200px;
    //         padding: 12px 16px 12px 48px;
    //         border-radius: 50px;
    //         color: hsl(75.08,100%,37.45%);
    //         font-weight:600;
    //         font-size: 1.2rem;
    //         letter-spacing: .15rem;
    //         transition: all .3s;
    //         position: relative;
    //         overflow: hidden;
    //         border: 1px solid hsl(75.08,100%,37.45%);
    //         z-index: 1;
    //         &:after {
    //           content: '>';
    //           position: absolute;
    //           display: flex;
    //           justify-content: center;
    //           align-items: center;
    //           font-size: 25px;
    //           top: -2px;
    //           left: 0;
    //           width: 54.8px;
    //           height: 54.8px;
    //           color: white;
    //           background-color: hsl(75.08,100%,37.45%);
    //           border-radius: 50px;
    //         }
    //         &:before {
    //           content: '';
    //           position: absolute;
    //           bottom: 0;
    //           left: 0;
    //           width: 54.8px;
    //           height: 54.8px;
    //           background-color: hsl(75.08,100%,37.45%);
    //           transition: .5s;
    //           border-radius: 10rem;
    //           z-index: -1;
    //         }
    //         &:hover {
    //           color: #fff;
    //           &:before {
    //             width: 100%;
    //           }
    //         }
    //       }
    //     }
    // }
  }
}
</style>