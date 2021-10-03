import { Add, Remove } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import Announcement from '../Components/Announcement'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import NewsLetter from '../Components/NewsLetter'
import { mobile } from '../Responsive'

const Container = styled.div``

const Wrapper = styled.div`
display: flex;
width: 100vw;
${mobile({flexDirection:"column"})}
`
const ImgContainer = styled.div`
flex:1;
padding: 50px;
`
const Image = styled.img`
width: 100%;
height: 70vh;
object-fit: contain;
`
const InfoContainer = styled.div`
flex: 1;
padding: 50px;
`
const Title = styled.h1`
font-size: 40px;
font-weight: 200;
`
const Desc = styled.p`
margin:20px 0;
`
const Price = styled.h3`
font-size: 40px;
`

const FilterContainer = styled.div`
margin: 50px 0;
display: flex;
/* align-items: left; */
justify-content: left;
/* background-color: blue; */
${mobile({flexDirection:"column"})}
`
const Filter = styled.div`
margin-right: 50px;
display: flex;
align-items: center;
${mobile({marginBottom:"20px"})}
`
const FilterTitle = styled.h3`
font-size: 20px;
margin-right: 30px;
`
const FilterColor = styled.div`
height: 30px;
width: 30px;
border-radius: 50%;
cursor: pointer;
background-color: ${props=>props.color};
margin: 0 10px;
${mobile({width:"20px", height:"20px"})}
`

const FilterSize = styled.select`
padding: 5px 10px;
`
const FilterOption = styled.option``

const AddContainer = styled.div`
display: flex;
width: 50%;
align-items: center;
justify-content: center;
margin: 30px 0;
${mobile({width:"100%",flexDirection:"column"})}

`
const AmountContainer = styled.div`
display: flex;
font-size: 20px;
align-items: center;
/* justify-content: center; */
/* margin-right: 50px; */
${mobile({marginBottom:"40px"})}
`
const Amount = styled.h3`
margin: 0 10px;
width: 40px;
height: 40px;
display: flex;
justify-content: center;
align-items:center;
border-radius: 10px;
border: 1px solid lightgray;
`

const Button = styled.button`
padding: 15px 30px;
border:2px solid teal;
border-radius: 10px;
color: black;
font-weight: 700;
cursor: pointer;
${mobile({width:"100%"})}

&:hover{
    background-color: teal;
    color: white;
}
`


const Product = () => {
    return (
        <Container>
            <Navbar/>
            <Announcement/>
                <Wrapper>
                    <ImgContainer>
                        <Image src="https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2143&q=80"/>
                    </ImgContainer>
                    <InfoContainer>
                        <Title>Vans</Title>
                        <Desc>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum cum tempore quo voluptatum sed molestias distinctio inventore a voluptate exercitationem autem officiis, odio placeat velit harum id voluptatibus modi at.</Desc>
                        <Price>P2,500</Price>
                        <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color="black"/>
                            <FilterColor color="darkblue"/>
                            <FilterColor color="gray"/>
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize>
                                <FilterOption>Small</FilterOption>
                                <FilterOption>Medium</FilterOption>
                                <FilterOption>Large</FilterOption>
                                <FilterOption>XL</FilterOption>
                                <FilterOption>XXL</FilterOption>
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove style={{cursor:'pointer'}}/>
                            <Amount>1</Amount>
                            <Add style={{cursor:'pointer'}}/>
                        </AmountContainer>
                        <Button>ADD TO CART</Button>
                    </AddContainer>
                    </InfoContainer>
                    
                </Wrapper>
            <NewsLetter/>
            <Footer/>
        </Container>
    )
}

export default Product
