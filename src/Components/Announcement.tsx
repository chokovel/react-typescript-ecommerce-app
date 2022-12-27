import styled from "styled-components"

const Container = styled.div`
  height:30px;
  background-color: darkcyan;
  color: #fff;
  display:flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight:500;
`
const Announcement = () => {
  return (
    <Container>
      Super Deals! Free shipping on orders over 5,000 naira
    </Container>
  )

  }
export default Announcement