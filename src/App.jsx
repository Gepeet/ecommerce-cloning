import styled from "styled-components";
import Home from "./Pages/Home";
import './App.css';
import ProductList from "./Pages/ProductList";
import Product from "./Pages/Product";
import Registration from "./Pages/Registration";
import Login from "./Pages/Login";
import Cart from "./Pages/Cart";



const Container = styled.div`
  
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`

const App = () => {
  return <Container>
    <Cart/>
  </Container>;
};

export default App;