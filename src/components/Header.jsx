import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  /* position: relative; */
  max-width: 1282px;
  margin-left: 90px;
  /* padding: 37px 68px 33px 0px; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* background: #601919; */
`;

const TitleHeader = styled.text`
  /* font-family: "Archivo"; */
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 35px;
  text-transform: capitalize;

  color: #000000;
`;
const Button = styled.button`
  /* width: 257px;
  height: 47px; */
  padding: 13px 39px;
  font-family: "Archivo";
  font-style: normal;
  font-weight: 500;
  font-size: 23px;
  /* line-height: 25px; */
  letter-spacing: 0.07em;
  background: #000000;
  color: #ffffff;
  text-transform: uppercase;
  text-align: center;
`;

const ImgFeaturedProduct = styled.img`
  margin-top: 27px;
  margin-left: 82px;
`;
const WrapperDescriptionFeatured = styled.div`
  /* position: relative; */
  max-width: 690px;
  margin-left: 90px;
  /* padding: 37px 68px 33px 0px; */
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* justify-content: space-between; */
  /* background: #601919; */
`;

const Title = styled.text`
  font-family: "Archivo";
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 24px;
`;
const SubTitle = styled.text`
  font-family: "Archivo";
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 24px;

  color: #656565;
`;
const TextDescription = styled.text`
  font-family: "Archivo";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  /* or 27px */

  color: #656565;
`;
const TextDescriptionFooter = styled.text`
  font-family: "Archivo";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  /* or 27px */

  color: #656565;
  margin-top: 40px;
`;


const Header = () => {
  return (
    <>
      <Wrapper>
        <TitleHeader>samurai king resting</TitleHeader>
        <Button>add to cart</Button>
      </Wrapper>
      <ImgFeaturedProduct src="/images/featured-product.png" />

      <WrapperDescriptionFeatured>
        <Title>About the Samurai King Resting</Title>
        <SubTitle>Pets</SubTitle>
        <TextDescription>
          So how did the classical Latin become so incoherent? According to
          McClintock, a 15th century typesetter likely scrambled part of
          Cicero's De Finibus in order to provide placeholder text to mockup
          various fonts for a type specimen book.So how did the classical Latin
          become so incoherent? According to McClintock, a 15th century
          typesetter likely scrambled part of Cicero's De Finibus in order to
          provide placeholder 
        </TextDescription>
        <TextDescriptionFooter>text to mockup various fonts for a type specimen book.So how did the
          classical Latin become so incoherent? According to McClintock.</TextDescriptionFooter>
        
      </WrapperDescriptionFeatured>
    </>
  );
};

export default Header;
