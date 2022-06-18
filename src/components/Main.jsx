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
          <Checkbox>3</Checkbox>
          <Checkbox>3</Checkbox>
        </ColumnCheckboxes>
        <GridProducts></GridProducts>
      </Row>
    </>
  );
};

export default Main;
