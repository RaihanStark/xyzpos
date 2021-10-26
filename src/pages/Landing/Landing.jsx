import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import Container from "../../components/Container/Container";
import styled from "styled-components";
import HeroSvg from "../../components/HeroSvg/HeroSvg";
import theme from "../../theme";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { changeHeaderTheme } from "../../redux";
import { useSelector } from "react-redux";

const HeroText = styled.div`
  font-size: 1.75rem;

  margin-bottom: 3rem;

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
        max-width: 12rem;
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

function Landing() {
  const dispatch = useDispatch();
  const headerTheme = useSelector((state) => state.headerTheme);
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
  return (
    <>
      <Header variant={headerTheme} />

      <Container>
        <StyledSection id="home">
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
        </StyledSection>

        <StyledSection id="pricing">
          <HeroContainer>
            <div className="left">
              <HeroText>
                Solusi terbaik untuk <br />
                <b>mengelola usaha</b> <br />
                kamu!
              </HeroText>
              <ButtonGroup>
                <Button variant="primary">Daftar Sekarang</Button>
                <Button variant="outlinePrimary">Pelajari Dulu!</Button>
              </ButtonGroup>
            </div>
            <div className="right">
              <HeroSvg />
            </div>
          </HeroContainer>
        </StyledSection>
      </Container>
      <StyledFooter>
        © <b>PT XYZ Indonesia</b> 2020
      </StyledFooter>
    </>
  );
}

export default Landing;
