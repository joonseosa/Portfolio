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
    
    scrollIntoView(link);

});

//contact me 선택시 이동 
const contactBtn = document.querySelector('.home__contact');
contactBtn.addEventListener('click', ()=> {
  scrollIntoView('#contact');

});


//스크롤 이동시  Home 영역 투명하게
//opacity를 사용해서 , opacity 0 =완전투명 1 = 불투명
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', ()=> {
    home.style.opacity = 1-window.scrollY/homeHeight;
});


//스크롤 이동 함수 선언
//selector를 주면 해당하는 요소를 찾은 후 이동
//코딩이 간편해짐
function scrollIntoView(selector){
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior:"smooth"});
}

//arrow up Btn  스크롤  내려갈때 나타마
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll',()=>{
if(window.scrollY>homeHeight /2) {
    arrowUp.classList.add('visible');
}else{
    arrowUp.classList.remove('visible');
}

});

//arrow Btn 클릭시 상위로 이동
arrowUp.addEventListener('click', ()=>{
    scrollIntoView('#home');
})

//Project
//myWork 프로젝트 카테고리 클릭 이벤트 
const workBtnContainer = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');

workBtnContainer.addEventListener('click',(e)=>{
    const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
   if(filter == null){
       return; 
   }
   projectContainer.classList.add('anim-out');
   

   setTimeout(()=> {
    projects.forEach((project)=> {
        console.log(project.dataset.type);
        if(filter === '*' || filter === project.dataset.type) {
            project.classList.remove('invisible');
        }else{
            project.classList.add('invisible');
        }
    
       });
    
    
    projectContainer.classList.remove('anim-out');
   },300);
  


});
