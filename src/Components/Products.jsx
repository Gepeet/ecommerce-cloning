import React from 'react'
import styled from 'styled-components';
import { ProductData } from '../Dummy Data/ProductData';
import ProductsItem from './ProductsItem';


const Container = styled.div`
    width: 100%;
    background: whitesmoke;
    align-items: center;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
`

const Products = () => {
    return (
        <Container>
            {ProductData.map(data=>(
                <ProductsItem
                key={data.id}
                data={data}/>
            ))}
            
        </Container>
    )
}

export default Products
