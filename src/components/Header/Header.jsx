import styled from "styled-components";
import Logo from "../Logo/Logo";
import Container from "../Container/Container";
import Menu from "../../containers/Menu/Menu";
import theme from "../../theme";

const HeaderContainer = styled.div`
  background-color: ${({ variant }) =>
    variant && variant === "primary" ? theme.primary : "white"};
  box-shadow: ${({ variant }) =>
    variant && variant === "primary" ? "0px 10px 20px 0px #0000003d" : "none"};
  position: fixed;
  top: 0;
  width: 100%;
  transition: all 300ms ease-in-out;
`;

const StyledHeader = styled.div`
  display: flex;
  padding: 1.25rem 0;
`;

function Header({ variant }) {
  return (
    <HeaderContainer variant={variant}>
      <Container>
        <StyledHeader>
          <Logo variant={variant} />
          <Menu variant={variant} />
        </StyledHeader>
      </Container>
    </HeaderContainer>
  );
}

export default Header;
