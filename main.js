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

// tab선택시 스크롤링 이동 
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event)=> {
    const target = event.target;
    const link = target.dataset.link;
    if (link == null){
        return;
    }
    console.log(event.target.dataset.link);
    const scrollTo = document.querySelector(link);
    scrollTo.scrollIntoView({behavior:"smooth"});

});