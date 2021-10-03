import { Add, Remove } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import Announcement from '../Components/Announcement'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import { mobile } from '../Responsive'

const Container = styled.div`
width: 100vw;
`
const Wrapper = styled.div`
padding:20px;
`
const Title = styled.h1`
font-size: 40px;
font-weight: 500;
text-align: center;
${mobile({fontSize:"25px"})}
`
const Top = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
margin: 20px 0;
${mobile({flexDirection:"column"})}
`
const TopButton = styled.button`
font-size: 18px;
padding: 14px 25px;
border:${(props)=> props.type ==="filled" && "none"}  ;
color:${(props)=> props.type === "filled" ? "white" : "black"} ;
background-color: ${(props)=> props.type === "filled" ? "black" : "transparent"};
font-weight: 500;
cursor: pointer;
${mobile({fontSize:"15px" , padding:"10px 15px"})}
`
const TopTexts = styled.div`
${mobile({margin:"15px 0"})}
`
const TopText = styled.span``


const Bottom = styled.div`
display: flex;
justify-content: space-between;
/* width: 100; */
${mobile({flexDirection:"column"})}
`
const Info = styled.div`
flex: 3;
`
const Product=styled.div`
    display: flex;
    justify-content: space-between;
`
const ProductDetails = styled.div`
    flex: 2;
    display: flex;
`
const Image = styled.img`
    width: 200px;
    ${mobile({width:"50px", height:"60px"})}
`

const Details = styled.div`
padding: 20px;
display: flex;
flex-direction: column;
justify-content: space-around;
${mobile({padding:"0 10px", fontSize:"14px"})}
`
const ProductName = styled.span`
    
`
const ProductID = styled.span`
    
`
const ProductSize = styled.span`
    
`
const ProductColorContainer = styled.div`
    display: flex;
    align-items: center;
`

const ProductColor = styled.div`
background-color:${props=>props.color};
height: 30px;
width: 30px;
border-radius: 50%;
border: none;
margin-left: 20px;
${mobile({width:"15px",height:"15px"})}
`
const PriceDetails = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`


const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    /* flex-direction:column; */
`
const ProductAmount = styled.div`
font-size: 24px;
margin: 5px;
${mobile({fontSize:"15px"})}
`
const ProductPrice = styled.div`
font-size: 30px;
font-weight: 200;
${mobile({fontSize:"20px"})}
`

const HR = styled.hr`
background-color: black;
height: 1px;
margin: 20px 0;
`


const Summary = styled.div`
flex: 1;
/* display: flex;
flex-direction: column; */
height: max-content;
border: 0.5px solid lightgray;
padding: 20px 20px;
margin: 10px;
`

const SummaryItemPrice = styled.span``
const SummaryItemText = styled.span`

`
const SummaryItem = styled.div`
display: flex;
justify-content: space-between;
margin: 30px 0;
font-weight: ${props=>props.type === "total" && "500px"};
font-size: ${props=>props.type === "total" && "24px"};
`
const Button = styled.button`
cursor: pointer;
border: none;
width: 100%;
background-color: black;
color: white;
font-weight: 500;
font-size: 20px;
padding: 10px 20px;
`
const SummaryTitle = styled.h1``


const Cart = () => {
    return (
        <Container>
            <Navbar/>
            <Announcement/>
                <Wrapper>
                    <Title>Your Cart</Title>
                    <Top>
                        <TopButton type="">CONTINUE SHOPPING</TopButton>
                        <TopTexts>
                            <TopText>Shopping Bag (2)</TopText>
                            <TopText>Your Wishlist (0)</TopText>
                        </TopTexts>
                        <TopButton type="filled">CHECKOUT NOW</TopButton>
                    </Top>
                    <Bottom>
                        <Info>
                            <Product>
                                <ProductDetails>
                                    <Image src="https://images.unsplash.com/photo-1543508282-6319a3e2621f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=715&q=80"></Image>
                                    <Details>
                                        <ProductName><b>Product:</b> NIKE</ProductName>
                                        <ProductID><b>ID:</b> 65165132121</ProductID>
                                        <ProductColorContainer><b>COLOR:</b>
                                            <ProductColor color="black"></ProductColor>
                                        </ProductColorContainer>
                                        <ProductSize><b>Size:</b> 10.5</ProductSize>
                                    </Details>
                                </ProductDetails>
                                <PriceDetails>
                                    <ProductAmountContainer>
                                        <Add/>
                                        <ProductAmount>2</ProductAmount>
                                        <Remove/>
                                    </ProductAmountContainer>
                                    <ProductPrice>P2,500</ProductPrice>
                                </PriceDetails>
                            </Product>
                            <HR/>
                            <Product>
                                <ProductDetails>
                                    <Image src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=764&q=80"></Image>
                                    <Details>
                                        <ProductName><b>Product:</b> NIKE</ProductName>
                                        <ProductID><b>ID:</b> 65165132121</ProductID>
                                        <ProductColorContainer><b>COLOR:</b>
                                            <ProductColor color="limegreen"></ProductColor>
                                        </ProductColorContainer>
                                        <ProductSize><b>Size:</b> 12.5</ProductSize>
                                    </Details>
                                </ProductDetails>
                                <PriceDetails>
                                    <ProductAmountContainer>
                                        <Add/>
                                        <ProductAmount>1</ProductAmount>
                                        <Remove/>
                                    </ProductAmountContainer>
                                    <ProductPrice>P2,500</ProductPrice>
                                </PriceDetails>
                            </Product>
                        </Info>
                        <Summary>
                            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                            <SummaryItem>
                                <SummaryItemText>Subtotal</SummaryItemText>
                                <SummaryItemPrice>P2,500</SummaryItemPrice>
                            </SummaryItem>
                            <SummaryItem>
                                <SummaryItemText>Estimated Shipping</SummaryItemText>
                                <SummaryItemPrice>P500</SummaryItemPrice>
                            </SummaryItem>
                            <SummaryItem>
                                <SummaryItemText>Shipping Discount</SummaryItemText>
                                <SummaryItemPrice>P100</SummaryItemPrice>
                            </SummaryItem>
                            <SummaryItem type="total">
                                <SummaryItemText>Total</SummaryItemText>
                                <SummaryItemPrice>P2,900</SummaryItemPrice>
                            </SummaryItem>
                            <Button>CHECKOUT NOW</Button>
                        </Summary>
                    </Bottom>
                </Wrapper>
            <Footer/>
        </Container>
    )
}

export default Cart
