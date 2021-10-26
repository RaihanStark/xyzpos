import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import Container from "../../components/Container/Container";
import styled, { css } from "styled-components";
import HeroSvg from "../../components/HeroSvg/HeroSvg";
import theme from "../../theme";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { changeHeaderTheme, setPricing } from "../../redux";
import { useSelector } from "react-redux";
import Pricing from "../../containers/Pricing/Pricing";
import { useInViewEffect } from "react-hook-inview";
import Modal from "../../components/Modal/Modal";
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
  const handleScroll = (e) => {
    const scrollTop = e.srcElement.scrollingElement.scrollTop;
    if (scrollTop === 0) {
      return dispatch(changeHeaderTheme("light"));
    }
    return dispatch(changeHeaderTheme("primary"));
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const ref = useInViewEffect(
    ([entry], observer) => {
      dispatch(setPricing(entry.isIntersecting));
    },
    { threshold: 0.1 }
  );
  return (
    <>
      <Header variant={headerTheme} />

      <Container>
        <HeroContainer>
          <div className="left">
            <HeroText>
              Solusi terbaik untuk <br />
              <b>mengelola usaha</b> <br />
              kamu!
            </HeroText>
            <ButtonGroup>
              <Button variant="primary">Daftar Sekarang</Button>
              <Button variant="outlinePrimary" href="#pricing">
                Pelajari Dulu!
              </Button>
            </ButtonGroup>
          </div>
          <div className="right">
            <HeroSvg />
          </div>
        </HeroContainer>
        {/* <Modal /> */}
        <PricingSection
          ref={ref}
          id="pricing"
          style={{ flexDirection: "column" }}
        >
          <HeroText bold style={{ alignSelf: "start" }}>
            Daftar sekarang dan nikmati fiturnya!
          </HeroText>
          <Pricing />
        </PricingSection>
      </Container>
      <StyledFooter>
        © <b>PT XYZ Indonesia</b> 2020
      </StyledFooter>
    </>
  );
}

export default Landing;
