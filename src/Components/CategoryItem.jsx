import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    flex: 1;
    overflow: hidden;
    width: 100%;
    max-height: 50vh;
    margin: 5px;
    display: flex;
    flex-direction: column;
    position: relative;
    /* justify-content: center; */
    /* align-items: center;  */
    
`

const Image = styled.img`
    /* flex: 1; */
    width: 100%;
    height: 100%;
    object-fit: cover;
`

const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #ffff0040;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const Title = styled.h2`
    color: white;
    margin: 20px 0;

`

const Button = styled.button`
    border: none;
    padding:10px 20px;
    cursor: pointer;
    font-weight: 600;
`

const CategoryItem = ({data}) => {
    return (
        <Container>
            <Image src={data.img}/>
            <Info>
                <Title>{data.title}</Title>
                <Button>SHOP NOW</Button>
            </Info>
            
        </Container>
    )
}

export default CategoryItem
