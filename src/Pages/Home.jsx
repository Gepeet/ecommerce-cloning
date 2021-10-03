import React from 'react'
import styled from 'styled-components'
import Announcement from '../Components/Announcement'
import Categories from '../Components/Categories'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import NewsLetter from '../Components/NewsLetter'
import Products from '../Components/Products'
import Slider from '../Components/Slider'

const Container = styled.div`
 /* width: 20%; */
 overflow: hidden;
`

const Home = () => {
    return (
        <Container>
            <Announcement/>
            <Navbar/>
            <Slider/>
            <Categories/>
            <Products/>
            <NewsLetter/>
            <Footer/>
        </Container>
    )
}

export default Home
