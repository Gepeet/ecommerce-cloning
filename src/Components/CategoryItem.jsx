import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    height: 300px;
    width: 150px;
    background: blue;
`

const CategoryItem = (props) => {
    return (
        <Container id={props.id}>
           
            {props.title}
        </Container>
    )
}

export default CategoryItem
