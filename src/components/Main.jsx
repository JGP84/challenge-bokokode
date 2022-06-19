import React from "react";
import styled from "styled-components";

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
  justify-content: end;
  margin-left: 97px;
  /*  background: blue; */
`;

const ColumnCheckboxes = styled.div`
  display: flex;
  flex-direction: column;
`;
const Checkbox = styled.div`
  max-width: 327px;
  display: flex;
  flex-direction: column;
  /* background: red; */
`;

const GridProducts = styled.div`
  display: grid;
  /* grid-template-columns: repeat(3, 1fr); */
  /* grid-template-columns: repeat(auto-fill, minmax(283.02px, 1fr));
  gap: 48px;  */
  grid-template-columns: repeat(3, 283.02px);
  grid-template-rows: repeat(2, 514px);
  column-gap: 48px;
  row-gap: 52.55px;
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

const Main = () => {
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
          <Checkbox></Checkbox>
          <Checkbox></Checkbox>
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
        </GridProducts>
      </Row>
    </>
  );
};

export default Main;
