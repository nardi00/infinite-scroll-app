import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 30px 60px;
  border-bottom: 1px solid black;
`;

const Title = styled.h1`
  font-family: "Playfair Display", serif;
  font-size: 30px;
`;

export default function Header() {
  return (
    <Container>
      <Title>Pics</Title>
    </Container>
  );
}
