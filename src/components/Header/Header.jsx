import styled from "styled-components";
import Logo from "../Logo/Logo";
import Container from "../Container/Container";
import Menu from "../Menu/Menu";
import theme from "../../theme";

const HeaderContainer = styled.div`
  background-color: ${({ variant }) =>
    variant && variant === "primary" ? theme.primary : "white"};
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
