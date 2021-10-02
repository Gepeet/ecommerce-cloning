import React from 'react'
import styled from 'styled-components'
import Announcement from '../Components/Announcement'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'

const Container = styled.div``
const Wrapper = styled.div`
padding:20px;
`
const Title = styled.h1`
font-size: 40px;
font-weight: 500;
text-align: center;
`
const Top = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
margin: 20px 0;
`
const TopButton = styled.button`
font-size: 18px;
padding: 14px 25px;
border:${(props)=> props.type ==="filled" && "none"}  ;
color:${(props)=> props.type === "filled" ? "white" : "black"} ;
background-color: ${(props)=> props.type === "filled" ? "black" : "transparent"};
font-weight: 500;
cursor: pointer;
`
const TopTexts = styled.div``
const TopText = styled.span``


const Bottom = styled.div``


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
                    <Bottom></Bottom>
                </Wrapper>
            <Footer/>
        </Container>
    )
}

export default Cart
