/* -------------------------- Variables -------------------------- */
let scrollTop = 0;
let offset = 0;
let height = 0;
let position = 0;
const skillSet = [50, 50, 50, 40, 35, 40, 40];
const body = document.querySelector("body");
const mainLogo = document.querySelector(".mainLogo");
const square = document.querySelector("body .square");
const navbar = document.querySelector(".navbar");
const scrollbar = document.querySelector(".scrollbar");
const goUp = document.querySelector(".goUp");
const skillbar = document.querySelectorAll(".skill__bar div");
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
    contentwrapper.style.width = `700px`;
    contentwrapper.style.height = `500px`;
    setTimeout(() => {
      content.style.opacity = "1";
      content.style.transform = "translateY(0)";
      linkTo.style.opacity = "1";
      linkTo.style.transform = "translateY(0)";
    }, 1000);
  }
}

function fillModal(e) {
  const target = e.target.innerText;
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
  if (target == "Ddoda project") {
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
  } else if (target == "Blog project") {
    modal_title.innerText = target;
    modal_title.style.paddingBottom = "10px";
    modal_img.src = "./image/blog_main.png";
    modal_description.innerText = `
    프로젝트 기간 : 2021년 02월 20일 ~ 2021년 05월
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

/* -------------------------- Event Listener -------------------------- */
mainLogo.addEventListener("click", () => {
  location.href = location.href;
});

navbar.addEventListener("click", (e) => {
  const pageName = e.target.className;
  if ( pageName == "main" ) {
    window.scrollTo({ top: landingPage.offsetTop, behavior: "smooth" });
  } else if ( pageName == "experience" ){
    window.scrollTo({ top: experiencePage.offsetTop, behavior: "smooth" });
  } else if ( pageName == "works" ){
    window.scrollTo({ top: workPage.offsetTop, behavior: "smooth" });
  } else if ( pageName == "skill" ){
    window.scrollTo({ top: skillPage.offsetTop, behavior: "smooth" });
  } else if ( pageName == "contact" ){
    window.scrollTo({ top: contactPage.offsetTop, behavior: "smooth" });
  }
});

goUp.addEventListener("click", (e) => {
  window.scrollTo({ top: landingPage.offsetTop, behavior: "smooth" });
});

projects.addEventListener("click", (e) => {
  fillModal(e);
  modalWrapper.style.height = `${body.clientHeight}px`;
  modalWrapper.style.top = "0";
  modalWrapper.classList.add("show");
  modalInner.classList.add("show");
});

modalWrapper.addEventListener("click", (e) => {
  offModal(e);
});

linkTo.addEventListener("click", (e) => {
  console.log(e.target.className);
  if (e.target.className == "fab fa-github") {
    window.open("https://github.com/wnwlals13");
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
