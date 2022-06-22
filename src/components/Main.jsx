import React, { useState } from "react";
import styled from "styled-components";
import Checkbox from "./Checkbox";
import responsive from "../responsive.js"


// Responsive
const media = {
mobile: '@media(max-width: 414px)'
} 

const WrapperHeader = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1266px;
  margin-left: 97px;
  margin-top: 68px;
  margin-bottom: 59px;
`;
const WrapperTitleCategory = styled.div``;

const TitleCategory = styled.text`
  font-family: "Archivo";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 33px;
  color: #000000;
`;
const WrapperSortProducts = styled.div``;
const TitleSorts = styled.text`
  font-family: "Archivo";
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 24px;
  color: #000000;
`;

const Row = styled.div`
  max-width: 1266px;
  display: flex;
  justify-content: space-between;
  margin-left: 97px;
  /*  background: blue; */
`;

const ColumnCheckboxes = styled.div`
  display: flex;
  flex-direction: column;
  background: red;
  width: 300px;

  ${media.mobile}{
    width: 0px;
  }
 
`;
const WrapperCheckbox = styled.div`
  max-width: 327px;
  display: flex;
  flex-direction: column;
  background: yellow;
`;

const GridProducts = styled.div`
  display: grid;
  /* gap: 1rem;
  grid-auto-rows: 22rem;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr)); */
  /* grid-auto-rows: 514px;
  grid-template-columns: repeat(auto-fill, minmax(283.02px, 1fr)); */
  grid-template-columns: repeat(3, 283.02px);
 /*  grid-template-columns: repeat(auto-fill, minmax( 1fr, 283.02px)); */
  /* grid-template-columns: repeat(auto-fill, minmax( 200px, auto)); */
 /*  grid-template-columns: repeat(auto-fill, minmax( 200px, 1fr)); */
  /* grid-template-rows: repeat(2, 514px);  */
  grid-auto-rows: 514px;
  column-gap: 48px;
  row-gap: 52.55px;

  ${responsive.mobile}{
    grid-template-columns: 1fr;
    grid-template-rows: 362px; 
    row-gap: 40px;
  }
`;

const CardProduct = styled.div`
  width: 283.02px;
  height: 514px;
  /* background-color: green; */
  color: white;
  font-size: 32px;
  /* text-align: center; */
  display: flex;
  flex-direction: column;
  align-items: flex-center;

  ${media.mobile}{
    width: 362px;
  height: 661px;
  }
`;
const ButtonCart = styled.button`
  width: 100%;
  height: 46px;
  background: #000000;
  font-family: "Archivo";
  font-style: normal;
  font-weight: 500;
  font-size: 23px;
  line-height: 25px;
  text-align: center;
  letter-spacing: 0.07em;
  text-transform: uppercase;

  color: #ffffff;
`;

const ImgProduct = styled.img`
  width: 283.02px;
  height: 352.72px;
  object-fit: cover;

  ${media.mobile}{
    width: 362px;
  height: 661px;
  object-fit: cover;
  }
`;
const WrapperText = styled.div`
  width: 283.02px;
  /* height: 115,98px; */
  height: 22%;
  display: flex;
  flex-direction: column;
  justify-content: space-space-evenly;
  align-items: flex-start;
  gap: 8px;

  /* background: red; */
`;
const TextCategory = styled.text`
  font-family: "Archivo";
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 24px;
  margin-top: 8px;
  text-transform: capitalize;
  /* identical to box height */

  color: #656565;
`;

const TextProduct = styled.text`
  font-family: "Archivo";
  font-style: normal;
  font-weight: 700;
  font-size: 34px;
  line-height: 37px;
  text-transform: capitalize;
  /* identical to box height */

  color: #000000;
`;
const TextPrice = styled.text`
  font-family: "Archivo";
  font-style: normal;
  font-weight: 400;
  font-size: 29px;
  line-height: 32px;
  /* identical to box height */

  color: #656565;
