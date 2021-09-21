import React from 'react'
import styled from 'styled-components';

const Info = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    opacity: 0;
    width: 100%;
    height: 100%;
    background: #80ff0094;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: opacity .5s ease ;
`

const Container = styled.div`
    /* flex: 1; */
    width: 500px;
    height: 30vh;
    margin: 10px;
    position: relative;

    &:hover ${Info}{
        opacity: 1;
    }
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`



const Title = styled.h3`
    color: white;
    font-weight: 700;
    font-size: 40px;
`

const Description = styled.p`
    margin: 20px 0;
    color: white;
    font-weight: 400;
    font-size: 25px;
`

const Button = styled.button`
    padding: 10px 20px;
    border-radius: 10px;
    border: none;
    background: wheat;
    font-weight: 700;
    cursor: pointer;

`



const ProductsItem = ({data}) => {
    return (
        <Container>
            <Image src={data.img}/>
                <Info>
                    <Title>{data.title}</Title>
                    <Description>{data.description}</Description>
                    <Button>BUY NOW</Button>
                </Info>
           
        </Container>
    )
}

export default ProductsItem
