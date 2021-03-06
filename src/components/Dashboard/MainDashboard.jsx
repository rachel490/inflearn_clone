import React from "react";
import styled from "styled-components";

const MainDashboard = () => {
  return (
    <Wrap>
      <Container>
        <BoxWrap>
          <Box>
            <Title>
              <span className="icon">π</span>
              <span className="title">ccori12λ νλ‘ν</span>
            </Title>
            <Content>
              <List>
                <img
                  src="https://cdn.inflearn.com/public/users/thumbnails/409745/392e8028-31e5-46ea-a736-ae9a8372371e"
                  alt="ccori12μ νλ‘ν"
                />
                <h5>ccori12λ, μλνμΈμ! ππΌ</h5>
              </List>
              <Link href="/settings/account">νλ‘ν μμ νκΈ°</Link>
            </Content>
          </Box>
        </BoxWrap>
        <BoxWrap>
          <Box>
            <Title>
              <span className="icon">π</span>
              <span className="title">μ΅κ·Ό νμ΅ κ°μ</span>
            </Title>
            <Content>
              <ListCol>
                <Header>
                  λΉμ κ³΅μλ₯Ό μν κ°λ°μ μ·¨μ μ¬μΈμ κ°μ΄λ [μ·¨μνΈ]
                  <span>(λ°©κΈ)</span>
                </Header>
                <Progress>
                  <label>μ§λμ¨ : 18κ°/44κ° (40.90%)</label>
                  <progress value="40.90" max="100">
                    40.90%
                  </progress>
                </Progress>
              </ListCol>
              <Link>
                <a href="/my-courses" className='my-courses'>λ΄ λͺ¨λ  κ°μ</a>
                <a href="/course/κ°λ°μ-μ·¨μ-μ·¨μνΈ/lecture/66438" className="continue">
                  μ΄μ΄μ νμ΅νκΈ°
                </a>
              </Link>
            </Content>
          </Box>
        </BoxWrap>
        <BoxWrap>
          <Box>
            <Title>
              <span className="icon">π</span>
              <span className="title">μ΅κ·Ό λ΄ λΈνΈ</span>
            </Title>
            <Content>
              <List></List>
              <Link href="/my-notes">λ΄λΈνΈ μ μ²΄λ³΄κΈ°</Link>
            </Content>
          </Box>
        </BoxWrap>
        <BoxWrap>
          <Box>
            <Title>
              <span className="icon">ππ»</span>
              <span className="title">νμ΅ ν΅κ³</span>
            </Title>
            <List>
              <Item>
                <Num>0</Num>
                <Subject>μλ£ κ°μμ</Subject>
              </Item>
              <Item>
                <Num>120</Num>
                <Subject>μλ£ μμμ</Subject>
              </Item>
              <Item>
                <Num>0</Num>
                <Subject>νλ μλ£μ¦</Subject>
              </Item>
            </List>
          </Box>
        </BoxWrap>
        <BoxWrap>
          <Box>
            <Title>
              <span className="icon">π</span>
              <span className="title">My Certificates</span>
            </Title>
            <Content>
              <List></List>
              <Link href="/my-certificates">μλ£μ¦ μ μ²΄λ³΄κΈ°</Link>
            </Content>
          </Box>
        </BoxWrap>
        <BoxWrap>
          <Box>
            <Title>
              <span className="icon">π</span>
              <span className="title">μ΅κ·Ό νμ΅μ€μΈ κ°μ</span>
            </Title>
            <Content>
              <ListCol>
                <a
                  href="/course/κ°λ°μ-μ·¨μ-μ·¨μνΈ/lecture/66438"
                  class="course_item"
                >
                  <div class="course_title">
                    λΉμ κ³΅μλ₯Ό μν κ°λ°μ μ·¨μ μ¬μΈμ κ°μ΄λ [μ·¨μνΈ]
                  </div>
                  <time
                    class="finished_time"
                    datetime="Wed Nov 10 2021 16:57:37 GMT+0900 (GMT+09:00)"
                  >
                    λ°©κΈ
                  </time>
                </a>
                <a
                  href="/course/λ°λΌνλ©°-λ°°μ°λ-λΈλ-λ¦¬μ‘νΈ-κΈ°λ³Έ/lecture/37108"
                  class="course_item"
                >
                  <div class="course_title">
                    λ°λΌνλ©° λ°°μ°λ λΈλ, λ¦¬μ‘νΈ μλ¦¬μ¦ - κΈ°λ³Έ κ°μ
                  </div>
                  <time
                    class="finished_time"
                    datetime="Wed Nov 10 2021 11:00:30 GMT+0900 (GMT+09:00)"
                  >
                    5μκ° μ 
                  </time>
                </a>
                <a
                  href="/course/νμ΄μ¬-μκ³ λ¦¬μ¦-λ¬Έμ νμ΄-μ½λ©νμ€νΈ/lecture/26913"
                  class="course_item"
                >
                  <div class="course_title">
                    νμ΄μ¬ μκ³ λ¦¬μ¦ λ¬Έμ νμ΄ (μ½λ©νμ€νΈ λλΉ)
                  </div>
                  <time
                    class="finished_time"
                    datetime="Mon Nov 01 2021 20:42:40 GMT+0900 (GMT+09:00)"
                  >
                    8μΌ μ 
                  </time>
                </a>
                <a
                  href="/course/λΉμ κ³΅μλ₯Ό-μν-κ°λ°μ-μ·¨μ/lecture/39685"
                  class="course_item"
                >
                  <div class="course_title">
                    λΉμ κ³΅μλ₯Ό μν κ°λ°μ μ·¨μ μ€μ  κ°μ΄λ
                  </div>
                  <time
                    class="finished_time"
                    datetime="Tue May 04 2021 00:50:48 GMT+0900 (GMT+09:00)"
                  >
                    6λ¬ μ 
                  </time>
                </a>
                <a
                  href="/course/κΈ°λ³Έμ μΈ-λ¨Έμ λ¬λ-λ₯λ¬λ-κ°μ’/lecture/3374"
                  class="course_item"
                >
                  <div class="course_title">
                    λͺ¨λλ₯Ό μν λ₯λ¬λ - κΈ°λ³Έμ μΈ λ¨Έμ λ¬λκ³Ό λ₯λ¬λ κ°μ’
                  </div>
                  <time
                    class="finished_time"
                    datetime="Fri Mar 26 2021 20:50:29 GMT+0900 (GMT+09:00)"
                  >
                    7λ¬ μ 
                  </time>
                </a>
              </ListCol>
              <Link href="/my-courses">λ΄κ°μ μ μ²΄λ³΄κΈ°</Link>
            </Content>
          </Box>
        </BoxWrap>
        <BoxWrap>
          <Box>
            <Title>
              <span className="icon">π</span>
              <span className="title">μλ£ν κ°μ</span>
            </Title>
            <Content>
              <List></List>
              <Link href="/my-courses">λ΄κ°μ μ μ²΄λ³΄κΈ°</Link>
            </Content>
          </Box>
        </BoxWrap>
      </Container>
    </Wrap>
  );
};

