<template>
  <footer>
    <div class="container">
      <div class="main">
        <div class="address">
          <div class="title">明威餐具有限公司</div>
          <p>電話: <strong>06-1234-5678</strong></p>
          <p>地址: 台南市台南市台南一路二段345號</p>
        </div>
        <div class="qr-code">
          <img src="../pic/qrcode.webp" alt="">
          <p>LINE</p>
        </div>
      </div>
      <div class="copyright">
        ©僅為薛琮潾學習用途
      </div>
    </div>
    <img src="../pic/body-bottom.svg" class="footerBg">
  </footer>

</template>

<style lang="scss" scoped>

footer{
  padding: 4em 0;
  position: relative;
  >.footerBg{
    width: 100%;
    position: absolute;
    bottom: 0;
    opacity: .7;
    left: 0;
    pointer-events: none;
    z-index: 1;
  }
}
/*
1.container
  1.1main
    1.1.1 address
      1.1.1.1 title
      1.1.1.2 p
    1.1.2 qr-code
  1.2 copyright
*/
.container{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 1.2rem;
  width: 100%;
  position: relative;
  z-index: 2;
  // max-height: 400px;
  // min-height:400px;
  >.main{
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px dotted hsl(40,1.35%,56.27%);
    padding: 0 2rem;
    >.address{
      margin:  1rem 2rem 1rem 0;
      border-right: 1px dotted hsl(40,1.35%,56.27%);
      >.title{
        background-color: hsl(38.61,54.59%,63.73%);
        border-radius: 50px;
        width: 12rem;
        text-align: center;
        padding: .3rem .8rem;
        color: white;
        font-weight: bold;
        margin: .5rem;
      }
      p{
        font-weight: 500;
        margin: .5rem;
        strong{
          font-size: 1.5rem;
          letter-spacing: .2rem;
          @media screen  and (max-width:600px) {
            font-size: 1.3rem;
            letter-spacing: normal;
          }
          
        }
      }
    }
    >.qr-code{
      max-width: 100px;
      img{
        width: 100%;
      }
      p{
        color: white;
        background-color: hsl(75.08,100%,37.45%);
        text-align: center;
        letter-spacing: .3rem;
        font-size: 1rem;
        border-radius: 50px;
      }
    }
  }
  >.copyright{
    font-size: .9rem;
    letter-spacing: .3rem;
  }
}
</style>