import { experience } from "./data/experience.js";
import { projects } from "./data/project.js";

/* -------------------------- Variables -------------------------- */
let scrollTop = 0;
let offset = 0;
let height = 0;
let position = 0;
const skillSet = [70, 70, 70, 60, 50, 40, 40];
const mainLogo = document.querySelector(".mainLogo");
const scrollbar = document.querySelector(".scrollbar");
const goUp = document.querySelector(".goUp");
const skillbar = document.querySelectorAll(".skill__bar");
const landingPage = document.querySelector(".landingPage");
const experiencePage = document.querySelector(".experiencePage");
const skillPage = document.querySelector(".skillPage");
const workPage = document.querySelector(".workPage");
const contactPage = document.querySelector(".contactPage");
const content = document.querySelector(".content");
// const linkTo = document.querySelector(".linkTo");
const modalWrapper = document.querySelector(".modalWrapper");
const aboutMePage = document.querySelector(".myselfPage");
const timeline = document.querySelector(".timeline");
const projectsContainer = document.querySelector(".projects");

/* -------------------------- Function -------------------------- */
experience.map((item) => {
  let liTag = document.createElement("li");
  let h2Tag = document.createElement("h2");
  let pTag = document.createElement("p");

  liTag.setAttribute("class", "event");
  liTag.setAttribute("data-date", item.date);
  h2Tag.innerHTML = item.title;
  pTag.innerHTML = item.content;

  liTag.appendChild(h2Tag);
  liTag.appendChild(pTag);
  timeline.appendChild(liTag);
});

projects.map((item) => {
  let divTag = document.createElement("div");
  let imgTag = document.createElement("div");
  let pTag = document.createElement("p");

  divTag.setAttribute("class", `project ${item.id}`);
  imgTag.setAttribute("class", `img ${item.id}`);
  divTag.appendChild(imgTag);
  pTag.innerHTML = item.title;
  divTag.appendChild(pTag);

  projectsContainer.appendChild(divTag);
});

projectsContainer.addEventListener("click", (e) => {
  let item = e.target.parentNode;
  fillModal(item.className);
  modalWrapper.classList.add("show");
});

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

function contactHandle(data) {
  if (data >= 88) {
    setTimeout(() => {
      // content.style.opacity = "1";
      // content.style.transform = "translateY(0)";
      // linkTo.style.opacity = "1";
      // linkTo.style.transform = "translateY(0)";
    }, 1000);
  }
}

const title = document.querySelector(
  ".modalWrapper .modalInner .modal-content h3"
);
const text = document.querySelector(
  ".modalWrapper .modalInner .modal-content .main-coptent"
);
const git = document.querySelector(
  ".modalWrapper .modalInner .modal-content .git"
);
const slide = document.querySelector(
  ".modalWrapper .modalInner .swiper-slide img"
);
const closebtn = document.querySelector(
  ".modalWrapper .modalInner .btn button"
);

function fillModal(param) {
  const target = param;

  projects.forEach((item, idx) => {
    if (target.indexOf(item.id) > -1) {
      title.innerText = item.title;
      text.innerText = item.contents;
      slide.src = item.img;
      git.href = item.linkr;
    }
  });
}

function offModal(e) {
  modalWrapper.classList.remove("show");
}

/* -------------------------- Event Listener -------------------------- */
mainLogo.addEventListener("click", () => {
  location.href = location.href;
});

const navLi = document.querySelectorAll(".navbar li");
const img_card = document.querySelector(".myselfPage .img");
const desc = document.querySelector(".myselfPage .desc");
const circle = document.querySelector(".circle-wrapper .circle");
const circle_arrow = document.querySelector(".circle-wrapper .circle-arrow");
navLi.forEach((item, index) => {
  item.addEventListener("click", () => {
    if (item.className.indexOf("main") > -1) {
      gsap.to(window, {
        duration: 0.6,
        scrollTo: { y: landingPage.offsetTop },
      });
    } else if (item.className.indexOf("experience") > -1) {
      gsap.to(window, {
        duration: 0.6,
        scrollTo: { y: experiencePage.offsetTop },
      });
    } else if (item.className.indexOf("works") > -1) {
      gsap.to(window, { duration: 0.6, scrollTo: { y: workPage.offsetTop } });
    } else if (item.className.indexOf("skill") > -1) {
      gsap.to(window, { duration: 0.6, scrollTo: { y: skillPage.offsetTop } });
    } else if (item.className.indexOf("contact") > -1) {
      gsap.to(window, {
        duration: 0.6,
        scrollTo: { y: contactPage.offsetTop },
      });
    } else if (item.className.indexOf("myself") > -1) {
      gsap.to(window, {
        duration: 0.6,
        scrollTo: { y: aboutMePage.offsetTop },
      });
    }
  });
});

