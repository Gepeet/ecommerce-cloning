import React from 'react'
import styled from 'styled-components';
import CategoryItem from './CategoryItem';
import { CategoriesData } from '../Dummy Data/CategoriesData';

const Container = styled.div`
    display: flex;
`


const Categories = () => {
    return (
        <Container>
            {CategoriesData.map((data)=>(
            <CategoryItem
            id={data.id}
            title={data.title}
            img={data.img}/>
            ))}
        </Container>
    )
}

export default Categories
