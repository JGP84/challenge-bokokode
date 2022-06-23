import React from "react";
import styled from "styled-components";
import responsive from "../responsive.js"

const WrapperGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 90px);
  /* grid-template-rows: 100px 553px 300px; */
  grid-template-rows: repeat(8, auto);
  column-gap: 20px;
  background: red;
  /* grid-template-rows:  */
  margin-left: 68px;

  ${responsive.mobile}{
    grid-template-rows: repeat( 11, auto);
    row-gap: 20px;
  }
`;

const TitleHeader = styled.text`
  /* font-family: "Archivo"; */
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 35px;
  text-transform: capitalize;
  margin-left: 20px;

  color: #000000;

  grid-column: 1/10;

  ${responsive.mobile}{
    grid-row: 1;
  }
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

  ${responsive.mobile}{
    grid-row: 3;
  }
  /* text-align: center; */
  /* display: flex;
justify-content: center;
align-items: center; */
`;

const ImgFeaturedProduct = styled.img`
  grid-column: 1/13;
  grid-row: 2/3;
  justify-self: end;

  ${responsive.mobile}{
    grid-row: 2;
  }
`;
const Title = styled.text`
  font-family: "Archivo";
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 24px;

  grid-column: 1/7;
  grid-row: 3/4;

  ${responsive.mobile}{
    grid-row: 4;
  }
`;
const Subtitle = styled.text`
  font-family: "Archivo";
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 24px;
  margin-left: 20px;

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
  margin-left: 20px;
  /* or 27px */

  color: #656565;

  grid-column: 1/7;
  grid-row: 5/6;

  ${responsive.mobile}{
    grid-row: 5;
  }
`;

const TextDescriptionFooter = styled.text`
  font-family: "Archivo";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  margin-left: 20px;

  color: #656565;

  grid-column: 1/7;
  grid-row: 6/7;
`;

const Img = styled.img`
  width: 117px;
  height: 147px;
  grid-column: 11/13;
  grid-row: 5/6;
  justify-self: end;
`;

const SubtitleDetails = styled.text`
  font-family: "Archivo";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 17px;
  color: #656565;
  grid-column: 11/13;
  grid-row: 7/8;
  justify-self: end;
  
`;

const Header2 = () => {
  return (
    <>
      <WrapperGrid>
        <TitleHeader>samurai king resting</TitleHeader>
        <Button>add to cart</Button>
        <ImgFeaturedProduct src="/images/featured-product.png" />
        <Title style={{ marginLeft:"20px" }}>About the Samurai King Resting</Title>
        <Subtitle>Pets</Subtitle>
        <TextDescription >
          So how did the classical Latin become so incoherent? According to
          McClintock, a 15th century typesetter likely scrambled part of
          Cicero's De Finibus in order to provide placeholder text to mockup
          various fonts for a type specimen book.So how did the classical Latin
          become so incoherent? According to McClintock, a 15th century
          typesetter likely scrambled part of Cicero's De Finibus in order to
          provide placeholder
        </TextDescription>
        <TextDescriptionFooter>
          text to mockup various fonts for a type specimen book.So how did the
          classical Latin become so incoherent? According to McClintock.
        </TextDescriptionFooter>
        <Title style={{ gridColumn: "11/13", justifySelf: "end" }}>
          People also buy
        </Title>
        <Img src="/images/yellow-wall.png" />
        <Img style={{ marginRight:"152px" }} src="/images/odette-window.png" />
        <Img style={{ marginRight:"304px" }} src="/images/odette-window.png" />
        <Img src="/images/egg-ballon.png" />
        <Title style={{gridColumn: "11/13", gridRow: "6/7", justifySelf: "end"}}>Details</Title>
        <SubtitleDetails>Size: 1020 x 1020 pixel</SubtitleDetails>
        <SubtitleDetails style={{ gridRow: "8/9"}}>Size: 15 mb</SubtitleDetails>
      </WrapperGrid>
    </>
  );
};

export default Header2;
