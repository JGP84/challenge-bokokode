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
  display: flex;
`;

const ColumnCheckboxes = styled.div`
  display: flex;
  flex-direction: column;
`;
const Checkbox = styled.div`
  display: flex;
  flex-direction: column;
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
          <Checkbox></Checkbox>
          <Checkbox></Checkbox>
        </ColumnCheckboxes>
        <GridProducts></GridProducts>
      </Row>
    </>
  );
};

export default Main;
