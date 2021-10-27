import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import Container from "../../components/Container/Container";
import styled, { css } from "styled-components";
import HeroSvg from "../../components/HeroSvg/HeroSvg";
import theme from "../../theme";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  changeHeaderTheme,
  setPricing,
  setModalOpened,
  setModalNameOpened,
} from "../../redux";
import { useSelector } from "react-redux";
import Pricing from "../../containers/Pricing/Pricing";
import { useInViewEffect } from "react-hook-inview";
import Modal from "../../components/Modal/Modal";
import { AnimatePresence } from "framer-motion";
import RegisterModal from "../../containers/RegisterModal/RegisterModal";
import LoginModal from "../../containers/LoginModal/LoginModal";

const HeroText = styled.div`
  font-size: 1.75rem;

  margin-bottom: 3rem;

  ${({ bold }) =>
    bold &&
    css`
      font-weight: 700;
    `}

  b {
    color: ${theme.primary};
  }

  @media (min-width: 768px) {
    & {
      font-size: 2.75rem;
    }
  }
`;

const HeroContainer = styled.div`
  height: 100vh;
  justify-content: space-around;
  align-items: center;
  /* justify-content: center; */
  display: flex;

  div.left,
  div.right {
    flex-grow: 1;
  }

  div.right {
    display: none;
  }

  div.left {
    align-self: center;
  }

  @media (min-width: 768px) {
    div.right {
      display: flex;
      svg {
        width: 364.327px;
      }
    }

    div.left {
      a {
        max-width: 19rem;
      }
    }
  }
  @media (min-width: 992px) {
    div.right {
      display: flex;
      svg {
        width: 664.327px;
      }
    }
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 1rem;
`;

const StyledFooter = styled.div`
  background-color: ${theme.primary};
  color: white;
  text-align: center;
  padding: 1.5rem 0;
`;

const StyledSection = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PricingSection = styled(StyledSection)`
  height: auto !important;
  margin-bottom: 2rem;
  @media (min-width: 992px) {
    & {
      height: auto !important;
    }
  }
`;

function Landing() {
  const dispatch = useDispatch();

  const headerTheme = useSelector((state) => state.app.headerTheme);
  const modalOpened = useSelector((state) => state.app.modalOpened);
  const modalNameOpened = useSelector((state) => state.app.modalNameOpened);

  const handleScroll = (e) => {
    const scrollTop = e.srcElement.scrollingElement.scrollTop;
    if (scrollTop === 0) {
      return dispatch(changeHeaderTheme("light"));
    }
    return dispatch(changeHeaderTheme("primary"));
  };

  const openModal = (type) => {
    dispatch(setModalNameOpened(type));
    dispatch(setModalOpened(true));
  };

  const closeModal = () => {
    dispatch(setModalOpened(false));
    dispatch(setModalNameOpened(""));
  };

  const switchModal = (toType) => {
    closeModal();
    openModal(toType);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const ref = useInViewEffect(
    ([entry], observer) => {
      dispatch(setPricing(entry.isIntersecting));
    },
    { threshold: 0.1 }
  );

  return (
    <>
      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {modalOpened ? (
          <Modal closeModal={closeModal}>
            {modalNameOpened === "register" ? (
              <RegisterModal onSwitchModal={() => switchModal("login")} />
            ) : (
              <LoginModal onSwitchModal={() => switchModal("register")} />
            )}
          </Modal>
        ) : null}
      </AnimatePresence>

      <Header variant={headerTheme} openModal={openModal} />

      <Container>
        <HeroContainer>
          <div className="left">
            <HeroText>
              Solusi terbaik untuk <br />
              <b>mengelola usaha</b> <br />
              kamu!
            </HeroText>
            <ButtonGroup>
              <Button
                variant="primary"
                onClick={() => {
                  openModal("register");
                }}
              >
                Daftar Sekarang
              </Button>
              <Button variant="outlinePrimary" href="#pricing">
                Pelajari Dulu!
              </Button>
            </ButtonGroup>
          </div>
          <div className="right">
            <HeroSvg />
          </div>
        </HeroContainer>

        <PricingSection
          ref={ref}
          id="pricing"
          style={{ flexDirection: "column" }}
        >
          <HeroText bold style={{ alignSelf: "start" }}>
            Daftar sekarang dan nikmati fiturnya!
          </HeroText>
          <Pricing openModal={openModal} />
        </PricingSection>
      </Container>
      <StyledFooter>
        © <b>PT XYZ Indonesia</b> 2020
      </StyledFooter>
    </>
  );
}

export default Landing;
