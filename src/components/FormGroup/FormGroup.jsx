import styled from "styled-components";

const StyledFormGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1rem;
`;
function FormGroup({ children }) {
  return <StyledFormGroup>{children}</StyledFormGroup>;
}

export default FormGroup;
