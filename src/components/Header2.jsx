import React from "react";
import styled from "styled-components";

const WrapperGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 90px);
  /* grid-template-rows: 100px 553px 300px; */
  grid-template-rows: repeat(6, auto);
  column-gap: 20px;
  background: red;
  /* grid-template-rows:  */
  margin-left: 68px;
`;

const TitleHeader = styled.text`
  /* font-family: "Archivo"; */
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 35px;
  text-transform: capitalize;

  color: #000000;

  grid-column: 1/10;
`;

const Button = styled.button`
  width: 257px;
  height: 47px;
  padding: 9.5px 39px 5.5px 39px;
  font-family: "Archivo";
  font-style: normal;
  font-weight: 500;
  font-size: 23px;
  /* line-height: 25px; */
  letter-spacing: 0.07em;
  background: #000000;
  color: #ffffff;
  text-transform: uppercase;

  grid-column-start: 10;
  /* text-align: center; */
  /* display: flex;
justify-content: center;
align-items: center; */
`;

const ImgFeaturedProduct = styled.img`
grid-column: 1/13;
grid-row: 2/3;
justify-self: end;
`;
const Title = styled.text`
  font-family: "Archivo";
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 24px;

  grid-column: 1/7;
  grid-row: 3/4;
  
`;
const SubTitle = styled.text`
  font-family: "Archivo";
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 24px;
 

  color: #656565;

  grid-column: 1/7;
  grid-row: 4/5;
`;

const TextDescription = styled.text`
  font-family: "Archivo";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  /* or 27px */

  color: #656565;

  grid-column: 1/7;
  grid-row: 5/6;
`;

const TextDescriptionFooter = styled.text`
  font-family: "Archivo";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  
  color: #656565;
  
  grid-column: 1/7;
  grid-row: 6/7;
`;

const Header2 = () => {
  return (
    <>
      <WrapperGrid>
        <TitleHeader>samurai king resting</TitleHeader>
        <Button>add to cart</Button>
        <ImgFeaturedProduct src="/images/featured-product.png" />
        <Title>About the Samurai King Resting</Title>
        <SubTitle>Pets</SubTitle>
        <TextDescription>
            So how did the classical Latin become so incoherent? According to
            McClintock, a 15th century typesetter likely scrambled part of
            Cicero's De Finibus in order to provide placeholder text to mockup
            various fonts for a type specimen book.So how did the classical
            Latin become so incoherent? According to McClintock, a 15th century
            typesetter likely scrambled part of Cicero's De Finibus in order to
            provide placeholder
          </TextDescription>
          <TextDescriptionFooter>
            text to mockup various fonts for a type specimen book.So how did the
            classical Latin become so incoherent? According to McClintock.
          </TextDescriptionFooter>
          <Title style={{ gridColumn: "11/13", justifySelf: "end"}}>People also buy</Title>
      </WrapperGrid>
    </>
  );
};

export default Header2;
