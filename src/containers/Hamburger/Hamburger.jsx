import { useDispatch } from "react-redux";
import styled from "styled-components";
import { toggleSidebar } from "../../redux";

const StyledHamburger = styled.div`
  display: none;
  align-items: center;
  cursor: pointer;
  margin-left: auto;

  @media (max-width: 768px) {
    & {
      display: flex;
    }
  }
`;

function Hamburger({ variant }) {
  const dispatch = useDispatch();
  const handleToggleSidebar = () => {
    dispatch(toggleSidebar());
  };
  return (
    <StyledHamburger onClick={handleToggleSidebar}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        style={{ fill: variant && variant === "light" ? "black" : "white" }}
      >
        <path d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z"></path>
      </svg>
    </StyledHamburger>
  );
}

export default Hamburger;
