import React from 'react'
import styled from 'styled-components'
import Announcement from '../Components/Announcement'
import Categories from '../Components/Categories'
import Navbar from '../Components/Navbar'
import Slider from '../Components/Slider'

const Container = styled.div`
 
`

const Home = () => {
    return (
        <Container>
            <Announcement/>
            <Navbar/>
            <Slider/>
            <Categories/>
        </Container>
    )
}

export default Home
