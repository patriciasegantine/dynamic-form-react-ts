import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

  body {

  }
`

export const Container = styled.div`
  margin: 5rem auto;
  //width: 25rem;
  bottom: 0;
  background-color: white;
  border-radius: 20px;
  padding: 2rem;
`

export const CardRegister = styled.div`
  padding: 32px;
  background: #f6f6f6;
  font-size: 1rem;
  text-align: left;
  color: ${({theme}) => theme['dark-blue']};
  opacity: 1;
`

export const PrimaryButton = styled.button`
  background: #F97268;
  border: none;
  border-radius: 1rem;
  height: 40px;
  width: 100%;
  color: white;
  font-weight: bold;
  cursor: pointer;
  margin: 10px auto;

  &:disabled {
    background: #efebeb;
    cursor: not-allowed;
  }
`

export const SecondaryButton = styled(PrimaryButton)`
  background: white;
  border: 1px solid transparent;
  color: gray;

  font-weight: 500;
`

export const MessageError = styled.p`
  display: block;
  color: tomato;
  margin: -20px auto 0;
  text-align: center;

`
