
import React, {useState} from 'react';
import styled from 'styled-components';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import SliderData from '../Dummy Data/SliderData';


const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    /* background-color: coral; */
    position: relative;
    overflow: hidden;
    
`

const Wrapper = styled.div`
    height: 100%;
    background-color: firebrick;
    display: flex;
    align-items: center;
    transition: all 1.5s ease;
    transform: translateX(${props=>props.index * -100}vw);
`

const ImageContainer = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    flex: 1;
`

const Image = styled.img`
    height: 100%;
    /* width: 100%; */
    flex: 1;
`

const ImageTitle = styled.div`
    flex: 1;
    padding: 50px;
    display: flex;
    flex-direction: column;
`

const Arrow = styled.div`
    z-index:999;
    background: #b4b3b38b;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left:${props=> props.direction === "left" && "10px"};
    right:${props=> props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
`

const Slide = styled.div`
    background-color:${props=>props.bg};
    display: flex;
    /* flex-direction:column; */
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
`

const Title = styled.h1`
    font-size: 70px;
`
const Description = styled.p`
    letter-spacing: 3px;
    font-weight: 600;
    font-size: 20px;
    margin: 50px 0;
`
const Button = styled.button`
    padding: 10px 20px;
    max-width: 200px;
    border-radius: 10px;
    border: none;
    background:teal;
    color: white;
    font-size: 20px;
    cursor: pointer;
`


const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0)
    const handleClick = (direction)=>{
        if(direction === "left"){
            setSlideIndex(slideIndex > 0 ? slideIndex-1 : 4)
        }else{
            setSlideIndex(slideIndex < 4 ? slideIndex +1: 0)
        }
        if(direction === "right"){
            setSlideIndex(slideIndex < 4 ? slideIndex+1 : 0)
        }else{
            setSlideIndex(slideIndex > 0 ? slideIndex -1: 4)
        }
    }
    return (
        <Container>
            
            <Arrow direction = "left" onClick={()=>handleClick("left")}>
                <ArrowBackIosNewOutlinedIcon/>
                
            </Arrow>

            <Wrapper 
            index = {slideIndex}
            translate={slideIndex}>
                {SliderData.map((data)=>(
                <Slide bg={data.bg}>
                    <ImageContainer>
                        <Image src={data.img}/>
                    </ImageContainer>
                    <ImageTitle>
                        <Title>{data.title}</Title>
                        <Description>{data.title}</Description>
                        <Button>SHOW CASE</Button>
                    </ImageTitle>
                </Slide>
                 ))}
            </Wrapper>
               

            <Arrow direction="right" onClick={()=>handleClick("right")}>
                <ArrowForwardIosOutlinedIcon/>
            </Arrow>
        </Container>
    )
}

export default Slider
