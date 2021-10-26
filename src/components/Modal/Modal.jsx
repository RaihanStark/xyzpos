import styled from "styled-components";
import Backdrop from "../Backdrop/Backdrop";
import CloseSvg from "../CloseSvg/CloseSvg";

const StyledModal = styled.div`
  top: calc(50% - 205px);
  position: fixed;
  width: 752px;
  height: 388px;
  left: calc(50% - 360px);
  bottom: 40px;
  z-index: 100;
  background-color: white;
  border-radius: 1rem;
`;

const CloseButton = styled.div`
  display: flex;
  padding: 0.5rem 0.75rem;
  justify-content: flex-end;
  cursor: pointer;
`;

function Modal() {
  return (
    <>
      <Backdrop />
      <StyledModal>
        <CloseButton>
          <CloseSvg />
        </CloseButton>
        Test modal
      </StyledModal>
    </>
  );
}

export default Modal;
