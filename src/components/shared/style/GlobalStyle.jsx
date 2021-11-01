import { reset } from 'styled-reset';
import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
    ${reset};
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700;900&display=swap');

    body {
        font-family: 'Noto Sans KR', sans-serif;
    }

    a { 
        text-decoration: none;
        color: inherit;
    }
`

export default GlobalStyle