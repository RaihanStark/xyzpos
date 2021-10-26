import styled from "styled-components";
import theme from "../../theme";

const variantOptions = {
  primary: {
    backgroundColor: theme.primary,
    color: "white",
    border: `3px solid ${theme.primary}`,
    active: {
      backgroundColor: theme.primary,
      color: "white",
    },
  },
  outlinePrimary: {
    backgroundColor: "white",
    color: theme.primary,
    border: `3px solid ${theme.primary}`,
    active: {
      backgroundColor: theme.primary,
      color: "white",
    },
  },
  outlineLight: {
    backgroundColor: theme.primary,
    color: "white",
    border: `3px solid white`,
    active: {
      backgroundColor: "white",
      color: theme.primary,
    },
  },
};

const StyledButton = styled.a`
  color: ${({ variant }) => variant && variantOptions[variant].color};
  border: ${({ variant }) => variant && variantOptions[variant].border};
  background-color: ${({ variant }) =>
    variant && variantOptions[variant].backgroundColor};
  padding: 0.25rem 1.5rem;
  border-radius: 2rem;
  text-decoration: none;
  font-size: 1.3rem;
  cursor: pointer;
  &:hover {
    background-color: ${({ variant }) =>
      variant && variantOptions[variant].active.backgroundColor};
    color: ${({ variant }) => variant && variantOptions[variant].active.color};
  }
`;

function Button({ variant, style, children, href = "#" }) {
  return (
    <StyledButton style={style} href={href} variant={variant}>
      {children}
    </StyledButton>
  );
}

export default Button;
