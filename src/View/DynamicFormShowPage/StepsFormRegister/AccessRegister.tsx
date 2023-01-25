import React, { useEffect, useState } from 'react'
import { Skeleton } from "antd";
import { DynamicForm } from "../../../components/DinamicFormUser/DynamicForm";

const AccessRegisterData = [
  {
    section: 'AccessRegister',
    propertyType: 'email',
    fieldType: 'email',
    name: 'email',
    label: 'Email',
    placeholder: 'Digite seu nome',
    tooltip: '',
    options: [],
    validators: [
      {
        key: 'email',
        message: 'digite um email válido',
      }
    ],
  },
  {
    section: 'AccessRegister',
    propertyType: 'email',
    fieldType: 'email',
    name: 'email',
    label: 'Email',
    placeholder: 'Digite seu nome',
    tooltip: '',
    options: [],
    validators: [
      {
        key: 'email',
        message: 'digite um email válido',
      }
    ],
  },
  {
    section: 'AccessRegister',
    fieldType: 'password',
    propertyType: 'Password',
    name: 'password',
    label: 'Password',
    placeholder: 'Digite seu sobrenome',
    tooltip: 'Exemplo de tooltip para nome.',
    options: [],
    validators: [
      {
        key: 'password',
        message: 'Campo obrigatório',
      },
    ],
  },
  {
    section: 'AccessRegister',
    fieldType: 'password',
    propertyType: 'Password',
    name: 'password',
    label: 'Confirme o Password',
    placeholder: 'Digite seu sobrenome',
    tooltip: 'Exemplo de tooltip para nome.',
    options: [],
    validators: [
      {
        key: 'password',
        message: 'Campo obrigatório',
      },
    ],
  },
]

export const AccessRegister: React.FC<any> = ({updateStep}) => {
  
  const [isLoading, setIsLoading] = useState(true)
  
  const finished = () => {
    updateStep(1);
  }
  
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 700)
  }, [])
  
  return (
    <Skeleton loading={isLoading} active>
      <DynamicForm inputData={AccessRegisterData} finished={finished} button={'next'}/>
    </Skeleton>
  
  )
}
