# Walkaholic

## 🖥️ 프로젝트 소개

카카오 맵 API를 활용하여 유저 간의 산책 장소를 추천해주는 서비스

## 👨‍👩‍👧‍👦 팀 소개

|   김태흔   |   권다정    |   김민영   |   김병엽    |   이보영    |
| :--------: | :---------: | :--------: | :---------: | :---------: |
| @taeheun01 | @kwondajung | @nninyeong | @Byoung-yup | @boyoung-12 |

## 🖥️ 주요 담당 기능

- 김태흔
- 권다정
- 김민영
  - 등록된 게시글 목록을 지도에서 확인할 수 있는 Map 페이지
  - 좋아요 기능
  - 라우트 가드
- 김병엽
  - 로그인, 회원가입
- 이보영

## 🕰️ 개발 기간

2024.09.12 ~ 2024.09.22

## 📂 폴더 구조

📦src  
 ┣ 📂api  
 ┃ ┣ 📂auth  
 ┃ ┃ ┣ 📜authAPI.js  
 ┃ ┃ ┗ 📜authInstance.js  
 ┃ ┣ 📂jsonserver  
 ┃ ┃ ┗ 📜jsonserverInstance.js  
 ┃ ┗ 📜postRequest.js  
 ┣ 📂components  
 ┃ ┣ 📂map  
 ┃ ┃ ┣ 📜CityButton.jsx  
 ┃ ┃ ┣ 📜MiniPostCard.jsx  
 ┃ ┃ ┣ 📜PostListSideBar.jsx  
 ┃ ┃ ┗ 📜RegionButton.jsx  
 ┃ ┣ 📜Card.jsx  
 ┃ ┗ 📜Navibar.jsx  
 ┣ 📂data  
 ┃ ┣ 📜cities.js  
 ┃ ┣ 📜mockData.js  
 ┃ ┗ 📜regions.js  
 ┣ 📂hooks  
 ┃ ┗ 📜useAuthStorage.js  
 ┣ 📂pages  
 ┃ ┣ 📜Detail.jsx  
 ┃ ┣ 📜Form.jsx  
 ┃ ┣ 📜Login.jsx  
 ┃ ┣ 📜Main.jsx  
 ┃ ┣ 📜Map.jsx  
 ┃ ┣ 📜Mypage.jsx  
 ┃ ┗ 📜Register.jsx  
 ┣ 📂query  
 ┃ ┗ 📜postQuery.js  
 ┣ 📂services  
 ┃ ┗ 📜validate.js  
 ┣ 📂shared  
 ┃ ┣ 📜AuthenticatedRoute.jsx  
 ┃ ┣ 📜Layout.jsx  
 ┃ ┣ 📜NotAuthenticatedRoute.jsx  
 ┃ ┣ 📜Router.jsx  
 ┃ ┗ 📜ScrollToTop.jsx  
 ┣ 📂stores  
 ┃ ┗ 📜useUserStore.js  
 ┣ 📜App.jsx  
 ┣ 📜index.css  
 ┣ 📜main.jsx  
 ┗ 📜mock.js

## 🧩 주요 기능

## 1. 회원가입 및 로그인

### 1-1. 회원 가입

<img width="1440" alt="스크린샷 2024-09-23 오전 9 47 54" src="https://github.com/user-attachments/assets/5aaf7552-5edd-4edf-bb2e-0bc401aac01c">
<img width="1440" alt="스크린샷 2024-09-23 오전 9 56 53" src="https://github.com/user-attachments/assets/d248048c-90d3-45cf-8cd2-a7a6c60c3620">

- 유효성 검사

### 1-2. 로그인

<img width="1440" alt="스크린샷 2024-09-23 오전 9 48 02" src="https://github.com/user-attachments/assets/393cdd9c-d903-42b2-8647-83dd563c8451">

## 2. 메인페이지

