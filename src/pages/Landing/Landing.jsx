import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import Container from "../../components/Container/Container";
import styled from "styled-components";
import HeroSvg from "../../components/HeroSvg/HeroSvg";
import theme from "../../theme";

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

  margin-top: 1.4rem;
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
    & {
      margin-top: 3.4rem;
    }

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

function Landing() {
  return (
    <>
      <Header variant="light" />
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
              <Button variant="outlinePrimary">Pelajari Dulu!</Button>
            </ButtonGroup>
          </div>
          <div className="right">
            <HeroSvg />
          </div>
        </HeroContainer>
      </Container>
    </>
  );
}

export default Landing;
