# Walkaholic

## 🖥️ 프로젝트 소개

카카오 맵 API를 활용하여 유저 간의 산책 장소를 추천해주는 서비스

## 👨‍👩‍👧‍👦 팀 소개

|   김태흔   |   권다정    |   김민영   |   김병엽    |   이보영    |
| :--------: | :---------: | :--------: | :---------: | :---------: |
| @taeheun01 | @kwondajung | @nninyeong | @Byoung-yup | @boyoung-12 |

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

회원 가입 기능 소개

### 1-2. 로그인

로그인 기능 소개

## 2. 메인페이지

![image](https://github.com/user-attachments/assets/4d399eea-1165-47c2-bc7d-2fecbf33a4f8)
![image](https://github.com/user-attachments/assets/71f3e65e-c430-4931-8a6c-987276da1071) -전체 지도, 장소추천 네비게이트

### 2-1. 검색

![image](https://github.com/user-attachments/assets/08afb0d3-0ae7-4b62-9a27-7783c710ccc6)
![image](https://github.com/user-attachments/assets/cbf97ef8-eb3e-4080-8e1e-05eb27da1890)

- 태그 기반 검색

  ![image](https://github.com/user-attachments/assets/8615e4fc-59c7-40e7-b7c2-eeccc3024d34)

- 클릭으로 검색하기

### 2-2. 게시물

![image](https://github.com/user-attachments/assets/817f3d88-bb9c-4aa6-bcad-0909927f82ec)

-최신으로 추가된 장소 배열

## 3. 지도 보기

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

## 🚨 트러블 슈팅

### 1. 구현하고자 했던 부분

- 슬라이드 라이브러리로 4개씩 게시물을 보여주기

### 2. 발생한 이슈

- 게시물이 4개 이하면 이미지가 중복된것이 새로로 나옴

```
코드는 여기에 넣으면 됩니다.
```

### 3. 시도한 방법

라이브러리의 게시물 보여지는 갯수와 무한반복에 조건을 걸어줌

### 4. 해결 방법

infinite: filteredLatestPosts?.length > 4 ? true : false,
slidesToShow: 4 > filteredLatestPosts?.length ? filteredLatestPosts?.length : 4,

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
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![Yarn](https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white)