![image](https://github.com/user-attachments/assets/4d399eea-1165-47c2-bc7d-2fecbf33a4f8)
![image](https://github.com/user-attachments/assets/71f3e65e-c430-4931-8a6c-987276da1071)

### 2-1. 검색

![image](https://github.com/user-attachments/assets/08afb0d3-0ae7-4b62-9a27-7783c710ccc6)
![image](https://github.com/user-attachments/assets/cbf97ef8-eb3e-4080-8e1e-05eb27da1890)
![image](https://github.com/user-attachments/assets/8615e4fc-59c7-40e7-b7c2-eeccc3024d34)

- 태그 기반 검색
- 클릭으로 검색하기

### 2-2. 게시물

![image](https://github.com/user-attachments/assets/817f3d88-bb9c-4aa6-bcad-0909927f82ec)

-최신으로 추가된 장소 배열

## 3. 지도 보기

<img width="1329" alt="image" src="https://github.com/user-attachments/assets/6d2851cc-0fa4-408b-b5e9-1d66f7cbf1bc">

- 등록된 글들을 지도에서 확인할 수 있습니다.

### 3-1. 지역 포커싱 버튼

![지역선택버튼](https://github.com/user-attachments/assets/eaccbd3b-c1e0-4294-ad10-cbcf9c00df9a)

- 원하는 지역의 산책로를 쉽게 찾을 수 있도록 지역 포커싱 버튼을 구현했습니다.
- 1차 지역 구분 (도/특별시/광역시), 2차 지역 구분(1차 지역의 하위 행정 구역)으로 나눠 선택할 수 있습니다.

### 3-2. 산책로 목록

![산책로 목록](https://github.com/user-attachments/assets/9a702e74-cf34-4fbb-a0c0-0d4d9068b9aa)

- 클러스터러 혹은 마커를 클릭하는 경우 해당 영역에 등록된 산책로 목록이 표시됩니다.
- 1차 지역 선택으로 다시 돌아가는 경우 띄워진 목록은 사라집니다.

![로그인하지않고 디테일이동](https://github.com/user-attachments/assets/fc7da52f-e364-48f6-bc97-6e880689537a)

- 로그인하지 않은 사용자는 디테일 페이지로 이동할 수 없습니다.

## 4. 장소 추천하기

![image](https://github.com/user-attachments/assets/0e29202f-4eae-4bb7-bccc-6a6533f3ec79)

- 로그인한 회원에 한해서 게시글을 작성할 수 있습니다.

### 4-1. 위치 선택

![image](https://github.com/user-attachments/assets/ab8152f4-f90a-429c-85d3-ab2a09547e9a)

- 지도에서 자유롭게 확대, 축소하며 원하는 장소를 지정할 수 있습니다. 지정한 장소의 위도, 경도 및 주소가 글 작성 시 `db.json-server`로 전송됩니다.

### 4-2. 게시글 작성

![image](https://github.com/user-attachments/assets/9273ddc0-f971-4e5d-a8ff-c69156bd657e)

- 제목, 태그, 내용을 작성할 수 있으며 이미지 첨부도 가능합니다.

### 4-3. 게시글 작성 완료

![image](https://github.com/user-attachments/assets/09b33dc2-cdfb-42b7-903a-7893c63b0dc0)

- `등록하기` 버튼 클릭 시 메인으로 이동하며 작성한 글을 확인할 수 있습니다.

## 5. 상세페이지

## 6. 마이페이지

### 6-1. 정보 조회

### 6-2. 내가 쓴 게시글 삭제

## 7. 좋아요

![좋아요버튼](https://github.com/user-attachments/assets/92cc15ac-9a0c-4e7d-8e66-1c73408b67fe)

- 게시글의 좋아요 버튼을 통해 사용자는 마음에 드는 산책로를 저장할 수 있습니다.
- Tanstack Query를 이용해 Optimistic update를 적용하고, 서버 상태가 변경될 때 좋아요 여부를 반영할 수 있도록 구현 했습니다.

![로그인하지않고 좋아요](https://github.com/user-attachments/assets/667b216a-24d9-4502-8171-dbbb5e3f3527)

- 로그인하지 않은 사용자는 좋아요 기능을 사용할 수 없고, 로그인 의사를 확인하여 로그인 페이지로 이동합니다.

## 🚨 트러블 슈팅

### 1. Map 페이지에 이동시 마커 세팅 오류

#### 1) 발생한 이슈

- 새로고침 없이 navigate를 이용해 Map 페이지로 이동하는 경우 마커가 활성화되지 않음

#### 2) 시도한 방법

- 로그를 찍어 새로고침 하는 경우와 navigate로 페이지에 진입한 경우의 실행 순서를 확인

#### 3) 해결 방법

- 카카오맵 API의 map이 표시될 컨테이너와 등록된 산책로 데이터를 모두 받아왔음이 보장됐을 때 마커를 세팅할 수 있도록 useEffect를 활용

```js
const { data: posts, isSuccess, isError } = useGetPostsByLikes();

useEffect(() => {
  if (isSuccess) {
    const container = document.getElementById('map');
    mapRef.current = new kakao.maps.Map(container, INITIAL_MAP_OPTIONS);
    setMarkers();
  }
}, [isSuccess]);
```

# 📝Technologies & Tools

![react](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![figma](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white)
![slack](https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white)
![github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)
![javascript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white)
![vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![css](https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white)
![prettier](https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E)
![git](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white)
![vscode](https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white)
![notion](https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=notion&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![Yarn](https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white)
