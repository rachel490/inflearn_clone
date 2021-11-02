# Inflearn (인프런) Clone Coding

### 개발일지
#### [10.30]

- Logo svg 파일 색깔 변경
    - svg 사용하는 방법
        - 정적 : img 태그의 src로 사용
        - 동적 : svg 태그 자체를 사용
    - 색깔변경 : 동적이므로 svg 태그 자체를 사용 → svg안의 path의 fill 속성을 이용해서 바꿈
        - logo.svg : svg태그와 하위에 path태그들을 그대로 복붙
            
                                → svg태그에 id값 지정 (#icon_brand_logo)
            
        
        ```jsx
        import {ReactComponent as Logo} from '../../../logo.svg'
        
        <LogoWrapper to='/'>
            <Logo />             //svg자체
        </LogoWrapper>
        
        export const LogoWrapper = styled(Link)`
            #icon_brand_logo {
                fill: #1dc078;
            }
        `
        ```

#### [10.31]
- Global Style 적용 + reset.css :
    - GlobalStyle : styled-component의 createGlobalStyle 이용해서 생성
    - Reset : styled-reset 다운 받아서 사용
    
    ```jsx
    import { reset } from 'styled-reset';
    import { createGlobalStyle } from 'styled-components';
    
    const GlobalStyle = createGlobalStyle`
        ${reset};
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700;900&display=swap');
    
        body {
            font-family: 'Noto Sans KR', sans-serif;
        }
    `
    
    export default GlobalStyle
    ```
    
    ++ 반드시 Reset이 아닌 reset으로 써야함. 아니면 다음과 같은 에러메세지를 마주하게됨.
    
    ![스크린샷 2021-10-31 오후 11.21.46.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d90a2271-837c-4db7-aa2b-2cf624ea21c1/스크린샷_2021-10-31_오후_11.21.46.png)
    

- Link의 Styled Component version
    
    ⇒ Link도 a 태그와 같이 디폴트 스타일이 존재. reset.css나 GlobalStyle로 설정할 수 없으므로 styled component를 별도로 만듦 : StLink
    
    ```jsx
    import styled from 'styled-components'
    import {Link} from 'react-router-dom'
    
    export const StLink = styled(Link)`
        color: currentColor;
        text-decoration: none;
        cursor: pointer;
    
        &:focus, &:hover, &:visited, &:link, &:active {
            text-decoration: none;
        }
    `
    ```


### [11.1]

- React에서 Anchor 태그 사용할때 : target = '_blank' 설정시 오류
    - 에러메세지
        
        ![스크린샷 2021-11-01 오후 11.31.35.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/03963d8e-7b77-4a0c-bc82-35f031c683b0/스크린샷_2021-11-01_오후_11.31.35.png)
        
    - 해결방법
        
        ⇒ `rel='noopener noreferrer'` 사용
        
        ```jsx
        <a
          href='https://post.naver.com/inflearn'
          target='_blank'
          rel='noopener noreferrer'
        >
        ```
        

- TID
    - 서버 개발자분들과 1주차에 필요한 API의 API 명세서 정리



### [11.2]

- TID
    - kakao social login 구현
    - google social login 구현
    - sign in modal UI 구현
    - 서버 개발자분들과 전체 API 명세서 정리 (-ing)

