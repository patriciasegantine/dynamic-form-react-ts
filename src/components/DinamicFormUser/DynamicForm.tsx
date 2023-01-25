import { Checkbox, Col, Form, Input, Row, Select } from 'antd'
import React, { useEffect, useState } from 'react'
// import { getFieldFormRules } from "./RulesInputs";
import { CheckPassword } from "./components/check-password";
import { PrimaryButton } from "../../Global.styles";
import { FormContainer, InputPassword, RadioGroup } from "./dynamic-form.styles";
import MaskedInput from "./MaskedInput";
import { At, Cake, Lock, Phone } from "phosphor-react";

export const DynamicForm: React.FC<any> = ({inputData, finished, button}) => {
  const [valorInput, setValorInput] = useState<any>([])
  const [showPasswordValidation, setShowPasswordValidation] = useState<any>(false)
  const [passwordError, setPasswordError] = useState<any>(false)
  
  // const [passwordNonWhiteSpace, setPasswordNonWhiteSpace] = useState<boolean>(false);
  
  const [passwordVerification, setPasswordVerification] = useState({
    passwordLength: false,
    passwordUppercase: false,
    passwordLowercase: false,
    passwordNumber: false,
    passwordSymbol: false
  })
  const [passwordLength, setPasswordLength] = useState<boolean>(false);
  const [passwordUppercase, setPasswordUppercase] = useState<boolean>(false);
  const [passwordLowercase, setPasswordLowercase] = useState<boolean>(false);
  const [passwordNumber, setPasswordNumber] = useState<boolean>(false);
  const [passwordSymbol, setPasswordSymbol] = useState<boolean>(false);
  
  const [form] = Form.useForm()
  
  const onChange = (event: { currentTarget: { name: any; }; target: { value: any; }; }) => {
    
    setValorInput({
        ...valorInput,
        [event.currentTarget.name]: event.target.value
      }
    )
  }
  
  const buildForm = (field: any) => {
    switch (field.fieldType) {
      case 'select':
        return (
          <Select
            defaultValue={field.defaultValue}
            placeholder={field.placeholder}
            options={field.customFields.options}
          />
        )
        break;
      case 'checkbox':
        return (
          <Checkbox.Group
            options={field.customFields.options}
          />
        )
        break;
      
      case 'radio':
        return (
          <RadioGroup options={field.options}/>
        )
        break;
      
      case 'password':
        return (
          <InputPassword
            name={field.name}
            onChange={onChange}
            prefix={<Lock size={12}/>}
          
          />
        )
        break;
      
      case 'email':
        return (
          <Input
            name={field.name}
            onChange={onChange}
            prefix={<At size={12}/>}
          
          />
        )
        break;
      
      case 'mask':
        return (
          <MaskedInput
            placeholder={field.mask}
            type={field.type}
            showCount={field.showCount}
            maxLength={field.maxLength}
            mask={field.mask}
            maskOptions={{lazy: true, maxLength: 11}}
          
          />
        )
        break;
      
      case 'phone':
        return (
          <MaskedInput
            placeholder={field.mask}
            type={field.type}
            mask={field.mask}
            maskOptions={{lazy: true, maxLength: 11}}
            prefix={<Phone size={12}/>}
          
          />
        )
        break;
      
      case 'DOB':
        return (
          <MaskedInput
            placeholder={field.mask}
            type={field.type}
            mask={field.mask}
            maskOptions={{lazy: true, maxLength: 11}}
            prefix={<Cake size={16}/>}
          
          />
        )
        break;
      default:
        return (
          <Input
            name={field.name}
            autoComplete="off"
            placeholder={field.placeholder}
            type={field.type}
            showCount={field.showCount}
            maxLength={field.maxLength}
          />
        )
        break;
    }
  }
  
  const thereIsFieldPassword = () => {
    const inputPassword = inputData.filter((item: { fieldType: string; }) => item.fieldType === 'password')
    
    console.log('inputPassword', inputPassword)
    
    if (inputPassword.length === 2) {
      setShowPasswordValidation(true)
    }
  }
  
  const handleIsPasswordCorrect = () => {
    let getPassword = valorInput.password
    let checkPassword = valorInput.passwordCheck
    
    if ((getPassword === checkPassword) || !showPasswordValidation) {
      return true
    } else {
      setPasswordError('As Senhas não são iguais')
      return false
    }
    
  }
  
  const checkPasswordValidity = (value: string) => {
    
    // const isNonWhiteSpace = /^\S*$/;
    // if (isNonWhiteSpace.test(value)) {
    //     setPasswordNonWhiteSpace(true)
    // } else {
    //     setPasswordNonWhiteSpace(false) ;
    // }
    
    const isValidLength = /^.{6,8}$/;
    if (isValidLength.test(value)) {
      setPasswordLength(true)
    } else {
      setPasswordLength(false);
    }
    
    const isContainsUppercase = /^(?=.*[A-Z]).*$/;
    if (isContainsUppercase.test(value)) {
      setPasswordUppercase(true)
      console.log('setPasswordUppercase')
    } else {
      setPasswordUppercase(false);
    }
    
    const isContainsLowercase = /^(?=.*[a-z]).*$/;
    if (isContainsLowercase.test(value)) {
      setPasswordLowercase(true)
      console.log('setPasswordLowercase')
      
    } else {
      setPasswordLowercase(false);
    }
    
    const isContainsNumber = /^(?=.*[0-9]).*$/;
    if (isContainsNumber.test(value)) {
      setPasswordNumber(true)
    } else {
      setPasswordNumber(false);
    }
    
    const isContainsSymbol =
      /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/;
    if (isContainsSymbol.test(value)) {
      setPasswordSymbol(true)
    } else {
      setPasswordSymbol(false);
    }
    
    return null;
  }
  
  const onFinish = (data: any) => {
    const onlyDigit = /\D/g
    
    const newData: any = {
      ...data
    }
    
    if (data.cpf) {
      newData.cpf = data.cpf?.replace(onlyDigit, '')
    }
    if (data.cnpj) {
      newData.cnpj = data.cnpj?.replace(onlyDigit, '')
    }
    if (data.cep) {
      newData.cep = data.cep?.replace(onlyDigit, '')
    }
    if (data.phone) {
      newData.phone = data.phone?.replace(onlyDigit, '')
    }
    
    if (handleIsPasswordCorrect()) {
      console.log("PASSEI")
      finished();
      form.resetFields()
    }
    console.log("NAO PASSEI")
    
  }
  
  useEffect(() => {
    thereIsFieldPassword()
    
  }, [inputData])
  
  useEffect(() => {
    
    if (valorInput.password) {
      const passwordChecking = valorInput.password
      checkPasswordValidity(passwordChecking)
    } else {
      // setPasswordNonWhiteSpace(false)
      setPasswordLength(false);
      setPasswordUppercase(false);
      setPasswordLowercase(false);
      setPasswordNumber(false);
      setPasswordSymbol(false);
    }
    
  }, [valorInput.password])
  
  useEffect(() => {
    console.log('valorInput', valorInput)
  }, [valorInput])
  
  return (
    <FormContainer>
      <Form
        id="dynamicForm"
        name="dynamicForm"
        form={form}
        layout="vertical"
        onFinish={onFinish}
        requiredMark={true}
      
      >
        <Row gutter={20}>
          {inputData?.map((field: any) => {
            return (
              <Col key={field.id} span={24}>
                <Form.Item
                  name={field.name}
                  label={field.label}
                  required={field.rules}
                  tooltip={field?.tooltip}
                  initialValue={field.defaultValue}
                  // rules={getFieldFormRules(field.validations)}
                >
                  {buildForm(field)}
                </Form.Item>
              </Col>
            )
          })}
        </Row>
        
        {showPasswordValidation &&
          <>
            <CheckPassword
              passwordError={passwordError}
              passwordLength={passwordLength}
              passwordUppercase={passwordUppercase}
              passwordLowercase={passwordLowercase}
              passwordNumber={passwordNumber}
              passwordSymbol={passwordSymbol}
            />
          </>
        }
        
        {inputData.length > 0 &&
          <PrimaryButton>{button}</PrimaryButton>
        }
      </Form>
    
    </FormContainer>
  )
}
