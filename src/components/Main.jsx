import React from "react";
import styled from "styled-components";

const WrapperHeader = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1266px;
  margin-left: 97px;
  margin-top: 68px;
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
  background: blue;
`;

const ColumnCheckboxes = styled.div`
  display: flex;
  flex-direction: column;
`;
const Checkbox = styled.div`
  max-width: 327px;
  display: flex;
  flex-direction: column;
  background: red;
`;

const GridProducts = styled.div`
  display: grid;
  /* grid-template-columns: repeat(3, 1fr); */
  grid-template-columns: repeat(auto-fill, minmax(283.02px, 1fr));
  gap: 48px; 
  
`;

const CardProduct = styled.div` 
width: 283.02px;
height: 514px;
background-color: green;
color: white;
font-size: 32px;
text-align: center;
`

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
          <Checkbox>3</Checkbox>
          <Checkbox>3</Checkbox>
        </ColumnCheckboxes>
        <GridProducts>
        <CardProduct>1</CardProduct>
        <CardProduct>2</CardProduct>
        <CardProduct>3</CardProduct>
        <CardProduct>4</CardProduct>
        <CardProduct>5</CardProduct>
        <CardProduct>6</CardProduct>
        </GridProducts>
      </Row>
    </>
  );
};

export default Main;