`;
const WrapperBestSeller = styled.div`
  position: absolute;
  width: 127.4px;
  height: 29.17px;
  left: 417px;
  top: 1440px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 6px;

  background: #ffffff;
`;
const TextBestSeller = styled.text`
  font-family: "Archivo";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 22px;
  text-transform: capitalize;

  color: #000000;
`;

const Main = () => {
  const [value, setCheckbox] = useState(true);

  return (
    <>
      <WrapperHeader>
        <WrapperTitleCategory>
          <TitleCategory>Photography /</TitleCategory>
          <TitleCategory style={{ color: "#9B9B9B", fontWeight: "400" }}>
            Premium Photos
          </TitleCategory>
        </WrapperTitleCategory>
        <WrapperSortProducts>
          <TitleSorts>Price</TitleSorts>
        </WrapperSortProducts>
      </WrapperHeader>

      <Row>
        <ColumnCheckboxes>
          {/* <Checkbox>
            
          </Checkbox> */}
          {/* <WrapperCheckbox>
            <input
              type="checkbox"
              id="coding"
              name="interest"
              value="coding"
              checked
            ></input>
          </WrapperCheckbox> */}
          <WrapperCheckbox>
          <Checkbox
              label="value"
              value={value}
              checked={value}
              onChange={({ target }) => setCheckbox(!value)}
            />
          </WrapperCheckbox>

          {/*  <Checkbox
              label="value"
              value={value}
              checked={value}
              onChange={({ target }) => setCheckbox(!value)}
            /> */}
          {/* <Checkbox>1</Checkbox> */}
        </ColumnCheckboxes>
        <GridProducts>
          <CardProduct>
            <ImgProduct src="/images/red-bench.png" alt="product" />
            <ButtonCart>add to cart</ButtonCart>
            <WrapperText>
              <TextCategory>people</TextCategory>
              <TextProduct>red bench</TextProduct>
              <TextPrice>&#36;3.89</TextPrice>
            </WrapperText>
          </CardProduct>
          <CardProduct>
            <ImgProduct src="/images/red-bench.png" alt="product" />
            <ButtonCart>add to cart</ButtonCart>
            <WrapperText>
              <TextCategory>people</TextCategory>
              <TextProduct>red bench</TextProduct>
              <TextPrice>&#36;3.89</TextPrice>
            </WrapperText>
          </CardProduct>
          <CardProduct>
            <ImgProduct src="/images/red-bench.png" alt="product" />
            <ButtonCart>add to cart</ButtonCart>
            <WrapperText>
              <TextCategory>people</TextCategory>
              <TextProduct>red bench</TextProduct>
              <TextPrice>&#36;3.89</TextPrice>
            </WrapperText>
          </CardProduct>
          <CardProduct>
            <WrapperBestSeller>
              <TextBestSeller>best seller</TextBestSeller>
            </WrapperBestSeller>
            <ImgProduct src="/images/red-bench.png" alt="product"></ImgProduct>
            <ButtonCart>add to cart</ButtonCart>
            <WrapperText>
              <TextCategory>people</TextCategory>
              <TextProduct>red bench</TextProduct>
              <TextPrice>&#36;3.89</TextPrice>
            </WrapperText>
          </CardProduct>
          <CardProduct>
            <ImgProduct src="/images/red-bench.png" alt="product" />
            <ButtonCart>add to cart</ButtonCart>
            <WrapperText>
              <TextCategory>people</TextCategory>
              <TextProduct>red bench</TextProduct>
              <TextPrice>&#36;3.89</TextPrice>
            </WrapperText>
          </CardProduct>
          <CardProduct>
            <ImgProduct src="/images/red-bench.png" alt="product" />
            <ButtonCart>add to cart</ButtonCart>
            <WrapperText>
              <TextCategory>people</TextCategory>
              <TextProduct>red bench</TextProduct>
              <TextPrice>&#36;3.89</TextPrice>
            </WrapperText>
          </CardProduct>
        </GridProducts>
      </Row>
    </>
  );
};

export default Main;
