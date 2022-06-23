import React from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import Header2 from "../components/Header2";
import Main from "../components/Main";

const Container = styled.div`
 /*  display: flex;
  flex-direction: column; */
  position: relative;
  width: 1440px;
  height: 2716px;
  background: #ffffff;
  margin: auto;
  /* background: #BA1A1A; */
`;

const Line = styled.hr`
  margin-left: 92px; 
  width: 1281px;
  border: 2px solid #e4e4e4;
`;
const Home = () => {
  return (
    <Container>
      <Navbar />
      <Line />
      <Header2 />
     {/*  <Line /> */}
      {/* <Main/> */}
    </Container>
  );
};

export default Home;