// window.addEventListener("scroll", (e) => {
//   const scrollTop = window.scrollY;
//   if (scrollTop == aboutMePage.offsetTop) {
//     gsap.to(img_card, {
//       scrollTrigger: {
//         trigger: img_card,
//         toggleActions: "restart reverse restart reverse",
//         start: "0% 60%",
//         end: "100% 80%",
//       },
//       xPercent: -230,
//       rotation: 0,
//     });
//   }

//   if (scrollTop + 20 >= contactPage.offsetTop) {
//     circle.classList.add("active");
//     circle_arrow.classList.add("active");
//   } else {
//     circle.classList.remove("active");
//     circle_arrow.classList.remove("active");
//   }
// });

goUp.addEventListener("click", (e) => {
  window.scrollTo({ top: landingPage.offsetTop, behavior: "smooth" });
});

closebtn.addEventListener("click", (e) => {
  offModal(e);
});

// linkTo.addEventListener("click", (e) => {
//   var page = e.target.className;
//   if (page.indexOf("fa-github")) {
//     window.open("https://github.com/wnwlals13");
//   } else if (page.indexOf("fa fa-blog")) {
//     window.open("https://neighbor.tistory.com/");
//   }
// });

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
  contactHandle(position);
});

/* 마우스 커서 따라다니는 애니메이션 구현해보기 (240519) */
const mouse = document.querySelector(".mouse_cursor");
const point = document.querySelector(".mouse_pointer");
const header = document.querySelectorAll(".navbar span");
const mainTxt = document.querySelectorAll(".landingPage .mainTxt span");
window.addEventListener("mousemove", (e) => {
  let x = e.pageX;
  let y = e.pageY;

  //마우스 이벤트의 부드럽고 섬세한 작동을 위해 GSAP 라이브러리 설치
  gsap.to(mouse, { duration: 0.25, left: x - 35, top: y - 35 });
  point.style.left = `${x - 5}px`;
  point.style.top = `${y - 5}px`;

  //상단 헤더 메뉴에 위치한 경우, 메뉴 컬러 바꾸기
  header.forEach((span) => {
    span.addEventListener("mouseenter", (e) => {
      span.classList.add("active");
    });
    span.addEventListener("mouseleave", (e) => {
      span.classList.remove("active");
    });
  });

  // 랜딩페이지의 글씨 마우스 오버한 경우, fill 색상 바꾸기
  mainTxt.forEach((span) => {
    span.addEventListener("mouseenter", (e) => {
      span.parentNode.classList.add("active");
    });
    span.addEventListener("mouseleave", (e) => {
      span.parentNode.classList.remove("active");
    });
  });
});

/* 다크모드 구현해보기(240519) */
const themeToggle = document.querySelector(".check");
themeToggle.addEventListener("click", (e) => {
  if (e.target.checked) {
    document.documentElement.setAttribute("color-theme", "dark");
  } else {
    document.documentElement.setAttribute("color-theme", "light");
  }
});

/* 아래 화살표 클릭 시 scrollTo 애니메이션 구현 */
// const arrowDown = document.querySelector(".landingPage .arrow-b");
// arrowDown.addEventListener("click", (e) => {
//   gsap.to(window, { duration: 0.6, scrollTo: { y: aboutMePage.offsetTop } });
// });

// const card = document.querySelector(".myselfPage .img_card .profile");
// card.addEventListener("mouseenter", (e) => {
//   card.style = `filter : grayScale(0)`;
// });
// card.addEventListener("mouseout", (e) => {
//   card.style = `filter : grayScale(1)`;
// });

const mySwiper = new Swiper(".swiper-container", {
  // 옵션 설정
  direction: "horizontal",
  slidesPerView: "auto",
  autoplay: {
    display: 5000,
  },
});

// -------- About me Skills
const fluent = document.querySelector(".fluent");
const normal = document.querySelector(".normal");
const skillTitle = ["fluent", "normal"];
const skillDesc = [
  ["React", "JavaScript(ES6+)", "HTML5", "CSS3"],
  ["Java", "Python", "Spring", "mysql"],
];
const skillIcon = [
  ["react_logo", "javascript_logo", "html5_logo", "css3_logo"],
  ["java_logo", "python_logo", "spring_logo", "mysql_logo"],
];

function onSetSkills(dom) {
  let idx = skillTitle.indexOf(dom.className);
  let ul = document.createElement("ul");
  ul.classList.add("skills");
  let num = skillDesc[idx];
  for (let i = 0; i < num.length; i++) {
    let li = document.createElement("li");
    let span = document.createElement("span");
    let img = document.createElement("img");
    span.textContent = skillDesc[idx][i];
    img.src = `/image/logos/${skillIcon[idx][i]}.svg`;
    img.classList.add("logo_img");
    li.insertAdjacentElement("afterbegin", span);
    li.insertAdjacentElement("afterbegin", img);
    ul.insertAdjacentElement("beforeend", li);
  }
  dom.insertAdjacentElement("afterbegin", ul);
}
onSetSkills(fluent);
onSetSkills(normal);
