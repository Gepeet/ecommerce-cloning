import React from 'react'
import SendIcon from '@mui/icons-material/Send';
import styled from 'styled-components'

const Container = styled.div`
background-color: lightsteelblue;
height: 50vh;
width: 100vw;
margin: 30px 0;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
const Title = styled.h1`
font-size: 70px;
`
const Description = styled.p`
font-size: 25px;
margin: 20px;
`
const InputContainer = styled.div`
border: 1px solid lightgray;
width: 30%;
display: flex;
justify-content: space-between;
`
const Input = styled.input`
flex: 8;
border: none;
padding-left: 10px;

`
const Button = styled.button`
flex: 1;
border: none;
background-color: lightgreen;
color: white;
padding: 4px;
cursor: pointer;
`



const NewsLetter = () => {
    return (
        <Container>
            <Title>Newsletter</Title>
            <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, voluptas?</Description>
            <InputContainer>
                <Input placeholder="Your Email"/>
                <Button>
                    <SendIcon/>
                </Button>
            </InputContainer>
        </Container>
    )
}

export default NewsLetter
