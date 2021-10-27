import { useDispatch } from "react-redux";
import styled from "styled-components";
import { toggleSidebar } from "../../redux";
import HamburgerSvg from "../../components/HamburgerSvg/HamburgerSvg";
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
      <HamburgerSvg variant={variant} size={24} />
    </StyledHamburger>
  );
}

export default Hamburger;
