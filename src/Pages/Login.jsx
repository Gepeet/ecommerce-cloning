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
flex-direction: column;
`
const Input = styled.input`
margin: 10px 0;
padding: 10px;
`
const Button = styled.button`
padding: 10px 20px;
margin: 20px;
background-color: white;
border: 2px solid teal;
cursor: pointer;
font-size: 15px;

&:hover{
    background-color: teal;
    color: white;
}
`

const Link = styled.a`
cursor: pointer;
margin: 5px 0;
text-align: center;
text-decoration: underline;
`


const Login = () => {
    return (
        <Container>
            <Wrapper>
                <Title>LOG IN</Title>
                <Form>
                    <Input placeholder="Username"/>
                    <Input placeholder="Password"/>
                    <Button>LOG IN</Button>
                    <Link>CAN'T REMEMBER YOUR PASSWORD?</Link>
                    <Link>CREATE NEW ACCOUNT</Link>
                </Form>

            </Wrapper>
            
        </Container>
    )
}

export default Login
