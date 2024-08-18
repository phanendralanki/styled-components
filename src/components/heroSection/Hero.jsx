import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  height: 90%;

  //for mobile
  @media only screen and (max-width:600px){
    height: 60%;
  }

  //for tablets
  @media only screen and (min-width:600px){
    height: 55%;
  }


  //for desktop
  @media only screen and (min-width:992px){
    height: 80%;
  }

`;

// Left div Styling
const Left = styled.div`
  width: 60%;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;


  @media only screen and (max-width:600px){
    width: 50%;
  }

  @media only screen and (min-width:600px){
    width: 100%;
  }

  @media only screen and (min-width:992px){
    width: 60%;
  }

`;

const Title = styled.div`
  width: 90%;
  font-size: 40px;
  font-weight: bold;
  color: darkblue;
  text-align: center;


  @media only screen and (max-width:600px){
    width: 100%;
    font-size: 30px;
  }

  @media only screen and (min-width:600px){
    width: 85%;
  }

  @media only screen and (min-width:992px){
    width: 85%;
  }



`;

const Description = styled.p`
  width: 70%;
  font-size: 20px;
  color: gray;
`;

// Ṛight Div Styling
const Right = styled.div`
  width: 40%;
  background-color: white;
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  width: 500px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  margin-top: 5px;
`;

const Button = styled.button`
  font-weight: bold;
  color: white;
  background-color: darkblue;
  margin-left: 5px;
  padding: 15px 30px;
  cursor: pointer;
  border: 2px solid darkblue;
  border-radius: 10px;
  background: linear-gradient(to right, aliceblue 50%, darkblue 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all 0.5s ease-out;
  &:hover {
    color: darkblue;
    border: 2px solid blue; 
    background-position: left bottom;
    cursor: pointer;
  }
`;

const Hero = () => {
  return (
    <Container>
      <Left>
        <Title>Product Management - Support and Services for Everyone!</Title>
        <Description>
          This is a product which manages your project and builds a good
          communication with customers, so that you can build your project
          according to the requirements of the customer.
        </Description>
        <ButtonsContainer>
          <Button>About Us</Button>
          <Button>Contact Us</Button>
        </ButtonsContainer>
      </Left>
      <Right>
        <Image src="https://www.orientsoftware.com/Themes/Content/Images/blog/2022-12-19/it-support-and-services.jpg" />
      </Right>
    </Container>
  );
};

export default Hero;
