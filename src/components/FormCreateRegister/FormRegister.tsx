import React, { useState } from 'react'
import { FormRegisterContainer, FormRegisterItems } from './FormRegister.styles'
import { FormInputTitle } from "../../View/DynamicFormCreatePage/FormSteps/FormSteps.styles";
import { Input } from "antd";

interface inputType {
  type: string
  name: any
  label: any
  placeholder: any
  checked: any
  id: any
  value: any
  onChange: any
}

export const FormRegister: React.FC<any> = ({field, onChange, formTitle}) => {
  const [modal, setModal] = useState(false)
  const [selectedInput, setSelectedInput] = useState(null)
  const [selectedInputIndex, setSelectedInputIndex] = useState(null)
  
  function handleEditInput(input: any, index: any) {
    setModal(!modal)
    setSelectedInput(input)
    setSelectedInputIndex(index)
  }
  
  return (
    <section>
      <FormInputTitle>{formTitle}</FormInputTitle>
      <FormRegisterContainer>
        {field?.map((input: inputType, index: any) => (
          <FormRegisterItems key={index} active={false}>
            
            <Input
              type="checkbox"
              name={input.name}
              placeholder={input.placeholder}
              id={input.name}
              value={input.name}
              checked={input.checked}
              onChange={() => onChange(input)}
            />
            <label htmlFor={input.name}>{input.label}</label>
            
            <i onClick={() => handleEditInput(input, index)}/>
          </FormRegisterItems>
        ))}
      </FormRegisterContainer>
    </section>
  )
}
