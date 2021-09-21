import React from 'react'
import styled from 'styled-components';
import CategoryItem from './CategoryItem';
import { CategoriesData } from '../Dummy Data/CategoriesData';

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 70vh;
`


const Categories = () => {
    return (
        <Container>
            {CategoriesData.map(data=>(
            <CategoryItem
            data={data}/>
            ))}
        </Container>
    )
}

export default Categories
