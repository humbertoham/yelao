import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root{
    --maxWidth: 1280px;
    --white: #ffffff;
    --black: #2e282a;
    --blue: #0202f8;
    --brown: #472e2d;
    --red: #b2011e;
    --sienna: #450920;
    --yellow: #fdfdb9;
    --orange: #ffa03c;
    --fontSuperBig: 2.5rem;
    --fontBig: 1.5rem;
    --fontMed: 1.2rem;
    --fontSmall: 1rem; 
    --swiper-theme-color: #472e2d;
    --swiper-navigation-size: 2rem;
    scroll-behavior: smooth;
}
*{
    box-sizing: border-box;

}

body{
    margin: 0;
    padding: 0;

    #html{
        color:#e34c26;
    }
    #css{
        color:#2965f1;
    }
    #js{
        color:#f0db4f;
    }
    #nodejs{
        color:#68a063;
    }
    #react{
        color:#61DBFB;
    }
    .Icon{
        display: block;
        margin: auto;
        color:var(--yellow);
        font-size: 3rem;
    }
    .container {
  display: flex;
  flex-wrap: wrap;
  max-width: 1300px;
  justify-content: center;
  margin: auto;
  padding-bottom: 64px;
}
.last{
  padding-top: 5px;
}
.right{
    float: right;
    p{
      color: var(--black);
      text-align: right;
    }
}
span{
    display: block;
}

