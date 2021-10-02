import React from 'react'
import styled from 'styled-components'
import Announcement from '../Components/Announcement'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import NewsLetter from '../Components/NewsLetter'
import Products from '../Components/Products'

const Container = styled.div`

`
const Title = styled.h1`
margin:20px;
`
const FilterContainer = styled.div`
display: flex;
justify-content: space-between;

`
const Filter = styled.div`
margin: 20px;
`

const FilterText = styled.span`
font-size: 20px;
font-weight: 600;
`

const Select = styled.select`
padding: 5px;
margin-left: 10px;
`
const Option = styled.option``
const ProductList = () => {
    return (
        <Container>
            <Navbar/>
            <Announcement/>
            <Title>Dresses</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products:</FilterText>
                    <Select>
                        <Option disabled selected>Color</Option>
                        <Option>White</Option>
                        <Option>Green</Option>
                        <Option>Yellow</Option>
                        <Option>Blue</Option>
                        <Option>Orange</Option>
                        <Option>Black</Option>
                    </Select>
                    <Select>
                        <Option disabled selected>Size</Option>
                        <Option>Small</Option>
                        <Option>Medium</Option>
                        <Option>Large</Option>
                        <Option>XL</Option>
                        <Option>XXL</Option>
                        
                    </Select>
                    </Filter>
                <Filter>
                    <FilterText>Sort Products:</FilterText>
                    <Select>
                        <Option disabled selected>Price</Option>
                        <Option>P100 - P1,000</Option>
                        <Option>P1,001 - P2,000</Option>
                        <Option>P2,001 - P3,000</Option>
                        <Option>P3,001 - onwards</Option>
                        
                        
                    </Select>
                    </Filter>
            </FilterContainer>
            <Products/>
            <NewsLetter/>
            <Footer/>
        </Container>
    )
}



export default ProductList
