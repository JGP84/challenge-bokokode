import React from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import Header2 from "../components/Header2";
import Main from "../components/Main";
import useFetch from "../useFetch";

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

  const { data: data, loading, error, refetch } = useFetch(
    "https://technical-frontend-api.bokokode.com/api/products"
  );

  if (loading) return <h1> LOADING...</h1>;

  if (error) console.log(error);



  return (


    
    <Container>
       <h1>
        {data.data.data[0].name}
      </h1>

      <button onClick={refetch}> Refetch</button>

     {/*  <Navbar />
      <Line /> */}
     {/*  <Header2 /> */}
     {/*  <Line /> */}
      {/* <Main/> */}
    </Container>
  );
};

export default Home;
