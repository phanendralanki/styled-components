npm install styled-components 


extensions useful : 
1.es7 react/redux/graphql
2.prettier
3.vscode-styled-components (by styled components)

Example Code:
-----------------------------------------
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { ThemeProvider } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body{
    background-color: ${(props) => props.theme.colors.default};
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

    *{
      font-family: 'Roboto',sans-serif;
    }
  }
`;

const Container = styled.div`
  background-color: white;
  /* height: 100vh; */
  display: flex;
  flex-direction: row;
`;


const Title = styled.h1`
  color:${(props) => props.theme.colors.secondary};
`;

const Description = styled.p`
  color: ${(props) => props.theme.colors.secondary}
`;

/*** Theme */
const theme = {
  colors:{
    primary:'darkBlue',
    secondary:'tomato',
    default:'white'
  },
};



function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Container className="App">
          <Title>Styled components</Title>
          <Description>Lets Learn Styled components</Description>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;

