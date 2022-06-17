import React from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import Header from "../components/Header";

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
 
  margin-bottom: 58px;
  margin-left: 92px; 
  width: 1281px;
  

  border: 2px solid #e4e4e4;
`;
const Home = () => {
  return (
    <Container>
      <Navbar />
      <Line />
      <Header />
    </Container>
  );
};

export default Home;
