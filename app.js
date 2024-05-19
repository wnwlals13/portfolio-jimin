/* -------------------------- Variables -------------------------- */
let scrollTop = 0;
let offset = 0;
let height = 0;
let position = 0;
const skillSet = [70, 70, 70, 60, 50, 40, 40];
const body = document.querySelector("body");
const mainLogo = document.querySelector(".mainLogo");
const square = document.querySelector("body .square");
const navbar = document.querySelector(".navbar");
const scrollbar = document.querySelector(".scrollbar");
const goUp = document.querySelector(".goUp");
const skillbar = document.querySelectorAll(".skill__bar");
const project = document.querySelectorAll(".project");
const projects = document.querySelector(".projects");
const landingPage = document.querySelector(".landingPage");
const landingAbout = document.querySelector(".landing__about");
const experiencePage = document.querySelector(".experiencePage");
const skillPage = document.querySelector(".skillPage");
const workPage = document.querySelector(".workPage");
const contactPage = document.querySelector(".contactPage");
const contentwrapper = document.querySelector(".contentwrapper");
const content = document.querySelector(".content");
const linkTo = document.querySelector(".linkTo");
const modalWrapper = document.querySelector(".modalWrapper");
const modalInner = document.querySelector(".modalInner");

const aboutMePage = document.querySelector('.myselfPage');

/* -------------------------- Function -------------------------- */
function skillbarHandle(data) {
  let i = 0;
  if (data >= 30 && data <= 65) {
    skillbar.forEach((item) => {
      item.style.width = `${skillSet[i]}%`;
      item.innerText = `${skillSet[i]}%`;
      i += 1;
    });
  }
}
function projectHandle(data) {
  if (data >= 63 && data <= 80) {
    project.forEach((item) => {
      item.style.width = `400px`;
    });
  }
}

function contactHandle(data) {
  if (data >= 88) {
    setTimeout(() => {
      content.style.opacity = "1";
      content.style.transform = "translateY(0)";
      linkTo.style.opacity = "1";
      linkTo.style.transform = "translateY(0)";
    }, 1000);
  }
}

function fillModal(param) {
  //modal 띄우기
  modalWrapper.style.height = `${body.clientHeight}px`;
  modalWrapper.style.top = "0";
  modalWrapper.classList.add("show");
  modalInner.classList.add("show");

  const target = param;
  modalInner.innerHTML = "";
  let modal_title = document.createElement("h2");
  let modal_close = document.createElement("p");
  modal_close.innerText = "X";
  modal_close.className = "modal_close";
  modal_close.addEventListener("click", (e) => {
    modalWrapper.classList.remove("show");
  });

  let modal_img = document.createElement("img");
  modal_img.style.width = "100%";
  modal_img.style.height = "50%";
  let modal_description = document.createElement("p");
  modal_description.style.height = "30%";
  let modal_detail = document.createElement("div");
  modal_description.className = "modal_desc";
  modal_detail.className = "modal_detail";
  modal_detail.innerHTML = `
  <i class="fab fa-github"></i>
  <p> source code </p>
  `;
  
  if (target == "project") {
    modal_title.innerText = target;
    modal_title.style.paddingBottom = "10px";
    modal_img.src = "./image/ddoda_main.png";
    modal_description.innerText = `
    프로젝트 기간 : 2020년 11월 10일 ~ 2020년 12월 29일
    기술 스택 : Java, Spring framework, JavaScript, jQuery
    프로젝트 인원 : 4명 
    기여도 : 30%

    [ 구현 기능 ]
    - JavaScript, JQuery, Bootstrap을 이용한 메인 웹 frontend 구현
    - 캘린더 API를 활용한 다이어리 CRUD 기능
    - 카카오 지도 API 활용한 소모임 장소 정보 제공
    - AJAX를 이용한 게시판 댓글과 대댓글 기능 구현
  `;
    modal_detail.addEventListener("click", (e) => {
      window.open("https://github.com/JJINDdoda/JJIN_DDODA_FINAL");
    });
  } else if (target == "project second") {
    modal_title.innerText = target;
    modal_title.style.paddingBottom = "10px";
    modal_img.src = "./image/portfolio.png";
    modal_description.innerText = `
    프로젝트 기간 : 2021년 01월 ~ 2021년 02월
    기술 스택 : HTML, CSS, JavaScript
    프로젝트 인원 : 1명 
    기여도 : 100%

    [ 구현 기능 ]
    - CSS와 Vanilla JS만 사용하여 인터랙션 구현
    - netlify를 사용하여 개인 포트폴리오 배포
  `;
    modal_detail.addEventListener("click", (e) => {
      window.open("https://github.com/wnwlals13/portfolio-jimin");
    });
  } else if (target == "project third") {
    modal_title.innerText = target;
    modal_title.style.paddingBottom = "10px";
    modal_img.src = "./image/blog_main.png";
    modal_description.innerText = `
    프로젝트 기간 : 2021년 02월 20일 ~ 2021년 05월
    리뉴얼 기간 : 2023년 03년 25일 ~ 진행중
    기술 스택 : JavaScript, React hooks, firebase
    프로젝트 인원 : 1명 
    기여도 : 100%

    [ 구현 기능 ]
    - React hooks 이용해 블로그 CRUD 기능 구현
    - firebase auth를 이용한 로그인/아웃
    - realtime database를 이용해 DB 연동
  `;
    modal_detail.addEventListener("click", (e) => {
      window.open("https://github.com/wnwlals13/myBlogApp");
    });
  } else if (target == "project fourth") {
    modal_title.innerText = target;
    modal_title.style.paddingBottom = "10px";
    modal_img.src = "./image/catch_main.png";
    modal_description.innerText = `
    프로젝트 기간 : 2024년 03월 02일 ~ 진행중
    기술 스택 : React, Recoil, tailwindCSS, axios
    프로젝트 인원 : 4명 (프론트 2명, 백엔드 2명)
    프론트 기여도 : 50%

    [ 구현 기능 ]
    - Swagger API를 활용한 프론트엔드, 백엔드 개발 협업
    - Axios 사용하여 REST API 연동
    - 캐치테이블 UI
    
  `;
    modal_detail.addEventListener("click", (e) => {
      window.open("https://github.com/sky-catch/Front");
    });
  }
  modalInner.appendChild(modal_title);
  modalInner.appendChild(modal_close);
  modalInner.appendChild(modal_img);
  modalInner.appendChild(modal_description);
  modalInner.appendChild(modal_detail);
}

