export const SERVER = "https://prod.jkrising.shop/inflearn";
export const JWT_EXPIRE_TIME = 24 * 3600 * 1000; // 만료 시간 (24시간 밀리 초로 표현)

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
  QUESTION: `${SERVER}/community/questions`,
  CHAT: `${SERVER}/community/chats`,
  STUDY: `${SERVER}/community/studies`,
  KAKAO_URL: `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_API_KEY}&redirect_uri=${process.env.REACT_APP_KAKAO_REDIRECT_URI}&response_type=code`,
};

