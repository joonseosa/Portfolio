'use strict';
// ()=> 애로우 펑션  , 아무런 인자를 받지않고 원하는 블럭을 실행 
//navbar 투명하게 만들고 , 스크롤이 내려가면 black으로 색상 변환
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;


document.addEventListener('scroll',()=>{
  
    if(window.scrollY > navbarHeight){
        navbar.classList.add('navbar--dark');
    }else{
        navbar.classList.remove('navbar--dark');

    }    


});