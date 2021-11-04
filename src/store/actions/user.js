import axios from 'axios';

export function loginUser(dataToSubmit) {
  const request = axios({
    method: 'post',
    url: 'https://dev.jkrising.shop/inflearn/users/signup',
    data: {
    //   email: Email,
    //   password: Password,
    },
  });

  request
  .then(res => console.log('success', res))
  .catch(err => console.log('error', err))

  return {
    type: 'LOGIN_USER',
    payload: request
  }
}
