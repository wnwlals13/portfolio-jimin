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

const title = document.querySelector('.modalWrapper .modalInner .modal-content h3');
const text = document.querySelector('.modalWrapper .modalInner .modal-content .main-coptent');
const git = document.querySelector('.modalWrapper .modalInner .modal-content .git');
const slide = document.querySelector('.modalWrapper .modalInner .swiper-slide img');
const closebtn = document.querySelector('.modalWrapper .modalInner .btn button');
const projectList =[
  {
    id : 'project first',
    title : '또다(건강관리 서비스)',
    contents : `프로젝트 기간 : 2020년 11월 10일 ~ 2020년 12월 29일
    기술 스택 : Java, Spring framework, JavaScript, jQuery
    프로젝트 인원 : 4명 
    기여도 : 30%

    [ 구현 기능 ]
    - JavaScript, JQuery, Bootstrap을 이용한 메인 웹 frontend 구현
    - 캘린더 API를 활용한 다이어리 CRUD 기능
    - 카카오 지도 API 활용한 소모임 장소 정보 제공
    - AJAX를 이용한 게시판 댓글과 대댓글 기능 구현`,
    linkr : 'https://github.com/JJINDdoda/JJIN_DDODA_FINAL',
    img : './image/ddoda_main.png'
  }, {
    id : 'project second',
    title : '개인 포트폴리오',
    contents : `프로젝트 기간 : 2021년 01월 ~ 2021년 02월
    기술 스택 : HTML, CSS, JavaScript
    프로젝트 인원 : 1명 
    기여도 : 100%

    [ 구현 기능 ]
    - CSS와 Vanilla JS만 사용하여 인터랙션 구현
    - netlify를 사용하여 개인 포트폴리오 배포`,
    linkr : 'https://github.com/wnwlals13/portfolio-jimin',
    img : './image/portfolio.png'
  }, {
    id : 'project third',
    title : ' 블로그 어플',
    contents : `프로젝트 기간 : 2021년 02월 20일 ~ 2021년 05월
    리뉴얼 기간 : 2023년 03년 25일 ~ 진행중
    기술 스택 : JavaScript, React hooks, firebase
    프로젝트 인원 : 1명 
    기여도 : 100%

    [ 구현 기능 ]
    - React hooks 이용해 블로그 CRUD 기능 구현
    - firebase auth를 이용한 로그인/아웃
    - realtime database를 이용해 DB 연동`,
    linkr : 'https://github.com/wnwlals13/myBlogApp',
    img : './image/blog_main.png'
  }, {
    id : 'project fourth',
    title : '캐치테이블 클론코딩',
    contents : ` 프로젝트 기간 : 2024년 03월 02일 ~ 2024년 05월 27일
    기술 스택 : React, Recoil, tailwindCSS, axios
    프로젝트 인원 : 4명 (프론트 2명, 백엔드 2명)
    프론트 기여도 : 50%

    [ 구현 기능 ]
    - Swagger API를 활용한 프론트엔드, 백엔드 개발 협업
    - Axios 사용하여 REST API 연동
    - 캐치테이블 UI`,
    linkr : 'https://github.com/sky-catch/Front',
    img : './image/catch_main.png'
  }
]

function fillModal(param) {
  const target = param;

  projectList.forEach((item,idx) => {
    if(item.id == target) {
      console.log(slide);
      title.innerText = item.title;
      text.innerText = item.contents;
      slide.src = item.img;
      git.href = item.linkr;
    }
  })
}

function offModal(e) {
  // console.log(e.currentTarget.childNodes);
    modalWrapper.classList.remove("show");
}

/* -------------------------- Event Listener -------------------------- */
mainLogo.addEventListener("click", () => {
  location.href = location.href;
});

const navLi = document.querySelectorAll('.navbar li');
const img_card = document.querySelector('.myselfPage .img');
const desc = document.querySelector('.myselfPage .desc');
const circle = document.querySelector('.circle-wrapper .circle');
const circle_arrow = document.querySelector('.circle-wrapper .circle-arrow');
navLi.forEach((item,index)=> {
  item.addEventListener('click', ()=> {
    // console.log(item.className);
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

window.addEventListener('scroll', e=>{
  const scrollTop = window.scrollY;
  
  if(scrollTop+10 == aboutMePage.offsetTop) {
    gsap.to(img_card, {scrollTrigger : {
      trigger : img_card,
      toggleActions: "restart reverse restart reverse",
      start: "0% 60%",
      end:"100% 80%",
    },
  // x : percentToPixel(-80)+'px',
  // xPercent : 800,
  
  xPercent : -170,
  rotation : -5}
  )}
  
  if(scrollTop+20 >= contactPage.offsetTop) {
    circle.classList.add('active');
    circle_arrow.classList.add('active');
  } else {
    circle.classList.remove('active');
    circle_arrow.classList.remove('active');
  }
})

goUp.addEventListener("click", (e) => {
  window.scrollTo({ top: landingPage.offsetTop, behavior: "smooth" });
});


project.forEach((item)=>{
  item.addEventListener("click", (e)=> {
    fillModal(item.className);  //모달 내용 채우기
    modalWrapper.classList.add('show');
  })
});

// modalWrapper.addEventListener("click", (e) => {offModal(e);});

closebtn.addEventListener('click',e=>{offModal(e)});

linkTo.addEventListener("click", (e) => {
  var page = e.target.className;
  if ( page.indexOf("fa-github")) {
    window.open("https://github.com/wnwlals13");
  } else if ( page.indexOf("fa fa-blog" )) {
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
const mainTxt = document.querySelectorAll('.landingPage .mainTxt span');
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

  // 랜딩페이지의 글씨 마우스 오버한 경우, fill 색상 바꾸기
  mainTxt.forEach(span=> {
    span.addEventListener("mouseenter", (e)=> {
      span.parentNode.classList.add('active');
    })
    span.addEventListener("mouseleave", (e)=> {
      span.parentNode.classList.remove('active');
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

/* 아래 화살표 클릭 시 scrollTo 애니메이션 구현 */
const arrowDown = document.querySelector('.landingPage .arrow-b'); 
arrowDown.addEventListener('click', (e)=> {
  gsap.to(window, {duration : .6, scrollTo : {y : aboutMePage.offsetTop}})
})

// const img_card = document.querySelector('.myselfPage .img');
const card = document.querySelector('.myselfPage .img_card .profile');
card.addEventListener('mouseenter', (e)=> {
  card.style = `filter : grayScale(0)`;
})
card.addEventListener('mouseout', (e)=> {
  card.style = `filter : grayScale(1)`;
})

const mySwiper = new Swiper('.swiper-container', {
  // 옵션 설정
  direction : 'horizontal',
  slidesPerView : 'auto',
  autoplay : {
    display : 5000,
  }
});

// 텍스트 타이핑 애니메이션
// const h2 = document.querySelector('.blinking_txt');
// const cursor = document.querySelector('.cursor');
// const shake = document.querySelector('.landing__shake');

// function typing (_, counter = 0) {
//   const txt = `포트폴리오 사이트입니다.🖐`;

//   setInterval(() => {
//     if(txt.length === counter) {
//       cursor.classList.add('blink_animate');
//       return;
//     }
//     h2.textContent += txt[counter];
//     counter++;
//   },80);
// }
// window.addEventListener('load', typing);