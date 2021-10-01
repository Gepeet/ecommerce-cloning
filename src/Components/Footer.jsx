import { Facebook, Instagram, Pinterest, Twitter } from '@mui/icons-material'
import React from 'react'
import styled from "styled-components"

const Container = styled.div`
display: flex;
background-color: white;
`
const Left = styled.div`
padding:10px 30px;
flex: 1;
`
const Logo = styled.h1``

const Desc = styled.p`
margin: 20px 0;

`

const SocialContainer = styled.div`
display: flex;
flex-direction: row;
width: 100%;
justify-content:center;
`
const SocialIcon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
color:white;
background-color: #${props=>props.color};
margin:20px 10px;
`

const Center = styled.div`
flex: 1;
`

const Title = styled.h3`
`

const List = styled.ul`
`

const ListItem = styled.li``

const Right = styled.div`
flex: 1;
`



const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>VEN ECOM</Logo>
                <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, ex culpa iste odit non quas! Consequuntur amet praesentium possimus, error minus quos deserunt pariatur debitis suscipit sapiente accusantium nihil earum non est iste, perspiciatis impedit. Voluptates impedit nemo aliquam dolorem!</Desc>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <Instagram/>
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <Twitter/>
                    </SocialIcon>
                    <SocialIcon color="E60023">
                        <Pinterest/>
                    </SocialIcon>
                    
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>

            </Center>
            <Right></Right>
        </Container>
    )
}

export default Footer
