import React, { useEffect, useState } from 'react'
import { Skeleton } from "antd";
import { DynamicForm } from "../../../components/DinamicFormUser/DynamicForm";

const PersonalRegisterData = [
  {
    section: 'accessInputs',
    name: 'name',
    label: 'Name',
    placeholder: 'your name',
    tooltip: '',
    fieldType: 'string',
    options: [],
    validators: [
      {
        key: 'required',
        message: 'Please, fill a valid name',
      },
      {
        key: 'MaxLengthValidator',
        message: '{0} pode ter no máximo {1} caracteres.',
        value: '100',
      },
    ],
  },
  {
    section: 'accessInputs',
    name: 'surname',
    label: 'Surname',
    placeholder: 'your surname',
    tooltip: '',
    fieldType: 'string',
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
    section: 'contactRegister',
    propertyType: 'phone',
    fieldType: 'DOB',
    name: 'linePhone',
    label: 'DOB',
    placeholder: 'Digite seu nome',
    tooltip: '',
    mask: '00-00-00',
    options: [],
    validators: [
      {
        key: 'required',
        message: 'digite um phone válido',
      }
    ],
  },
  {
    section: 'personalDataRegister',
    fieldType: '',
    name: 'street',
    label: 'Address First Line',
    placeholder: 'Fill your PostCode',
    tooltip: '',
    options: [],
    validators: [
      {
        key: 'required',
        message: 'digite um phone válido',
      }
    ],
  },
  {
    section: 'personalDataRegister',
    fieldType: '',
    name: 'street',
    label: 'PostCode',
    placeholder: 'Fill your PostCode',
    tooltip: '',
    options: [],
    validators: [
      {
        key: 'required',
        message: 'digite um phone válido',
      }
    ],
  },
]

export const PersonalDataRegister: React.FC<any> = ({updateStep}) => {
  
  const [isLoading, setIsLoading] = useState(true)
  
  const finished = () => {
    updateStep(2);
  }
  
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 700)
  }, [])
  
  return (
    <Skeleton loading={isLoading} active>
      <DynamicForm inputData={PersonalRegisterData} finished={finished} button={'Next'}/>
    </Skeleton>
  
  )
}