export default MainDashboard;

const Wrap = styled.div`
  padding-top: 1rem;
  max-width: 980px;
  margin-bottom: 2rem;
  padding: 0.75rem;
  width: 100%;
  box-sizing: border-box;
`;
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const BoxWrap = styled.div`
  flex: none;
  width: 45%;
  padding: 0.75rem;
  box-sizing: border-box;
  margin: 1rem;
`;
const Box = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 230px;
  padding: 0.5rem 1rem;
  overflow: hidden;
  box-shadow: 2px 8px 12px 0 rgb(20 20 20 / 2%);
  background-color: #fff;
  border-radius: 4px;
  color: #333;
`;
const Content = styled.div`
  overflow: auto;
  height: calc(100% - 25px);
`;
const Title = styled.div`
  font-weight: 700;
  margin-bottom: 1rem;
  line-height: 1.6;
  font-size: 16px;

  .icon {
    margin-right: 0.5rem;
  }
`;
const List = styled.div`
  display: flex;
  img {
    height: 65px;
    width: 65px;
    object-fit: cover;
    border-radius: 50%;
    margin-right: 1rem;
  }

  h5 {
    font-size: 1.25rem;
    font-weight: 700;
  }
`;
const ListCol = styled.div`
  display: flex;
  flex-direction: column;
  img {
    height: 65px;
    width: 65px;
    object-fit: cover;
    border-radius: 50%;
    margin-right: 1rem;
  }

  h5 {
    font-size: 1.25rem;
    font-weight: 700;
  }

  a {
    display: flex;
    align-items: center;
    margin-bottom: 0.75rem;
  }

  time {
    margin-left: auto;
    text-align: right;
    font-size: 0.75rem;
    white-space: nowrap;
  }
`;
const Link = styled.a`
  color: #454545;
  position: absolute;
  right: 1rem;
  bottom: 0.5rem;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }

  a {
    cursor: pointer;
    justify-content: center;
    padding: calc(0.375em - 1px) 0.75em;
    text-align: center;
    white-space: nowrap;
    border-width: 1px;
    font-size: 1rem;
    height: 2.25em;
    border-radius: 4px;
    box-shadow: none;
    display: inline-flex;
    align-items: center;
    
  }

  .my-courses {
    background-color: #1dc078;
    border-color: transparent;
    color: #fff;
    margin-bottom: 0.5rem;
    margin-right: 0.5rem;
;

  }

  .continue {
    background-color: #ff7867;
    border-color: transparent;
    color: #fff;
    margin-bottom: 0.5rem;
    margin-right: 0.5rem;

  }
`;
const Header = styled.header`
  line-height: 1.6;
  font-weight: 600;
  font-size: 16px;
  margin-bottom: 15px;
`;
const Progress = styled.div`
  label {
    font-size: 0.8rem;
    color: #333;
  }

  progress {
    max-width: 380px;
    width: 90%;
    height: 1.5rem;
    margin-top: 0.4rem;
  }
`;
const Item = styled.div`
  width: 33.3%;
  padding: 0.75rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Num = styled.div`
  font-size: 3rem;
  font-weight: 700;
  color: #595959;
  opacity: 0.5;
  padding-top: 20px;
  cursor: pointer;

  &:hover {
    color: #1dc078;
    opacity: 1;
  }
`;
const Subject = styled.div`
  text-align: center;
  margin-top: 20px;
`;
