import styled from 'styled-components'

export const FormRegisterContainer = styled.form`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 10px;
  width: auto;
`

export const FormRegisterItems = styled.div<{ active: any }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: auto;
  margin: 8px;
  background: ${(props) => (props.active ? '#FFF' : '#FAFAFA')};
  box-shadow: 0px 5px 20px #e2e2e2;
  border-radius: 6px;
  padding: 24px;
  color: ${({ theme }) => theme['dark-blue']};
  border: 1.5px solid ${(props) => (props.active ? '#1ECFB4' : 'transparent')};
  cursor: pointer;
  opacity: 1;

  &:hover,
  &:focus {
    border: 1.5px solid ${({ theme }) => theme['light-green']};
  }
`
