import styled from "styled-components";
import Backdrop from "../Backdrop/Backdrop";
import CloseSvg from "../CloseSvg/CloseSvg";
import LoginSvg from "../LoginSvg/LoginSvg";
import { motion } from "framer-motion";

const StyledModal = styled(motion.div)`
  /* max-width: 800px; */
  border-radius: 1rem;
  width: 100%;
  bottom: 0;
  left: 0;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  height: 100%;
  position: fixed;
  z-index: 100;
  background-color: white;

  @media (min-width: 992px) {
    & {
      max-width: 800px;
      width: clamp(70%, 700px, 90%);
      border-bottom-left-radius: 1rem;
      border-bottom-right-radius: 1rem;
      height: fit-content;
      position: relative;
    }
  }
`;

const CloseButton = styled.div`
  display: flex;
  padding: 1rem;
  justify-content: flex-end;
  cursor: pointer;
`;

const ModalContent = styled.div`
  padding: 0 1rem 1rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin-top: 0px;
  }

  @media (min-width: 375px) {
    h1 {
      margin-top: 1rem;
    }
  }

  @media (min-width: 992px) {
    & {
      flex-direction: row;
      padding: 0 2.5rem 3.5rem 1.5rem;
    }

    #loginSvg {
      width: 841px;
      height: 271px;
    }
  }
`;

const ModalContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    position: fixed;
    z-index: 100;
    top: -66px;
}`;

function Modal({ children, closeModal }) {
  return (
    <ModalContainer className="Test">
      <Backdrop onClick={closeModal} />

      <StyledModal
        initial={{ y: 700 }}
        animate={{ y: 50 }}
        exit={{ y: 900 }}
        transition={{ stiffness: 100 }}
      >
        <CloseButton onClick={closeModal}>
          <CloseSvg size="30" />
        </CloseButton>
        <ModalContent>
          <LoginSvg size="180" />
          {children}
        </ModalContent>
      </StyledModal>
    </ModalContainer>
  );
}

export default Modal;
