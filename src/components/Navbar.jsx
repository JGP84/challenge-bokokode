import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 60px;
`;

const Wrapper = styled.div`
/* position: relative; */
  padding: 37px 68px 33px 0px;
  display: flex;
  align-items: center;
  justify-content: end;
 /*  background: #601919; */
`;

const IconCart = styled.img`
 
  /* width: 54px;
  height: 54px; */
  margin-left: 79px;
  
`;
const BadgeCart = styled.div`
 /* top: 60px; */
 margin-top: 23px;
  width: 21px;
  height: 20.57px;
 
  text-align: center;

  background: #000000;
`;

const NumberBadget = styled.text`
  font-family: "Archivo";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 22px;
 

  letter-spacing: 0.07em;

  color: #ffffff;
`;

const Navbar = () => {
  return (
    <>
    <Wrapper>
      <BadgeCart>
        <NumberBadget>1</NumberBadget>
      </BadgeCart>
      <IconCart src="/images/icons/cart-icon.png"></IconCart>
      </Wrapper>
    </>
  );
};

export default Navbar;
