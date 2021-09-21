import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    background-color: teal;
    text-align: center;
    padding: 5px 0;
    color: white;
    overflow: hidden;
`
    

const Announcement = () => {
    return (
        <Container>
            Shop now to get more discounts!!
        </Container>
    )
}

export default Announcement
