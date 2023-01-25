import React, { useState } from 'react'
import { CardRegister } from "../../../Global.styles";
import { FormRegister } from "../../../components/FormCreateRegister/FormRegister";

export const ContactStepRegister: React.FC<any> = () => {
  
  const [inputChecked, setInputChecked] = useState<any>([])
  const [contactField, setContactField] = useState([
    {
      section: 'contactInput',
      name: 'email',
      label: 'E-mail'
    },
    {
      section: 'contactInput',
      name: 'phone',
      label: 'Telefone fixo'
    },
    {
      section: 'contactInput',
      name: 'businessPhone',
      label: 'Telefone comercial'
    },
    {
      section: 'contactInput',
      name: 'cellPhone',
      label: 'Celular'
    }
  ])
  
  function handleOnChangeInput({target}: any) {
    if (target.checked) {
      setInputChecked([...inputChecked, target.value])
    } else {
      setInputChecked(
        inputChecked.filter((field: any) => field !== target.value)
      )
    }
  }
  
  return (
    <CardRegister>
      <FormRegister
        formTitle={'Contact'}
        field={contactField}
        setField={setContactField}
        onChange={handleOnChangeInput}
        onCheck={() => console.log('oi')}
        onlyOne={false}
      />
    </CardRegister>
  )
}
