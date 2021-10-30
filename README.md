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