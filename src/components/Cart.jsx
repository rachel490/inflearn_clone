import React from "react";
import styled from "styled-components";
import cartData from './data/cart';


const Cart = () => {
  return (
    <Wrap>
      <Section>
        <Container>
          <Nav>
            <NavContent>
              <NavItem>
                <h1>수강바구니</h1>
              </NavItem>
            </NavContent>
            <NavContent>
              <NavItem>
                <UL>
                  <LI before="0">
                    <a href="/cart">수강 바구니</a>
                  </LI>
                  <LI before="1">
                    <a href="#">결제</a>
                  </LI>
                  <LI before="1">
                    <a href="#">결제 완료</a>
                  </LI>
                </UL>
              </NavItem>
            </NavContent>
          </Nav>
          <Coupon></Coupon>
          <CouponInput></CouponInput>
          <EmptyCart></EmptyCart>
          <MainCart></MainCart>
        </Container>
      </Section>
    </Wrap>
  );
};

export default Cart;

const Wrap = styled.main`
padding-top: 65px;
  min-height: 800px;
  background-color: #f5f5f5;
`;

const Section = styled.section`
  padding: 1.5rem 0;
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  width: auto;
  position: relative;
  flex-grow: 1;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NavContent = styled.div`
`;

const NavItem = styled.div``;

const UL = styled.ul``;

const LI = styled.li``;

const Coupon = styled.div``;
const CouponInput = styled.div``;
const EmptyCart = styled.div``;
const MainCart = styled.div``;

