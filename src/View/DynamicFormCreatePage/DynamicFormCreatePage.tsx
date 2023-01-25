import React from 'react';
import { AccessStepRegister } from "./FormSteps/AccessStepRegister";
import { PersonalStepRegister } from "./FormSteps/PersonalStepRegister";
import { ArrowLeft } from "phosphor-react";
import { NavLink } from "react-router-dom";
import { RouterEnum } from "../../@enum/RouterEnum";
import { ContactStepRegister } from "./FormSteps/ContactStepRegister";

export const DynamicFormCreatePage = () => {
  
  // const navigator = useNavigator()
  
  return (
    <section>
      <NavLink to={RouterEnum.Home}>
        <ArrowLeft size={20}/>
        return
      </NavLink>
      
      <AccessStepRegister/>
      <PersonalStepRegister/>
      <ContactStepRegister/>
    </section>
  );
};
