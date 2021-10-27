import Input from "../../components/Input/Input";
import FormGroup from "../../components/FormGroup/FormGroup";
import Button from "../../components/Button/Button";
import styled from "styled-components";
import SwitchModal from "../../components/SwitchModal/SwitchModal";
import { useDispatch, useSelector } from "react-redux";

import {
  addEmail,
  addPassword,
  addName,
  addRememberMe,
  registerUser,
} from "../../redux/";
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

const StyledRegisterModal = styled.div`
  width: 100%;
  text-align: center;
`;
function RegisterModal({ onSwitchModal }) {
  const forms = useSelector((state) => state.forms);
  const dispatch = useDispatch();
  const regex = /\d/;

  return (
    <StyledRegisterModal>
      <h1>Buat Akun</h1>
      <FormGroup>
        <Input
          type="Nama"
          value={forms.name}
          onChange={(e) => dispatch(addName(e.target.value))}
        />
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
          <input
            type="checkbox"
            name="remember_me"
            id="remember_me"
            value={forms.rememberMe}
            onChange={(e) => dispatch(addRememberMe(e.target.value))}
          />
          Ingat Saya
        </CheckboxContainer>

        <Button
          as="button"
          onClick={(e) => {
            e.preventDefault();
            // Number is not allowed in name

            if (regex.test(forms.name)) {
              return alert("Number is not allowed in name field");
            }

            if (forms.name.length < 10) {
              return alert("Name minimum 10 character");
            }

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
              registerUser({
                name: forms.name,
                email: forms.email,
                password: forms.password,
              })
            );

            alert("Register Success! Redirect to Dashboard");
          }}
          style={{ textAlign: "center" }}
          variant="primary"
        >
          Daftar
        </Button>
        <div style={{ textAlign: "center", fontSize: "1rem" }}>
          Sudah punya akun?{" "}
          <SwitchModal type="submit" onClick={onSwitchModal}>
            Masuk
          </SwitchModal>
        </div>
      </FormGroup>
    </StyledRegisterModal>
  );
}

export default RegisterModal;
