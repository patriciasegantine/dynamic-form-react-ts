import { useState, useEffect } from 'react'
import { CardRegister } from '../../../Global.styles'
import { FormRegister } from "../../../components/FormCreateRegister/FormRegister";

export const AccessStepRegister = () => {
  const [inputChecked, setInputChecked] = useState<any>([])
  
  const [personalField, setPersonalField] = useState<any>([
    {
      section: 'personalInputs',
      propertyType: 'Name',
      name: 'name',
      label: 'Nome do Participante',
      placeholder: 'Digite seu nome',
      tooltip: 'Exemplo de tooltip para nome.',
      fieldType: 'String',
      options: [],
      validators: [
        {
          key: 'MinLengthValidator',
          message: '{0} precisa ter pelo menos {1} caracteres.',
          value: '5',
        },
        {
          key: 'MaxLengthValidator',
          message: '{0} pode ter no máximo {1} caracteres.',
          value: '100',
        },
      ],
    },
    {
      section: 'personalInputs',
      propertyType: 'Sobrenome',
      name: 'sobrenome',
      label: 'Sobrenome',
      placeholder: 'Digite seu sobrenome',
      tooltip: 'Exemplo de tooltip para nome.',
      fieldType: 'String',
      options: [],
      validators: [
        {
          key: 'MinLengthValidator',
          message: '{0} precisa ter pelo menos {1} caracteres.',
          value: '5',
        },
        {
          key: 'MaxLengthValidator',
          message: '{0} pode ter no máximo {1} caracteres.',
          value: '100',
        },
      ],
    },
    {
      section: 'personalInputs',
      propertyType: 'CPF',
      options: [],
      name: 'cpf',
      label: 'CPF',
      placeholder: 'Seleciona sua profissão',
      tooltip: 'Exemplo de tooltip para profissão.',
      fieldType: 'String',
      validators: [
        {
          key: 'EnumValidator',
          message: '{0} precisa ter {1} ou mais caracteres.',
        },
      ],
    },
    {
      section: 'personalInputs',
      propertyType: 'CNPJ',
      options: [],
      name: 'cnpj',
      label: 'CNPJ',
      placeholder: 'Seleciona sua profissão',
      tooltip: 'Exemplo de tooltip para profissão.',
      fieldType: 'String',
      validators: [
        {
          key: 'EnumValidator',
          message: '{0} precisa ter {1} ou mais caracteres.',
        },
      ],
    },
    {
      section: 'personalInputs',
      propertyType: 'Nascimento',
      options: [],
      name: 'nascimento',
      label: 'Nascimento',
      placeholder: 'Seleciona sua profissão',
      tooltip: 'Exemplo de tooltip para profissão.',
      fieldType: 'String',
      validators: [
        {
          key: 'EnumValidator',
          message: '{0} precisa ter {1} ou mais caracteres.',
        },
      ],
    },
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
  
  useEffect(() => {
    console.log('inputChecked', inputChecked)
  }, [inputChecked])
  return (
    <CardRegister>
      <FormRegister
        formTitle={'Dados de Acesso'}
        field={personalField}
        setField={setPersonalField}
        onChange={handleOnChangeInput}
        // checked={handleCheckedInput}
        onlyOne={false}
      />
    </CardRegister>
  )
}
