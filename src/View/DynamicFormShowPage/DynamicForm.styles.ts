import styled from "styled-components";
import MaskedInput from "../../components/DinamicFormUser/MaskedInput";

export const ContainerSteps = styled.div`
  margin: 5rem auto;
  width: 30rem;
  bottom: 0;
  background-color: white;
  border-radius: 20px;
  padding: 2rem;
`

export const HeaderSteps = styled.div`
  position: relative;
`

export const BackButtonHeader = styled.span`
  position: absolute;
  top: 10px;
  left: 0px;
  cursor: pointer;

`
export const CloseButtonHeader = styled.span`
  position: absolute;
  top: 10px;
  right: 0px;
  cursor: pointer;
`

export const HeaderTitle = styled.h3`
  padding-top: 20px;
`

export const VerificationContainer = styled.div`
  margin: 20px 0;
`

export const CodeContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  max-width: 100%;

  input {
    display: grid;
    place-items: center;
    text-align: center;
    font-size: 21px;
    color: #001d42;
    height: 50px;
    width: 66px;
    padding: 10px;
    margin: 10px;
    border-radius: 5px;

    @media (max-width: 700px) {
      height: 35px;
      width: 46px;
      margin: 5px;
    }
  }
`

export const CodeInput = styled(MaskedInput)<{ showError: any }>`
  border: ${props => (props.showError ? '3px solid tomato' : '1px solid light-gray')} !important;
  display: flex;
  justify-content: center;
  gap: 10px;

  input {
    display: grid;
    place-items: center;
    text-align: center;
    font-size: 21px;
    color: #001d42;
    height: 60px;
    width: 66px;
    padding: 10px;
    margin: 10px;
    border-radius: 5px;

    @media (max-width: 40rem) {
      height: 35px;
      width: 46px;
      margin: 5px;
    }
  }

`
