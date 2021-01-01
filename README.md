# WeCode Tripadvisor 클론코딩 프로젝트 (Front-End)

## 프로젝트 소개🙌

- 전 세계 여행자들의 859만 개의 숙박 시설, 음식점, 체험, 항공권, 크루즈 여행에 대한 7억 95천만 건 이상의 리뷰와 의견을 검색하여 모든 여행이 최적의 여행이 되도록 도와주는 Tripadvisor 홈페이지 클론코딩.

## 개발 기간📆

- 2020년 8월 3일 ~ 2020년 8월 14일(2주)

## 팀원🐙

- [10기 권한성]
- [10기 김경배]
- [10기 송수호]

## 개발 목적🧾📈

- React로 구현된 Tripadvisor를 클론코딩하여, 레이아웃 구조를 이해하고 기능을 직접 구현해본다.
- class형 컴포넌트와 함수형 컴포넌트의 차이점을 알고 React의 접근방법을 다시 이해해본다.
- 함수형 컴포넌트, styled-components, Hooks 등을 다루며 props, state의 활용방법을 다시 복습해보고 효율적인 코드를 작성해 본다.
- 라이브러리 기능 사용을 최소화하고, 해당 기능에 대한 구조를 고민 및 직접 구현해본다.

## 기술 스택 및 구현 기능🛠
### 1)기술 스택
- React.js
- React Router
- RESTful API
- Google API
- Date Picker
- styled-components
- slick.js
- multipart/form-data

### 2)구현 기능 상세 설명
#### [메인 페이지]
- 메인페이지 브라우저 스크롤 이벤트함수를 작성하여 nav 검색창에 적용
- 메인페이지 slick.js를 활용한 슬라이드 기능
- State값을 변경하여 좋아요 on/off 기능

#### [포스트 리뷰 페이지]
- fetch post메소드와 multipart-form을 적용하여 서버에 파일/텍스트 업로드 기능구현

#### [리뷰 페이지]
- fetch get메소드와 multipart-form을 적용하여 서버에 저장된 파일/이미지 내려받아 feed를 추가하는 기능구현

#### [회원가입/로그인 페이지]
- Fetch 함수를 통한 백엔드 통신연결
- Name 메소드를 통한 입력값 컨트롤.
- 입력값의 길이를 비교하여 버튼색깔 다르게 구현 및 조건에 따른 경고창 구현.
- 구글api, 카카오톡 api를 통한 sns로그인 기능 구현.

#### [호텔 상세 페이지] 
- 리액트 useState, useEffect를 이용한 state값 통제
- Slick slider를 통한 이미지 슬라이더 구현.
- Overflow:hidden을 통해서 내용을 보이는 부분 통제.

#### [호텔 리스트 페이지]
- 페이지네이션 기능 구현
- calendar 라이브러리 구현(datepicker)
- 이미지 슬라이더 기능 구현
- fetch시 데이터 받아오는동안 loading 이미지 적용
- 정렬순서, 체크인/아웃 날짜, 부대시설(checkbox)를 통해 3중 필터링 구현

#### [지도 페이지]
- 구글 지도 Api 사용하여 백엔드로부터 받아온 좌표값을 통해 마커 생성 구현
- 호텔 평점에 해당하는 필터링 기능 구현
- marker 클릭시 해당하는 아이템 연결

### 3)협업 툴
- Git
- Slack
- Trello

## 정리

- Scrum 진행 방식을 통해 팀원들과 올바르게 의견을 조율 및 프로젝트 작업을 진행하였고, 팀워크의 중요성을 느낌
- 함수형 컴포넌트, styled-components, Hooks 등을 활용하여 좀 더 효율적인 코드를 고민하고 작성해볼 수 있었음.
- 라이브러리 기능을 직접 구현해보며, 라이브러리의 개념과 체계를 확인할 수 있었음.

## 전체영상 
[![트립어드바이저 클론](http://img.youtube.com/vi/5bPp7WZGTWQ/0.jpg)](https://youtu.be/5bPp7WZGTWQ)

## 제가 담당한 부분입니다.
[![로그인](http://img.youtube.com/vi/nmOXON25EL4/0.jpg)](https://youtu.be/nmOXON25EL4)
[![제품 상세페이지](http://img.youtube.com/vi/lZSW6Cr1rS4/0.jpg)](https://youtu.be/lZSW6Cr1rS4)
