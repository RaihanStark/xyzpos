import styled from "styled-components";

const StyledBackdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  bottom: 40 px;
  z-index: 100;
  background-color: #0000003b;
  backdrop-filter: blur(7px);
`;
function Backdrop() {
  return <StyledBackdrop></StyledBackdrop>;
}

export default Backdrop;
