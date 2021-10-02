import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
height: 100vh;
background: 
url("https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80");

`
const Wrapper = styled.div`
display: flex;
flex-direction: column;
background-color: white;
padding: 4%;
`
const Title = styled.h1``

const Form = styled.form`
max-width: 400px;
margin: 20px 0;
display: flex;
flex-direction: row;
flex-wrap: wrap;
`
const Input = styled.input`
flex: 1;
min-width: 40%;
padding: 10px;
margin: 20px 10px 0 0;
`
const Button = styled.button`
/* justify-self: center; */
align-self: center;
padding: 10px 30px;
margin: 20px 10px 0 0 ;
background-color: white;
border: 2px solid teal;
cursor: pointer;
font-size: 15px;

&:hover{
    background-color: teal;
    color: white;
}
`

const Agreement = styled.p`
text-align: left;
`


const Link = styled.a`
cursor: pointer;
margin: 5px 0;
text-align: left;
text-decoration: underline;
`


const Registration = () => {
    return (
        <Container>
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form>
                    <Input placeholder="Name"/>
                    <Input placeholder="Surname"/>
                    <Input placeholder="Username"/>
                    <Input placeholder="Email"/>
                    <Input placeholder="Password"/>
                    <Input placeholder="Confirm Password"/>
                    <Agreement>By creating an account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b></Agreement>
                    <Button>CREATE</Button>
                    
                </Form>
                <Link>CAN'T REMEMBER YOUR PASSWORD?</Link>
                <Link>CREATE NEW ACCOUNT</Link>
            </Wrapper>
            
        </Container>
    )
}

export default Registration
