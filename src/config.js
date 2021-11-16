export const SERVER = "https://prod.jkrising.shop/inflearn";
export const JWT_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQsIm1lc3NhZ2UiOiJsb2dpbiIsImlhdCI6MTYzNTg3MDE1OCwiZXhwIjoxNjM1ODkxNzU4LCJzdWIiOiJ1c2VySW5mbyJ9.Hw6WD85Pl9vS6PgZ3U1YMMbptNs1kzkVoPFbOTZ618Q";
export const JWT_EXPIRE_TIME = 24 * 3600 * 1000; // 만료 시간 (24시간 밀리 초로 표현)


export const KAKAO = {
  API_KEY: "40381803c933c854ea74c9cb7f7cc5fc",
  SECRET_KEY: "gYLtw8TmXtIFzhH2XwOXPGd0S4yv4F1J",
  REDIRECT_URI: "https://prod.jkrising.shop/inflearn/oauth2/kakao",
};

export const API = {
  SIGN_UP: `${SERVER}/users/signup`,
  LOGIN : `${SERVER}/users/login`,
  REFRESH_LOGIN :`${SERVER}/users/token/issuance`,
  PROFILE_INFO_UPDATE: `${SERVER}/users/profile`,
  PROFILE_EMAIL_UPDATE: `${SERVER}/users/email`,
  PROFILE_PHONE_UPDATE: `${SERVER}/users/phonenumber`,
  LECTURE_LIST: `${SERVER}/courses/lectures`,
  LECTURE_DETAIL_CONTENT : (id) =>  `${SERVER}/lectures/${id}/introduction`,
  LECTURE_DETAIL_HEADER : (id) =>  `${SERVER}/lectures/${id}/header`,
  LECTURE_DETAIL_SIDEBAR : (id) =>  `${SERVER}/lectures/${id}/info`,
  LECTURE_DETAIL_CURRICULUM: (id) =>  `${SERVER}/lectures/${id}/curriculum`,
  LECTURE_DETAIL_REVIEW: (id) =>  `${SERVER}/lectures/${id}/reviews`,
  WISHLIST: `${SERVER}/users/wishlist/items`,
  NEW_LECTURES : `${SERVER}/lectures/latest`,
  RECENT_LECTURES :`${SERVER}/lectures/users/histories`,
  POPULAR_LECTURES : `${SERVER}/lectures/popularity`,
  CART: `${SERVER}/payments/carts`,
  CART_ADD: id => `${SERVER}/payments/carts/${id}`,
  CART_DELETE: id => `${SERVER}/payments/carts/${id}`,
  KAKAO_URL: `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO.API_KEY}&redirect_uri=${KAKAO.REDIRECT_URI}&response_type=code`,
};

