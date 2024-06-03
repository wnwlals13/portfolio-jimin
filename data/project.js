export const projects = [
    {
        id : 'catch',
        title : '캐치테이블 클론코딩',
        contents : ` 프로젝트 기간 : 2024년 03월 02일 ~ 2024년 05월 31일
        기술 스택 : React, Recoil, tailwindCSS, axios, React-Query
        프로젝트 인원 : 프론트 개발 2명, 백엔드 개발 2명 ()
        프론트 기여도 : 50%

        [ 구현 기능 ]
        - React Router v6 최신문법을 활용하여 라우팅 기능 구현
        - Kakao Oauth 2.0 로그인 이후 JWT Token으로 정보 조회하는 기능 구현
        - Recoil 라이브러리를 사용하여 사용자 관리르 전역으로 관리
        - Axios, React Query를 사용하여 Restful API 하게 구현
        - 아임포트를 이용하여 식당별 예약금 결제 기능(카카오 결제)구현
        - 검색어 및 지역과 가격 필터 조건에 맞게 파라미터 전송하여 식당 정보 조회
        - 클라우드에 저장된 이미지 URL로 이미지 로드 시, CORS 에러 문제 발생,
                서버에서 CrossOrigin 어노테이션에 주소 추가하여 해결
        - Swagger API, Postman을 활용하여 백엔드와 협업`,
        linkr : 'https://github.com/sky-catch/Front',
        img : './image/catch_main.png'
    }, {
        id : 'blog',
        title : '블로그 프로젝트',
        contents : `프로젝트 기간 : 2021년 02월 20일 ~ 2021년 05월
        업데이트 : 2024년 05월 24일 ~ 31일ㄴ
        기술 스택 : JavaScript, React hooks, firebase
        참여자 : 주지민
        기여도 : 100%

        [ 구현 기능 ]
        - React hooks 이용해 블로그 게시글 CRUD 기능 구현
        - firebase auth를 이용한 구글 / 깃허브 연동 로그인
        - cloud database를 이용해 DB 연동
        - 게시글 작성 시 이벤트 핸들러 감시 후 작성내용 미리보기 화면 구현 
        - 예전 문법 걷어내고 최신 firebase 문법으로 업데이트 (2024)`,
        linkr : 'https://github.com/wnwlals13/myBlogApp',
        img : './image/blog_main.png'
    }, {
        id : 'portfolio',
        title : '개인 포트폴리오',
        contents : `프로젝트 기간 : 2021년 01월 ~ 2021년 02월
        업데이트 : 2024년 05월 21일 ~ 23일
        기술 스택 : HTML, CSS, JavaScript
        참여자 : 주지민
        기여도 : 100%

        [ 구현 기능 ]
        - CSS와 Vanilla JS만 사용하여 인터랙션 구현
        - Netfify를 github 계정과 연동하여 자동 build 환경 구축
        - 마우스 포인터 좌표값을 활용해 포인트 이벤트 구현 (2024)
        - 토글 UI로 다크모드 기능 추가 (2024)
        - GSAP 라이브러리를 사용해 부드럽고 다이나믹한 애니메이션 이벤트 구현 (2024)`,
        linkr : 'https://github.com/wnwlals13/portfolio-jimin',
        img : './image/portfolio.png'
    }, {
        id : 'ddoda',
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
    }
]