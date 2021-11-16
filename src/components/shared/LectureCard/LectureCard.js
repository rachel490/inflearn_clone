import React, { useState } from "react";
import styled from "styled-components";
import StarRate from "../StarRate/StarRate";
import axios from "axios";
import { API } from "../../../config";
import { FaCartPlus, FaHeart, FaPlus, FaSignal, FaCubes } from "react-icons/fa";
import { MdOutlineAccountTree } from "react-icons/md";

const LectureCard = ({
  data: {
    BIG_CATEGORY_NAME,
    MIDDLE_CATEGORY_NAME,
    LEARNING_LEVEL,
    NICK_NAME,
    PRICE,
    SALE_PERCENT,
    TAG,
    TITLE_IMAGE,
    STAR_POINT,
    LECTURE_NAME,
    INTRO_BODY,
    LECTURE_ID,
  },
}) => {
  const [hoverState, SetHoverState] = useState(false);
  const HREF_URL = `/course/${LECTURE_ID}`;
  const onSale = SALE_PERCENT == "0" || !SALE_PERCENT ? false : true;
  const jwtToken = localStorage.getItem("jwtToken");

  const onHover = () => {
    SetHoverState(true);
  };
  const onNotHover = () => {
    SetHoverState(false);
  };

  const handleCart = (e) => {
    console.log(e.target.style.color);
    if (e.target.style.color) {
      e.target.style.color = "";

      const config = {
        method: "delete",
        url: API.CART_DELETE(LECTURE_ID),
        headers: {
          "x-access-token": localStorage.getItem("jwtToken"),
        },
      };

      axios(config)
        .then((response) =>
          console.log("cart deleted", JSON.stringify(response.data))
        )
        .catch((error) => console.log(error));
    } else {
      e.target.style.color = "lightblue";
      console.log(LECTURE_ID, "added");

      const config = {
        method: "post",
        url: API.CART_ADD(LECTURE_ID),
        headers: {
          "x-access-token": localStorage.getItem("jwtToken"),
        },
      };

      axios(config)
        .then((response) =>
          console.log("cart added", JSON.stringify(response.data))
        )
        .catch((error) => console.log(error));
    }
  };

  const handleWishlist = (e) => {
    console.log(e.target.style.color);
    if (e.target.style.color) {
      e.target.style.color = "";

      const data = JSON.stringify({
        lectureId: LECTURE_ID,
      });

      const config = {
        method: "delete",
        url: API.WISHLIST,
        headers: {
          "x-access-token": localStorage.getItem("jwtToken"),
          "Content-Type": "application/json",
        },
        data: data,
      };

      axios(config)
        .then((response) =>
          console.log("wish deleted", JSON.stringify(response.data))
        )
        .catch((error) => console.log(error));
    } else {
      e.target.style.color = "red";
      console.log(LECTURE_ID, "added");

      const data = JSON.stringify({
        lectureId: LECTURE_ID,
      });

      const config = {
        method: "post",
        url: API.WISHLIST,
        headers: {
          "x-access-token": localStorage.getItem("jwtToken"),
          "Content-Type": "application/json",
        },
        data: data,
      };

      axios(config)
        .then((response) =>
          console.log("wish add", JSON.stringify(response.data))
        )
        .catch((error) => console.log(error));
    }
  };

  return (
    <Wrap onMouseOver={onHover} onMouseLeave={onNotHover}>
      <Container>
        <FrontContainer href={HREF_URL}>
          <ImgSection>
            <img src={TITLE_IMAGE} alt="thumbnail" />
          </ImgSection>
          <ContentSection>
            <Title>{LECTURE_NAME}</Title>
            <Name>{NICK_NAME}</Name>
            <Rate>
              <StarRate rate={STAR_POINT} />
              <Review>(451)</Review>
            </Rate>
            <Price>
              <OriginalPrice onSale={onSale}>₩{PRICE}</OriginalPrice>
              <DiscountPrice onSale={onSale}>
                ₩{PRICE * (1 - parseInt(SALE_PERCENT) * 0.01)}
              </DiscountPrice>
            </Price>
            <TagContainer>
              <StudentTag bgColor="hsl(182,75%,94%)">+10400명</StudentTag>
              <DiscountTag bgColor="hsl(1,100%,89%)" onSale={onSale}>
                할인중
              </DiscountTag>
            </TagContainer>
          </ContentSection>
        </FrontContainer>
        <BackContainer isHovered={hoverState}>
          <BackContent>
            <BackTitle>{LECTURE_NAME}</BackTitle>
            <BackDesc>{INTRO_BODY}</BackDesc>
            <BackMetas>
              <Meta>
                <span>
                  <FaSignal className="meta-icon" />
                  {LEARNING_LEVEL == 1 && "입급"}
                  {LEARNING_LEVEL == 2 && "초급"}
                  {LEARNING_LEVEL == 3 && "중급 이상"}
                </span>
              </Meta>
              <Meta>
                <span>
                  <MdOutlineAccountTree className="meta-icon" />
                  {BIG_CATEGORY_NAME +
                    ", " +
                    MIDDLE_CATEGORY_NAME.map((item) => item).join(", ")}
                </span>
              </Meta>
              <Meta>
                <span>
                  <FaCubes className="meta-icon" />
                  {TAG.map((tag) => tag).join(", ")}
                </span>
              </Meta>
            </BackMetas>
          </BackContent>
          <BackController>
            <Button message="바구니에 추가하기" onClick={handleCart}>
              <FaCartPlus className="icon cart" hoverColor="#c5ebf8" />
            </Button>
            <Button message="위시리스트에 추가하기" onClick={handleWishlist}>
              <FaHeart className="icon wishlist" hoverColor="red" />
            </Button>
            <Button message="폴더에 추가하기">
              <FaPlus className="icon folder" />
            </Button>
          </BackController>
        </BackContainer>
      </Container>
    </Wrap>
  );
};

