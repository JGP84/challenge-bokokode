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
  margin-bottom: 46px;
`;
const ContainerTitlePhotoDay = styled.div` 
position: absolute;
width: 271.95px;
height: 67px;
left: 82px;
top: 742px;
background: #FFFFFF;
text-align: center;
`

const WrapperDescriptionFeatured = styled.div`
  /* position: relative; */
  max-width: 690px;
  /*  margin-left: 90px; */
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
  margin-top: 16px;
  margin-bottom: 16px;

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

const ContainerFlex = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1280px;
  margin-left: 92px;
  /* background: red; */
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
`;
const Row = styled.div`
  display: flex;
  /* justify-content: end; */
  /*  background: red; */
  margin-top: 34px;
  margin-bottom: 54px;
`;
const Img = styled.img`
  width: 117px;
  height: 147px;
  margin-left: 35px;
`;
const DimensionsDetails = styled.text`
  font-family: "Archivo";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 17px;
  color: #656565;
  text-align: right;
  margin-top: 16px;
  margin-bottom: 17px;
`;
const SizeDetails = styled.text`
  font-family: "Archivo";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 17px;
  color: #656565;
  text-align: right;
`;

const Header = () => {
  return (
    <>
      <Wrapper>
        <TitleHeader>samurai king resting</TitleHeader>
        <Button>add to cart</Button>
      </Wrapper>
      <ImgFeaturedProduct src="/images/featured-product.png" />
      <ContainerTitlePhotoDay>
        <Title sytle={{fontSize: "20px"}}>Photo of the day</Title>
      </ContainerTitlePhotoDay>

      <ContainerFlex>
        <WrapperDescriptionFeatured>
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
        </WrapperDescriptionFeatured>

        <Column>
          <Title style={{ textAlign: "right"}}>People also buy</Title>

          <Row>
            <Img src="/images/yellow-wall.png" />
            <Img src="/images/odette-window.png" />
            <Img src="/images/egg-ballon.png" />
          </Row>
          <Column>
            <Title style={{ textAlign: "right"}}>Details</Title>
            <DimensionsDetails>Size: 1020 x 1020 pixel</DimensionsDetails>
            <SizeDetails>Size: 15 mb</SizeDetails>
          </Column>
        </Column>
      </ContainerFlex>
    </>
  );
};

export default Header;
