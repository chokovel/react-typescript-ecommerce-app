import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons"
import styled from "styled-components"

const Container = styled.div`
  width: 100%;
  height:100vh;
  display:flex;
  background-color: coral;
  position: relative;
` 
const Arrow = styled.div`
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
  opacity: 0.5;
`;

const Wrapper = styled.div`
  height: 100%;
`
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items:center;
`
const ImgContainer = styled.div`
  heigh: 100%;
  flex: 1;
`
const InfoContainer = styled.div`
  flex: 1;
`
const Img = styled.img`
  height: 80%
`


const Slider = () => {
  return (
    <Container>
      <Arrow>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper>
        <ImgContainer>
          <img src="" alt="" />
        </ImgContainer>
        <InfoContainer></InfoContainer>
      </Wrapper>
      <Arrow>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  )
}

export default Slider