export default LectureCard;

const Wrap = styled.div`
  width: 25%;
  padding: 0.75rem;
  box-sizing: border-box;
`;

const Container = styled.div`
  position: relative;
  box-sizing: border-box;
`;

const FrontContainer = styled.a`
  position: relative;
`;

const ImgSection = styled.section`
  display: block;
  position: relative;

  img {
    height: 100%;
    width: 100%;
  }
`;

const ContentSection = styled.section`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h4`
  flex: 1 1 auto;
  font-weight: 700;
  margin-bottom: 0;
  line-height: 1.5em;
  height: 3rem;
  font-size: 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  white-space: pre-wrap;
`;

const Name = styled.span`
  color: #7d7d7d;
  font-size: 0.9rem;
`;

const Rate = styled.div`
  display: flex;
  algin-items: center;
  padding-top: 0.5rem;
`;

const Review = styled.span`
  display: flex;
  align-items: center;
  font-size: 0.5rem;
  bottom: 0.3rem;
  color: #4a4a4a;
`;

const Price = styled.div`
  padding-top: 0.5rem;
`;

const OriginalPrice = styled.span`
  color: ${(props) => (props.onSale ? "#595959" : "#175cbe")};
  font-weight: ${(props) => (props.onSale ? "500" : "700")};
  font-size: ${(props) => (props.onSale ? "0.9rem" : "1rem")};
  opacity: ${(props) => (props.onSale ? "0.75" : "1")};
  text-decoration: ${(props) => (props.onSale ? "line-through" : "none")};
`;

const DiscountPrice = styled.span`
  margin-left: 0.25rem;
  font-weight: 700;
  color: #175cbe;
  display: ${(props) => (props.onSale ? "inline-block" : "none")};
`;

const TagContainer = styled.div`
  padding-top: 0.5rem;
`;

const DiscountTag = styled.div`
  align-items: center;
  background-color: ${(props) => props.bgColor};
  border-radius: 4px;
  color: #454545;
  display: ${(props) => (props.onSale ? "inline-flex" : "none")};
  font-size: 0.75rem;
  height: 2em;
  justify-content: center;
  line-height: 1.5;
  padding-left: 0.75em;
  padding-right: 0.75em;
  white-space: nowrap;
  margin-right: 0.5rem;
`;

const StudentTag = styled.div`
  align-items: center;
  background-color: ${(props) => props.bgColor};
  border-radius: 4px;
  color: #454545;
  display: inline-flex;
  font-size: 0.75rem;
  height: 2em;
  justify-content: center;
  line-height: 1.5;
  padding-left: 0.75em;
  padding-right: 0.75em;
  white-space: nowrap;
  margin-right: 0.5rem;
`;

const BackContainer = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  color: #fff;
  font-size: 13px;
  padding: 8px;
  display: ${(props) => (props.isHovered ? "block" : "none")};
  box-sizing: border-box;
  z-index: 2;
`;
const BackContent = styled.a`
  position: absolute;
  padding: 0.75rem;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  color: #fff;
  box-sizing: border-box;
`;
const BackTitle = styled.h2`
  font-size: 0.95rem;
  line-height: 1.25;
  font-weight: 700;
  margin-bottom: 0.25rem;
`;
const BackDesc = styled.span`
  line-height: 1.6em;
  font-size: 0.85rem;
  margin-bottom: 0.5rem;
  overflow: hidden;
  font-weight: 400;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
`;
const BackMetas = styled.div`
  width: 100%;
  color: #c5ebf8;
`;

const Meta = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  white-space: nowrap;
  height: 1.2rem;
  width: 100%;
  margin-bottom: 0.07rem;
  box-sizing: border-box;

  span {
    word-break: break-all;
    text-overflow: ellipsis;
  }

  .meta-icon {
    margin-right: 0.3rem;
    vertical-align: sub;
  }
`;
const BackController = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  text-align: center;
  padding-right: 0.15rem;
  padding-bottom: 0.5rem;
`;
const Button = styled.button`
  position: relative;
  display: block;
  background-color: transparent;
  border: none;
  padding: 0.15rem;
  box-sizing: border-box;
  cursor: pointer;

  &:hover {
    .cart {
      color: #c5ebf8;
    }
    .wishlist {
      color: #ff6c5c;
    }
  }

  &:hover:before {
    background: rgba(255, 221, 87, 0.9);
    content: "${(props) => props.message}";
    color: rgba(0, 0, 0, 0.7);
    transform: translate(-0.5rem, 50%);
    top: auto;
    bottom: 50%;
    left: auto;
    right: 100%;
    opacity: 1;
    border-radius: 4px;
    position: absolute;
    padding: 0.4rem 0.8rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 0.75rem;
    max-width: 24rem;
    display:inline-block;
  }

  &:hover:after {
    border-color: transparent transparent transparent rgba(255, 221, 87, 0.9);
    top: 50%;
    bottom: auto;
    left: auto;
    right:  calc(100% - 0.5rem);
    opacity: 1;
    margin-left: -0.5rem;
    margin-top: -0.5rem;
    content: "";
    border-style: solid;
    border-width: 0.5rem;
    position: absolute;
    display: inline-block;
    pointer-events: none;

}
  }

  .icon {
    font-weight: 300;
    font-size: 1.33333em;
    line-height: 0.75em;
    vertical-align: -0.0667em;
    font-family: "Font Awesome 5 Free";
    color: white;
  }
`;
