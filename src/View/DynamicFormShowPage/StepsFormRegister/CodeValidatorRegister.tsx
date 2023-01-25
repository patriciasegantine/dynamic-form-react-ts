import React, { useEffect, useRef, useState } from 'react';
import { Form, Skeleton } from "antd";
import { MessageError, PrimaryButton, SecondaryButton } from "../../../Global.styles";
import { CodeContainer, CodeInput, VerificationContainer } from "../DynamicForm.styles";

export const CodeValidatorRegister: React.FC<any> = ({onFinish, onClick}) => {
  
  const [counter, setCounter] = useState(0)
  const [resendCode, setResendCode] = useState(false)
  const [isDisabled, setIsDisabled] = useState(false)
  const [isFormValid, setIsFormValid] = useState(false)
  const [showError, setShowError] = useState(false)
  const [messageError, setMessageError] = useState<string>('')
  
  const [isLoading, setIsLoading] = useState(false)
  
  const [form] = Form.useForm()
  const inputRef = useRef(null)
  
  const handleEnter = (event: any) => {
    const isNumber = Number(event.key.toLowerCase())
    if (!isNaN(isNumber)) {
      const form = event.target.form
      const index = [...form].indexOf(event.target)
      form.elements[index + 1].focus()
      event.preventDefault()
    }
    
    if (event.key.toLowerCase() === 'backspace') {
      const form = event.target.form
      const index = [...form].indexOf(event.target)
      form.elements[index].value = ''
      form.elements[index - 1].focus()
      event.preventDefault()
    }
  }
  
  // const handleCheckCode = () => {
  //
  //   if (showError) {
  //     setShowError(true)
  //     setMessageError('O código está incorreto')
  //
  //     setTimeout(() => {
  //
  //       setShowError(false)
  //       setMessageError('')
  //
  //     }, 2000)
  //     form.resetFields()
  //   } else {
  //     dispatch(push(RouteEnum.ConfirmationValidation))
  //   }
  // }
  
  const handleResendCode = () => {
    form.resetFields()
    setResendCode(true)
    setCounter(30)
    setIsDisabled(true)
  }
  
  function onChange() {
    const fieldsValue = Object.keys(form.getFieldsValue()).map(function (key) {
      return form.getFieldsValue()[key]
    })
    
    setIsFormValid(
      fieldsValue.filter(field => {
        return isNaN(Number(field))
      }).length === 0
    )
  }
  
  useEffect(() => {
    let timer: any = null
    
    if (counter) {
      timer = setInterval(() => setCounter(oldCounter => oldCounter - 1), 1000)
    } else {
      setResendCode(false)
      setIsDisabled(false)
    }
    
    // @ts-ignore
    return () => clearInterval(timer)
  }, [counter])
  
  // @ts-ignore
  return (
    <Skeleton loading={isLoading} active>
      
      <VerificationContainer>
        
        <Form onFinish={onFinish} form={form} layout="horizontal">
          
          <CodeContainer>
            <Form.Item name="cod-one">
              <CodeInput
                onChange={onChange}
                autoFocus={true}
                ref={inputRef}
                mask={'0'}
                showError={showError}
                onKeyUp={handleEnter}
              
              />
            </Form.Item>
            
            <Form.Item name="cod-two">
              <CodeInput
                onKeyUp={handleEnter}
                onChange={onChange}
                showError={showError}
                mask={'0'}
              />
            </Form.Item>
            
            <Form.Item name="cod-three">
              <CodeInput
                onKeyUp={handleEnter}
                onChange={onChange}
                showError={showError}
                mask={'0'}
              
              />
            </Form.Item>
            
            <Form.Item name="cod-four">
              <CodeInput
                onKeyUp={handleEnter}
                onChange={onChange}
                showError={showError}
                mask={'0'}
              
              />
            </Form.Item>
          
          </CodeContainer>
          
          
          {messageError && <MessageError>{messageError}</MessageError>}
          
          
          <PrimaryButton onClick={onClick}>
            Validar
          </PrimaryButton>
          
          <SecondaryButton onClick={handleResendCode} disabled={isDisabled}>
            {!resendCode ? 'Reenviar código' : <span>{`Reenviar em ${counter} segundos`}</span>}
          </SecondaryButton>
        
        </Form>
      
      </VerificationContainer>
    </Skeleton>
  );
};
