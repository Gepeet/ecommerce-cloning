import React from 'react';
import styled from 'styled-components';
// import SearchIcon from '@mui/icons-material/Search';
import Search from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import { ShoppingBagOutlined } from '@mui/icons-material';

const Container = styled.div`
    overflow: hidden;
    width: 100%;
    /* height: 60px; */
    background-color:white;
    color: black;
    /* display: flex; */
    /* flex-direction: column; */
    /* justify-content: center;
    align-items: center; */
    /* padding: 0 50px; */

`

const Wrapper = styled.div`
    /* background-color: aqua; */
    /* width: 100%; */
    padding: 10px 20px;
    display: flex;
    /* align-items: center; */
    justify-content: space-between;
`

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`

const Language = styled.span`

`

const SearchContainer = styled.div`
    margin-left: 20px;
    display: flex;
    align-items: center;
    border: gray 1px solid;
    background-color: white;
    border-radius: 5px;
    padding: 2px 2px;
`

const Input = styled.input`
    border: none;
    outline: none;
    padding: 5px 5px;
`
const Center = styled.div`
    flex: 1;
    text-align: center;
`

const Logo = styled.h1`
    font-weight: 400;
    font-size: 30px;
    cursor: pointer;
`
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-around;
`

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
`

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>
                        EN
                    </Language>
                    <SearchContainer>
                        <Input/>
                        <Search style={{color:'gray', fontSize:'20px'}}/>
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>Ven Ecom</Logo>
                </Center>
                <Right>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>LOG IN</MenuItem>
                    <MenuItem>
                        <Badge badgeContent={4} color="primary">
                            <ShoppingBagOutlined/>    
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
