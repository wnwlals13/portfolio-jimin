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
const skillPage = document.querySelector(".skillPage");
const workPage = document.querySelector(".workPage");
const contactPage = document.querySelector(".contactPage");
const contentwrapper = document.querySelector(".contentwrapper");
const content = document.querySelector(".content");
const linkTo = document.querySelector(".linkTo");
const modalWrapper = document.querySelector(".modalWrapper");
const modalInner = document.querySelector(".modalInner");

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
    ???????????? ?????? : 2020??? 11??? 10??? ~ 2020??? 12??? 29???
    ?????? ?????? : Java, Spring framework, JavaScript, jQuery
    <?????? ??????>
    - JavaScript, JQuery, Bootstrap??? ????????? ?????? ??? frontend ??????
    - ????????? API??? ????????? ???????????? CRUD ??????
    - ????????? ?????? API ????????? ????????? ?????? ?????? ??????
    - AJAX??? ????????? ????????? ????????? ????????? ?????? ??????
  `;
    modal_detail.addEventListener("click", (e) => {
      window.open("https://github.com/JJINDdoda/JJIN_DDODA_FINAL");
    });
  } else if (target == "Blog project") {
    modal_title.innerText = target;
    modal_title.style.paddingBottom = "10px";
    modal_img.src = "./image/blog_main.png";
    modal_description.innerText = `
  ???????????? ?????? : 2021??? 02??? 20??? ~ 2020??? 03???
  ?????? ?????? : JavaScript, React hooks, firebase
  <?????? ??????>
  - React hooks ????????? ????????? CRUD ?????? ??????
  - firebase auth??? ????????? ?????????/??????
  - realtime database??? ????????? ?????? ??????
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
mainLogo.addEventListener("click", () => {
  location.href = location.href;
});

navbar.addEventListener("click", (e) => {
  if (e.target.className == "main") {
    window.scrollTo({ top: landingPage.offsetTop, behavior: "smooth" });
  }
  if (e.target.className == "skill") {
    window.scrollTo({ top: skillPage.offsetTop, behavior: "smooth" });
  }
  if (e.target.className == "works") {
    window.scrollTo({ top: workPage.offsetTop, behavior: "smooth" });
  }
  if (e.target.className == "contact") {
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
  console.log(e.target.innerText);
});
// projects.addEventListener("click", (e) => {
//   if (e.target.className == "project") {
//     window.open(
//       "https://drive.google.com/file/d/1o4mWh5w93CdQWIDWE16SkL3M0TtmUwJC/view?usp=sharing"
//     );
//   } else if (e.target.className == "project second") {
//     window.open(
//       "https://drive.google.com/file/d/1ApR_EH8FkSMz0ubsyrflyK3XrYeDb4sP/view?usp=sharing"
//     );
//   }
// });

modalWrapper.addEventListener("click", (e) => {
  offModal(e);
});

linkTo.addEventListener("click", (e) => {
  if (e.target.tagName == "I") {
    window.open("https://github.com/wnwlals13");
  } else {
    window.open("https://neighbor.tistory.com/");
  }
  console.log();
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
