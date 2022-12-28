import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons"
import styled from "styled-components"
import { sliderItems } from "../data";
import { useState } from "react";

const Container = styled.div`
  width: 100%;
  height:100vh;
  display:flex;
  position: relative;
  overflow: hidden;  //overflow hidden is used because of the slide to hide the other slide pages.
` 
const Arrow = styled.div<DirectionProps>`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex; 
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  cursor:pointer;
  left: ${props=> props.direction === "left" && "10px"};
  right: ${props=> props.direction === "right" && "10px"};
  opacity: 0.5;
  z-index: 2;  //used for slide transform translateX to show other slide pages
  `;


interface DirectionProps {
  direction?: string;
  onClick?: any;
}

// slider design begins display flex
const Wrapper = styled.div<slideIndexProps>`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

interface slideIndexProps {
  slideIndex: number;
}
// inside Slide you have imgcontainer and infocontainer

const Slide = styled.div<SlideProps>`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items:center;
  background-color: ${props => props.bg};
`
interface SlideProps {
  bg?: string;
}

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
  `

const Image = styled.img`
  padding-top:30px;
  height: 85%;
  `

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`

const Title = styled.h1`
  font-size: 70px;
  text-transform: uppercase;
`
const Desc = styled.p`
  margin: 50px 0px;
  font-size:20px;
  font-weight: 500;
  letter-spacing: 3px;
  text-transform: uppercase;
`
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
  text-transform: uppercase;
`


const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction: string) => {
      if(direction === "left"){
        setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
      }else {
         setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
      }
    };
  return (
    <Container>
      <Arrow direction = "left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => ( 
          <Slide bg = {item.bg}>
            <ImgContainer>
              <Image src={item.img} alt={item.title} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button>Show now</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction = "right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  )
}

export default Slider