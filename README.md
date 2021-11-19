# Inflearn Clone

![Screen Shot 2021-11-19 at 5.54.10 PM.png](Untitled%2053d3f0f7fd254d4ab3f4bf6ee9b3165e/Screen_Shot_2021-11-19_at_5.54.10_PM.png)

<br />

## 1. 제작 기간 & 참여 인원
- 2021년 10월 30일 ~ 11월 12일
- 팀 프로젝트
- Front-end: Dwell
- Back-end: Rio, Nadan

<br />

## 2. 사용 기술
`front-end`

- Javascript
- React
- Router
- Styled-Component

`etc`

- jwt Token
- Oauth2

<br />

## 3. 프론트엔드 핵심 목표


- 프론트엔드와 백엔드 개발자들이 협업하여 프로젝트 진행
- API 통신을 통해서 데이터를 랜더
- styled-components로 스타일링하여 컴포넌트의 재사용성 증가

<br />

## 4. 페이지별 기능


### 회원가입 / 로그인

- 회원가입 폼 유효성 검사
- local storage에 jwt,refresh token 저장

### 메인페이지

- 로그인 여부에 따라 다른 화면 렌더

### 강의목록

- 선택한 카테고리에 맞는 데이터를 fetch하여 강의 리스트 렌더

### 강의상세

- 강의와 관련된 수강평을 조회 API를 써서 fetch
- 강의 커리큘럼을 조회 API를 써서 fetch

### 대시보드

- 프로필의 유저 닉네임과 자기소개, 휴대폰번호, 이메일 변경가능
- 수강바구니에 넣은 강의목록을 확인가능
- 위시리스트에 넣은 강의목록을 확인가능

<br />

## 5. 리팩토링 계획
**해당 프로젝트는 차후에 다음과 같이 개선할 예정입니다.**

- 동적 웹페이지 구현
- 중복된 코드는 모듈화를 사용하여 중복 최소화
- prettier, eslint를 사용하여 코드 컨벤션에 맞춰 전체적인 코드 리팩토링
- 퍼포먼스 개선
- 서버와 협업하여 API 연결 및 서비스 구동 상태 구축