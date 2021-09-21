import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100vw;
    height: 60px;
    background-color:white;
    color: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 50px;

`

const Wrapper = styled.div`
    /* background-color: aqua; */
    width: 100%;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Left = styled.div`
    /* flex: 1; */
`
const Center = styled.div`
    /* flex: 1; */
`
const Right = styled.div`
    /* flex: 1; */
`

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>Left</Left>
                <Center>Center</Center>
                <Right>Right</Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
