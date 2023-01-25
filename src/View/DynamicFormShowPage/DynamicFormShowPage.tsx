import React, { useState } from 'react';
import { CaretLeft, XCircle } from "phosphor-react";
import { AccessRegister } from "./StepsFormRegister/AccessRegister";
import { PersonalDataRegister } from "./StepsFormRegister/PersonalDataRegister";
import { ContactDataRegister } from "./StepsFormRegister/ContactDataRegister";
import { ValidationRegister } from "./StepsFormRegister/ValidationRegister";
import { BackButtonHeader, CloseButtonHeader, ContainerSteps, HeaderSteps, HeaderTitle } from "./DynamicForm.styles";
import { StepsRegisterEnum } from "../../@enum/StepsEnum";
import { Steps } from "antd";
import { CodeValidatorRegister } from "./StepsFormRegister/CodeValidatorRegister";

export const DynamicFormShowPage = () => {
  const [step, setStep] = useState<number>(0)
  const [stepCounter, setStepCounter] = useState(1)
  
  const updateStep = (stepPosition: number) => {
    setStep(stepPosition)
  }
  
  const showSelectedStep = () => {
    switch (step) {
      case 0:
        return <AccessRegister updateStep={updateStep}/>
        break;
      
      case 1:
        return <PersonalDataRegister updateStep={updateStep}/>
        break;
      
      case 2:
        return <ContactDataRegister updateStep={updateStep}/>
        break;
      
      case 3:
        return <ValidationRegister updateStep={updateStep}/>
        break;
      
      case 4:
        return <CodeValidatorRegister updateStep={updateStep}/>
        break;
      
      default:
        return null
      
    }
  }
  
  function handleClose() {
    console.log('fechar')
  }
  
  function handleGoBack() {
    if (step > 0) {
      setStepCounter(step - 1)
      setStep(step - 1)
    }
  }
  
  return (
    <ContainerSteps>
      
      <HeaderSteps>
        {step > 0 &&
          <BackButtonHeader>
            <CaretLeft size={16} onClick={handleGoBack}/>
          </BackButtonHeader>
        }
        <CloseButtonHeader>
          <XCircle size={16} onClick={handleClose}/>
        </CloseButtonHeader>
      </HeaderSteps>
      
      <HeaderTitle>{StepsRegisterEnum[step]}</HeaderTitle>
      
      <Steps
        current={stepCounter}
        size="small"
        // progressDot
        items={[
          {}, {}, {}, {},
        ]}
      />
      {showSelectedStep()}
    
    
    </ContainerSteps>
  );
};
