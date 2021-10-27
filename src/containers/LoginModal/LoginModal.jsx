import Input from "../../components/Input/Input";
import FormGroup from "../../components/FormGroup/FormGroup";
import Button from "../../components/Button/Button";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { addEmail, addPassword, loginUser } from "../../redux/";
import SwitchModal from "../../components/SwitchModal/SwitchModal";
import { validateEmail } from "../../utils";
const CheckboxContainer = styled.div`
  font-size: 1rem;
  display: flex;
  align-items: center;

  input {
    width: 20px;
    height: 17px;
  }
`;

const StyledLoginModal = styled.div`
  width: 100%;
  text-align: center;
`;
function LoginModal({ onSwitchModal }) {
  const forms = useSelector((state) => state.forms);
  const dispatch = useDispatch();
  return (
    <StyledLoginModal>
      <h1>Masuk</h1>
      <FormGroup>
        <Input
          type="Email"
          value={forms.email}
          onChange={(e) => dispatch(addEmail(e.target.value))}
        />
        <Input
          type="Password"
          value={forms.password}
          onChange={(e) => dispatch(addPassword(e.target.value))}
        />
        <CheckboxContainer>
          <input type="checkbox" name="remember_me" id="remember_me" /> Ingat
          Saya
        </CheckboxContainer>

        <Button
          style={{ textAlign: "center" }}
          variant="primary"
          as="button"
          onClick={() => {
            // Only Valid Email
            if (!validateEmail(forms.email)) {
              return alert("Please type valid email");
            }

            if (forms.password.length < 8 || forms.password.length > 20) {
              return alert(
                "Password minimum 8 character and maximum 20 character"
              );
            }
            dispatch(
              loginUser({
                name: forms.name,
                email: forms.email,
                password: forms.password,
              })
            );
          }}
        >
          Masuk
        </Button>
        <div style={{ textAlign: "center", fontSize: "1rem" }}>
          Belum punya akun?{" "}
          <SwitchModal onClick={onSwitchModal}>Daftar</SwitchModal>
        </div>
      </FormGroup>
    </StyledLoginModal>
  );
}

export default LoginModal;