function offModal(e) {
  if (e.target.className == "modalWrapper show") {
    modalWrapper.classList.remove("show");
  }
}

// 텍스트 타이핑 애니메이션
const h2 = document.querySelector('.blinking_txt');
const cursor = document.querySelector('.cursor');
const shake = document.querySelector('.landing__shake');

function typing (_, counter = 0) {
  const txt = `포트폴리오 사이트입니다.🖐`;

  setInterval(() => {
    if(txt.length === counter) {
      cursor.classList.add('blink_animate');
      return;
    }
    h2.textContent += txt[counter];
    counter++;
  },80);
}
window.addEventListener('load', typing);

/* -------------------------- Event Listener -------------------------- */
mainLogo.addEventListener("click", () => {
  location.href = location.href;
});

const navLi = document.querySelectorAll('.navbar li');
navLi.forEach((item,index)=> {
  item.addEventListener('click', ()=> {
    console.log(item.className);
    if(item.className.indexOf('main') > -1 ) {
      gsap.to(window, {duration : .6, scrollTo : {y : landingPage.offsetTop}})
    } else if ( item.className.indexOf("experience") > -1 ){
      gsap.to(window, {duration : .6, scrollTo : {y : experiencePage.offsetTop}})
    } else if ( item.className.indexOf("works") > -1 ){
      gsap.to(window, {duration : .6, scrollTo : {y : workPage.offsetTop}})
    } else if ( item.className.indexOf("skill") > -1 ){
      gsap.to(window, {duration : .6, scrollTo : {y : skillPage.offsetTop}})
    } else if ( item.className.indexOf("contact") > -1 ){
      gsap.to(window, {duration : .6, scrollTo : {y : contactPage.offsetTop}})
    } else if ( item.className.indexOf("myself") > -1 ){
      gsap.to(window, {duration : .6, scrollTo : {y : aboutMePage.offsetTop}})
    }
  })
});

goUp.addEventListener("click", (e) => {
  window.scrollTo({ top: landingPage.offsetTop, behavior: "smooth" });
});

project.forEach((item)=>{
  item.addEventListener("click", (e)=> {
    console.log(e.currentTarget.className);
    fillModal(e.currentTarget.className);
  })
});

modalWrapper.addEventListener("click", (e) => {
  offModal(e);
});

linkTo.addEventListener("click", (e) => {
  var page = e.target.className;
  if ( page == "fab fa-github") {
    window.open("https://github.com/wnwlals13");
  } else if ( page == "fa fa-blog" ) {
    window.open("https://neighbor.tistory.com/");
  }
});

window.addEventListener("scroll", (e) => {
  e.preventDefault();

  scrollTop = document.documentElement.scrollTop;
  offset = document.body.offsetHeight;
  height = window.innerHeight;
  position = Math.ceil((scrollTop / (offset - height)) * 100);
  scrollbar.style.height = `${position}px`;
  if (position >= 30) {
    goUp.classList.add("show");
  } else {
    goUp.classList.remove("show");
  }
  skillbarHandle(position);
  projectHandle(position);
  contactHandle(position);
});

/* 마우스 커서 따라다니는 애니메이션 구현해보기 (240519) */
const mouse = document.querySelector('.mouse_cursor');
const point = document.querySelector('.mouse_pointer');
const header = document.querySelectorAll('.navbar span');
window.addEventListener("mousemove", e=> {
  let x = e.pageX;
  let y = e.pageY;

  //마우스 이벤트의 부드럽고 섬세한 작동을 위해 GSAP 라이브러리 설치
  gsap.to(mouse,{duration:0.25, left:x-35, top:y-35});
  point.style.left = `${x-5}px`;
  point.style.top = `${y-5}px`;

  //상단 헤더 메뉴에 위치한 경우, 메뉴 컬러 바꾸기
  header.forEach(span=> {
    span.addEventListener("mouseenter", (e)=>{
      span.classList.add('active');
    })
    span.addEventListener("mouseleave", (e)=>{
      span.classList.remove('active');
    })
  })
});

/* 다크모드 구현해보기(240519) */
const themeToggle = document.querySelector('.check');
themeToggle.addEventListener("click", e=> {
  if(e.target.checked) {
    document.documentElement.setAttribute('color-theme', 'dark');
  } else {
    document.documentElement.setAttribute('color-theme', 'light');
  }
});