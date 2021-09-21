import React from 'react';
import styled from 'styled-components';
// import SearchIcon from '@mui/icons-material/Search';
// import Search from '@mui/icons-material/Search';

const Container = styled.div`
    width: 100vw;
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
    background-color: aqua;
    /* width: 100%; */
    padding: 10px 20px;
    display: flex;
    /* align-items: center; */
    justify-content: space-between;
`

const Left = styled.div`
    flex: 1;
    display: flex;
`

const Language = styled.span`

`

const SearchContainer = styled.div`

`
const Center = styled.div`
    flex: 1;
`
const Right = styled.div`
    flex: 1;
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
                        <input type="text" />
                        {/* <Search/> */}
                    </SearchContainer>
                </Left>
                <Center>Center</Center>
                <Right>Right</Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
