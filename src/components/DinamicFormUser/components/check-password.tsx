import React from 'react';
import {
  CheckPasswordContainer,
  CorrectPassword,
  PasswordErrorMessage,
  PasswordItem
} from "../dynamic-form.styles";
import { CheckCircleOutlined } from "@ant-design/icons";

type CheckPasswordType = {
  passwordError: string,
  passwordLength: boolean,
  passwordUppercase: boolean,
  passwordLowercase: boolean,
  passwordNumber: boolean,
  passwordSymbol: boolean
}

export const CheckPassword: React.FC<CheckPasswordType> = ({passwordError, passwordLength, passwordUppercase, passwordLowercase, passwordNumber, passwordSymbol }) => {
  return (
    <CheckPasswordContainer>
      {
        passwordError && <PasswordErrorMessage>{passwordError}</PasswordErrorMessage>
      }
    
      <h4> A senha deve conter:</h4>
    
      <PasswordItem>
        <CorrectPassword
          password={passwordLength}>
          <CheckCircleOutlined />
        </CorrectPassword>
        <span>De 6 a 8 caracteres</span>
      </PasswordItem>
    
      <PasswordItem>
        <CorrectPassword
          password={passwordUppercase}>
          <CheckCircleOutlined />
        </CorrectPassword>
        <span>Ao menos uma letra maiúscula</span>
      </PasswordItem>
    
      <PasswordItem>
        <CorrectPassword
          password={passwordLowercase}>
          <CheckCircleOutlined />
        </CorrectPassword>
        <span>Ao menos uma letra minúscula</span>
      </PasswordItem>
    
      <PasswordItem>
        <CorrectPassword
          password={passwordNumber}>
          <CheckCircleOutlined />
        </CorrectPassword>
        <span>Ao menos um número</span>
      </PasswordItem>
    
      <PasswordItem>
        <CorrectPassword
          password={passwordSymbol}>
          <CheckCircleOutlined />
        </CorrectPassword>
        <span>Ao menos um símbolo</span>
      </PasswordItem>
  
    </CheckPasswordContainer>
  );
};
