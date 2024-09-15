export const projects = [
  {
    id: "catch",
    title: "식당예약 어플 프로젝트 (클론코딩)",
    contents: `설명 : 유저가 지역별로 식당을 조회,예약하여 이용할 수 있는 서비스
        기간 : 2024.04.01 - 05.30 (약 2개월)
        기술 : React, Recoil, tailwindCSS, axios, React-Query
        기여도 : 50%

        [ 구현 기능 ]
        - Recoil 라이브러리 사용하여 유저 상태 전역 관리
        - 검색어와 필터링을 통한 검색 시스템 개발
        - 필터링 바텀시트 UI 구현 및 Slider 라이브러리 사용하여 가격 범위 설정 UI 구현
        - 검색어 선택 시, sessionStorage를 사용하여 최근 검색어 기능 구현
        - React query 를 사용하여 관심 식당으로 저장 시, 유저가 최신 정보를 유지할 수 있도록 기능 구현
        - PortOne 카카오 결제 연동을 통해 식당 예약금 결제 기능 구현
        - 검색어 및 지역과 가격 필터 조건에 맞게 파라미터 전송하여 식당 정보 조회
        - 클라우드에 저장된 이미지 URL로 이미지 로드 시, CORS 에러 문제 발생,
                서버에서 CrossOrigin 어노테이션에 주소 추가하여 해결
        - Swagger API, Postman을 활용하여 백엔드와 협업`,
    linkr: "https://github.com/sky-catch/Front",
    img: "./image/catch_main.png",
  },
  {
    id: "blog",
    title: "블로그 프로젝트",
    contents: `기간 : 2021.04 - 2021.05 (약 2개월)
        업데이트 : 2024.05.24 ~ 2024.05.31
        기술 : React, firebase(auth, cloud database), netflify
        기여도 : 100%

        [ 구현 기능 ]
        - firebase auth를 활용하여 구글 / 깃허브 연동 로그인 기능 구현
        - firebase cloud database를 이용해 백엔드 API 연결 후 게시글 DB 연동
        - 게시글 작성 시 이벤트 핸들러 감지하여 실시간 작성내용 미리보기 기능 구현
        - React hooks 사용해 블로그 게시글 CRUD 기능 구현`,
    linkr: "https://github.com/wnwlals13/jjblog",
    img: "./image/blog_main.png",
  },
  {
    id: "portfolio",
    title: "개인 포트폴리오",
    contents: `기간 : 2021.01 - 2021.02
        업데이트 : 2024.04.21 - 2024.04.25 (약 1주)
        기술 스택 : Javascript, html/css, GASP, netflify
        기여도 : 100%

        [ 구현 기능 ]
        - CSS와 Vanilla JS만 사용하여 인터랙션 구현
        - Netfify를 github 계정과 연동하여 자동 build 환경 구축
        - 마우스 포인터 좌표값을 활용해 포인트 이벤트 구현
        - 토글 UI로 다크모드 기능 구현
        - GSAP 라이브러리를 사용해 부드럽고 다이나믹한 애니메이션 이벤트 구현`,
    linkr: "https://github.com/wnwlals13/portfolio-jimin",
    img: "./image/portfolio.png",
  },
  {
    id: "ddoda",
    title: "또다(건강관리 서비스)",
    contents: `기간 : 2020.11.10 - 2020.12.29
        기술 : Java, Spring framework, JavaScript, jQuery
        기여도 : 60%

        [ 구현 기능 ]
        - JavaScript, JQuery, Bootstrap을 이용한 메인 웹 frontend 구현
        - 캘린더 API를 활용한 다이어리 CRUD 기능
        - 카카오 지도 API 활용한 소모임 장소 정보 제공
        - AJAX를 이용한 게시판 댓글과 대댓글 기능 구현`,
    linkr: "https://github.com/JJINDdoda/JJIN_DDODA_FINAL",
    img: "./image/ddoda_main.png",
  },
];
