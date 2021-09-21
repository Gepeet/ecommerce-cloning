import styled from "styled-components";
import Home from "./Pages/Home";
import './App.css';

const Container = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`

const App = () => {
  return <Container>
    <Home/>
  </Container>;
};

export default App;