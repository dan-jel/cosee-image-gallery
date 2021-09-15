import React from "react";
import styled from "styled-components";

const Header = ({ setInputForm }) => {
  return (
    <Container>
      Cosee Image Gallery
      <Line />
      <InputButton onClick={() => setInputForm(true)}>
        <p>+</p>
      </InputButton>
    </Container>
  );
};

const InputButton = styled.div`
  height: 50px;
  width: 50px;
  background: #a2d2ff;
  text-align: center;
  border-radius: 100%;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  :hover {
    cursor: pointer;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);
  }
  p {
    font-size: 2rem;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    margin: 0;
  }
`;

const Container = styled.div`
  width: 100%;
  text-align: center;
  font-size: 2rem;
  align-items: center;
  font-family: "Poller One", cursive;
`;

const Line = styled.div`
  height: 3px;
  width: 80%;
  background: black;
  position: relative;
  left: 10%;
  margin: 10px;
`;

export default Header;
