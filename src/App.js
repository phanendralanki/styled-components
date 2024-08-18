import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { ThemeProvider } from "styled-components";
import Navbar from "./components/navbar/Navbar";
// import Hero from "./components/heroSection/Hero";
// import InfoBoxes from "./components/services/InfoBoxes";
import { useState } from "react";

const GlobalStyles = createGlobalStyle`
    *{
     margin: 0;
     padding: 0;
    }
    body{
    background-color: ${(props) => props.theme.colors.bgDefault};
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
    font-family: 'Roboto',sans-serif;
  }
`;

const Container = styled.div`
  background-color: white;
  height: 100vh;
`;

const theme = {
  colors: {
    primary: "darkBlue",
    secondary: "tomato",
    light: "black",
    text: "snow",
    textDark: "gray",
    bgDefault: "white",
    bgPrimary: "darkBlue",
    bgSecondary:"darkBlue",
    bgLight: "aliceBlue",
    hoverColor:"aliceBlue",
  },
};

const darkTheme = {
  colors: {
    primary: "white",
    secondary: "tomato",
    light: "yellow",
    text: "snow",
    textDark: "gray",
    bgDefault: "black",
    bgPrimary: "black",
    bgSecondary:"black",
    bgLight: "aliceBlue",
    // hoverColor:"darkBlue",
  },
};

function App() {
  const [mode,setMode] = useState(false);
  return (
    <ThemeProvider theme={mode ? darkTheme: theme}>
      <GlobalStyles />
      <Container>
        <Navbar setMode={setMode} mode={mode} />
        {/* <Hero /> */}
        {/* <InfoBoxes /> */}
      </Container>
    </ThemeProvider>
  );
}

export default App;
