import styled from "styled-components";
import { Input, Radio } from "antd";

export const FormContainer = styled.div`
  padding: 2rem 0;
`

export const CheckPasswordContainer = styled.div`
  margin: 10px auto 20px;
`

export const CorrectPassword = styled.span<{ password: any }>`
  margin-right: .3rem;
  color: ${props => props.password ? 'green' : 'gray'};
`

export const PasswordItem = styled.div`

`

export const PasswordErrorMessage = styled.div`
  color: tomato;
  text-align: center;
`

export const InputPassword = styled(Input.Password)`


`
export const RadioGroup = styled(Radio.Group)`
  display: flex;
  flex-direction: column;
  gap: 10px;

`
