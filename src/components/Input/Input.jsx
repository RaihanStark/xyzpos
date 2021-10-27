import styled from "styled-components";
import theme from "../../theme";
import EmailSvg from "../EmailSvg/EmailSvg";
import PasswordSvg from "../PasswordSvg/PasswordSvg";
import UsernameSvg from "../UsernameSvg/UsernameSvg";
const StyledInput = styled.input`
  border: 3px solid ${theme.primary};
  border-radius: 2rem;
  padding: 0.75rem 1rem;
  color: ${theme.primary};
  padding-left: 3.25rem;
  width: 100%;
  &:focus-visible {
    outline: 0;
  }
`;

const InputContainer = styled.div`
  position: relative;
`;

function Input({ type, onChange }) {
  return (
    <InputContainer>
      {type && type === "Email" ? (
        <EmailSvg />
      ) : null || type === "Password" ? (
        <PasswordSvg />
      ) : null || type === "Nama" ? (
        <UsernameSvg />
      ) : null}

      <StyledInput
        type={type === "Nama" ? "text" : type}
        name={type}
        placeholder={type}
        onChange={onChange}
      />
    </InputContainer>
  );
}

export default Input;
