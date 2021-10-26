import styled from "styled-components";

const StyledLogo = styled.span`
  display: flex;
  font-size: 2rem;
  align-items: center;

  color: ${({ variant }) =>
    variant && variant === "light" ? "black" : "white"};
`;

function Logo({ variant }) {
  return (
    <StyledLogo variant={variant}>
      xyz<b>POS</b>
    </StyledLogo>
  );
}

export default Logo;