.primero{
     animation: zoomin 1s ;
    @keyframes zoomin {
  0% {
    -webkit-transform: scale(0);
            transform: scale(0);
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
}
}
.segundo{
    animation: zoomin 2s ;
    @keyframes zoomin {
  0% {
    -webkit-transform: scale(0);
            transform: scale(0);
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
}
}
.tercero{
    animation: zoomin 3s ;
    @keyframes zoomin {
  0% {
    -webkit-transform: scale(0);
            transform: scale(0);
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
        
  }
     
}
 @media (max-width: 768px) {
            padding-bottom: 10px;
  }
}
.cuarto{
   animation: zoomin 4s ;
    @keyframes zoomin {
  0% {
    -webkit-transform: scale(0);
            transform: scale(0);
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
        
  }
     
}
 @media (max-width: 768px) {
            padding-bottom: 10px;
  }
}
.hei{
    height: 300px;
     @media (max-width: 700px) {
            height: 0;
  }
}
    hr{
    height: 0.1px;
    width: 100%;
    background-color: var(--white);
    margin: none;
    }
    .foot{
        padding-bottom: 20px;
    }
    .menu{
        display: none;
         @media (max-width: 768px) {
            display: flex;
  }
    }

    h1{
        font-size: 2rem;
        font-weight: 600;
        color: var(--black);

    }
    h3{
        font-size: 1.1rem;
        font-weight: 600;
    }
    p{
        font-size: 1rem;
        color: var(---white);
    }
}
@keyframes showTopText {
  0% { transform: translate3d(0, 100%, 0); }
  40%, 60% { transform: translate3d(0, 50%, 0); }
  100% { transform: translate3d(0, 0, 0); }
}
@keyframes showBottomText {
  0% { transform: translate3d(0, -100%, 0); }
  100% { transform: translate3d(0, 0, 0); }
}
.animated-title {
  color:var(--white);
  height: 90vmin;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 90vmin;
  margin: auto;
  display: block;
}
.animated-title > div {
  height: 50%;
  overflow: hidden;
  position: absolute;
  width: 100%;
}
.animated-title > div div {
  font-size: var(--fontSuperBig);
  padding: 0;
  position: absolute;
  @media (max-width: 768px) {
             font-size: var(--fontBig);
  }
}
.animated-title > div div span {
  display: block;
}
.animated-title > div.text-top {
  border-bottom: 1vmin solid var(--white);
  top: 0;
}
.animated-title > div.text-top div {
  animation: showTopText 1s;
  animation-delay: 0.5s;
  animation-fill-mode: forwards;
  
  bottom: 0;
  transform: translate(0, 100%);
}
.animated-title > div.text-top div span:first-child {
  color: var(--white);
}
.animated-title > div.text-bottom {
  bottom: 0;
}
.animated-title > div.text-bottom div {
  animation: showBottomText 0.5s;
  animation-delay: 1.75s;
  animation-fill-mode: forwards;
  top: 0;
  transform: translate(0, -100%);
}
.demo a {
  position: absolute;
  bottom: 50px;
  left: 50%;
  z-index: 2;
  display: inline-block;
  -webkit-transform: translate(0, -50%);
  transform: translate(0, -50%);
  color: #fff;
  font : normal 400 20px/1 'Josefin Sans', sans-serif;
  letter-spacing: .1em;
  text-decoration: none;
  transition: opacity .3s;
}
.demo a:hover {
  opacity: .5;
  
}
#section05 a {
  padding-top: 70px;
}
#section05 a span {
  position: absolute;
  top: 170px;
  left: 50%;
  width: 24px;
  height: 24px;
  margin-left: -12px;
  border-left: 3px solid #fff;
  border-bottom: 3px solid #fff;
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
  -webkit-animation: sdb05 1.5s infinite;
  animation: sdb05 1.5s infinite;
  box-sizing: border-box;
  
}
@-webkit-keyframes sdb05 {
  0% {
    -webkit-transform: rotate(-45deg) translate(0, 0);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    -webkit-transform: rotate(-45deg) translate(-20px, 20px);
    opacity: 0;
  }
}
@keyframes sdb05 {
  0% {
    transform: rotate(-45deg) translate(0, 0);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: rotate(-45deg) translate(-20px, 20px);
    opacity: 0;
  }
}
.whats{
  color:#25D366;
}
.Google{
  color:var(--blue);
  margin-right:10px;
}
.pt{
  padding-top: 0px;
  padding-bottom: 50px;
  max-width: 500px;
}
.ptp{
  padding-top: 0px;
}
.pin{
  color: var(--red);
}
.ab{
  color: var(--blue);
  @media (max-width: 768px) {
           font-size: 5rem;
  }
  :hover{
    color:var(--yellow);
  }
   
}
.big{
  h1{
font-size: var(--fontSuperBig);
  }
  
}
.ad{
    margin: auto;
    text-align: center;
  color: var(--blue);
  @media (max-width: 768px) {
           font-size: 5rem;
  }
  :hover{
    color:var(--yellow);
  }
}
.email{
  color: var(--blue);
  padding-right:5px ;
}
.db{
  display: none;
  @media (max-width: 768px) {
            display: block;
  }
}
.dp{
  display: unset;
  @media (max-width: 768px) {
            display: none;
  }
}
.user{
margin-right: 10px;
}
.google{
  border: none;
  height: 400px;
  width: 400px;
  text-align:center;
  @media (max-width: 768px) {
           padding: 0;
           height: 250px;
           width: 100%;
  }
}
.icon{
  font-size: 1.5rem;
}
.divider{
  ::before{
    content: "";
    top: 50%;
    width: 100%;
    height: 1px;
    border-top-color: #eee;
    border-top-color: rgba(0,0,0,.1);
    border-top-width: 1px;
    border-top-style: solid;
    position: absolute;
    left: 0;
 
    z-index: 10;
  }
      margin: 0 0 30px;
    position: relative;
    margin-left: auto!important;
    margin-right: auto!important;
    max-width: 250px;
}
.slider {
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image {
  width: 1000px;
  height: 600px;
  border-radius: 10px;
}

.right-arrow {
  position: absolute;
  top: 50%;
  right: 32px;
  font-size: 3rem;
  color: #000;
  z-index: 10;
  cursor: pointer;
  user-select: none;
}

.left-arrow {
  position: absolute;
  top: 50%;
  left: 32px;
  font-size: 3rem;
  color: #000;
  z-index: 10;
  cursor: pointer;
  user-select: none;
}

.slide {
  opacity: 0;
  transition-duration: 1s ease;
}

.slide.active {
  opacity: 1;
  transition-duration: 1s;
  transform: scale(1.08);
}
.opt{
  color:var(--black);
}
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.swiper {
  margin-left: auto;
  margin-right: auto;
}
.swiper-button-prev {

}

.swiper-button-next {
 
}
.dividerw{
  ::before{
    content: "";
    top: 50%;
    width: 100%;
    height: 1px;
    border-top-color: #eee;
    
    border-top-width: 1px;
    border-top-style: solid;
    position: absolute;
    left: 0;
 
    z-index: 10;
  }
      margin: 0 0 30px;
    position: relative;
    margin-left: auto!important;
    margin-right: auto!important;
    max-width: 250px;
}
#one {
  background: var(--black);
  float:left; 
  margin-right:20px;
  width:50%;
  
}
#two { 
  background-color: white;
  overflow:hidden;
  margin:10px;
  border:2px dashed #ccc;
  min-height:170px;
  p{
    text-align: center;
    color: var(--black);
  }
}

@media screen and (max-width: 720px) {
   #one { 
    float: none;
    margin-right:0;
    width:auto;
    border:0;
    border-bottom:2px solid #000;    
  }
}
.swiper-pagination-bullet {
    opacity: 0.5;
    background-color: var(----blue);
}

.swiper-pagination-bullet-active {
    opacity: 1;
}
.watermark {

  position: relative;
  overflow: hidden;
}

.watermarkp {
  position: absolute;
  top: 0;
  left: 0;
  color: var(--yellow);
  font-size: 18px;
  pointer-events: none;
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
}
`;
