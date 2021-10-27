import styled from "styled-components";
import theme from "../../theme";

const StyledButton = styled.button`
  border: 0;
  background-color: transparent;
  font-size: 1rem;
  padding: 0;
  font-weight: 700;

  &:hover {
    cursor: pointer;
  }

  color: ${theme.primary};
`;
function SwitchModal({ children, onClick }) {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
}

export default SwitchModal;
