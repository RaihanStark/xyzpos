import { useSelector } from "react-redux";
import styled from "styled-components";
import theme from "../../theme";
import Button from "../Button/Button";
import Hamburger from "../Hamburger/Hamburger";

const StyledMenu = styled.ul`
  list-style-type: none;
  display: flex;
  margin-left: auto;
  gap: 2rem;

  color: ${({ variant }) =>
    variant && variant === "light" ? "black" : "white"};
  font-weight: 600;
  align-items: center;
  cursor: pointer;
  li a {
    color: inherit;
    text-decoration: none;

    &:hover,
    &.active {
      border-bottom: 3px solid
        ${({ variant }) => (variant && variant === "light" ? "black" : "white")};
    }
  }

  @media (max-width: 768px) {
    & {
      display: ${({ open }) => (open ? "flex" : "none")} !important;
      position: absolute;

      left: 0;
      right: 0;
      top: 83px;
      background-color: ${({ variant }) =>
        variant && variant === "light" ? "white" : theme.primary};
      width: 100%;
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: column;
      align-content: center;
      padding: 2rem 0;
    }
  }
`;
function Menu({ variant }) {
  const sidebarOpened = useSelector((state) => state.sidebarOpened);
  return (
    <>
      <Hamburger variant={variant} />
      <StyledMenu variant={variant} open={sidebarOpened}>
        <li>
          <a>Fitur</a>
        </li>
        <li>
          <a>Berlangganan</a>
        </li>
        <Button
          variant={variant === "light" ? "outlinePrimary" : "outlineLight"}
        >
          Masuk
        </Button>
      </StyledMenu>
    </>
  );
}

export default Menu;
