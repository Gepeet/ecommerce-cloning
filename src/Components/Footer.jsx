import { Email, Facebook, Instagram, Phone, Pinterest, Room, Twitter } from '@mui/icons-material'
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
cursor: pointer;
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
padding:10px 30px;
`

const Title = styled.h3`
font-size: 25px;
margin-bottom: 20px;
`

const List = styled.ul`
width: 100%;
align-items: baseline;
max-height: 250px;
flex-wrap: wrap;
list-style: none;
display: flex;
flex-direction: column;
`

const ListItem = styled.li`
margin: 10px 0;
cursor: pointer;
`

const Right = styled.div`
flex: 1;
display: flex;
flex-direction: column;
/* justify-content: center; */
align-items: flex-start;
padding:10px 30px;
`

const ContactItem = styled.div`
margin: 10px 0;
display: flex;
align-items: center;
justify-content: flex-start;
width: 100%;
/* background-color: firebrick; */
`

const Payment = styled.img`
width: 50%;
margin-top: 10px;
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
            <Right>
                <Title>Contact</Title>
                <ContactItem><Room style={{marginRight:'10px'}}/>Unit 7 Aprtment, JP Rizal San Juan City</ContactItem>
                <ContactItem><Phone style={{marginRight:'10px'}}/>0906-006-5955</ContactItem>
                <ContactItem><Email style={{marginRight:'10px'}}/>venecom@email.com</ContactItem>
                <Payment src="https://t4.ftcdn.net/jpg/04/16/93/07/360_F_416930739_UeumuMO5QhZOXIAc09s7gz6JSPT97duS.jpg"/>
            </Right>
        </Container>
    )
}

export default Footer
