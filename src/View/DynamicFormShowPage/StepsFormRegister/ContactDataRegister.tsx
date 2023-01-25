import React, { useEffect, useState } from 'react'
import { Skeleton } from "antd";
import { DynamicForm } from "../../../components/DinamicFormUser/DynamicForm";

const contactRegisterData = [
  {
    section: 'contactRegister',
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
    section: 'contactRegister',
    propertyType: 'phone',
    fieldType: 'phone',
    name: 'phone',
    label: 'Phone',
    placeholder: 'Digite seu nome',
    tooltip: '',
    mask: '+44 (00) 0000 0000',
    options: [],
    validators: [
      {
        key: 'required',
        message: 'digite um phone válido',
      }
    ],
  },
  {
    section: 'contactRegister',
    propertyType: 'phone',
    fieldType: 'phone',
    name: 'linePhone',
    label: 'Line Phone',
    placeholder: 'Digite seu nome',
    tooltip: '',
    mask: '+44 (00) 0000 0000',
    options: [],
    validators: [
      {
        key: 'required',
        message: 'digite um phone válido',
      }
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
]

export const ContactDataRegister: React.FC<any> = ({updateStep}) => {
  const [isLoading, setIsLoading] = useState(true)
  
  const onFinish = () => {
    updateStep(3);
  }
  
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 700)
  }, [])
  
  return (
    <Skeleton loading={isLoading} active>
      <DynamicForm inputData={contactRegisterData} finished={onFinish} button={'Next'}/>
    </Skeleton>
  
  )
}
