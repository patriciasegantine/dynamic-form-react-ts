import React, { useEffect, useState } from 'react'
import { Skeleton } from "antd";
import { DynamicForm } from "../../../components/DinamicFormUser/DynamicForm";

const ValidationRegisterData = [
  {
    section: 'personalInputs',
    name: 'name',
    label: 'Nome do Participante',
    placeholder: 'Digite seu nome',
    tooltip: 'Exemplo de tooltip para nome.',
    fieldType: 'radio',
    options: [
      {
        label: "João Montserrat",
        value: "João Montserrat"
      },
      {
        label: "Gabriel Montserrat",
        value: "Gabriel Montserrat"
      },
      {
        label: "Afonso Montserrat",
        value: "Afonso Montserrat"
      }
    ],
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
]

export const ValidationRegister: React.FC<any> = ({updateStep}) => {
  
  const [isLoading, setIsLoading] = useState(true)
  
  const finished = () => {
    updateStep(4);
  }
  
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 700)
  }, [])
  
  return (
    <Skeleton loading={isLoading} active>
      <DynamicForm
        inputData={ValidationRegisterData}
        finished={finished}
        button={'Enviar código'}
      />
    </Skeleton>
  
  )
}
