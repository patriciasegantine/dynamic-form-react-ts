// import { FieldValidation } from "../../stores/module-register/module-register-reducer";

// export const addRuleRequired = (currentRules: Rule[], validation: FieldValidation) => {
//   currentRules.push({
//     required: true,
//     message: validation.message
//   })
// };

// export const addRuleMaxLength = (currentRules: Rule[], validation: FieldValidation) => {
//   currentRules.push({
//     max: validation.parameters,
//     message: validation.message
//   })
// };
//
// export const addRuleMinLength = (currentRules: Rule[], validation: FieldValidation) => {
//   currentRules.push({
//     min: validation.parameters,
//     message: validation.message
//   })
// };
//
// export const addRuleCPF = (currentRules: Rule[], validation: FieldValidation) => {
//   currentRules.push({
//     validator: async (_, cpf: string) => {
//
//       if (isValidCPF(cpf)) return Promise.resolve(true);
//       return Promise.reject(false)
//     },
//     message: validation.message
//   })
// };
//
// export const addRuleCNPJ = (currentRules: Rule[], validation: FieldValidation) => {
//   currentRules.push({
//     validator: async (_, cnpj: string) => {
//
//       if (isValidCNPJ(cnpj)) return Promise.resolve(true);
//       return Promise.reject(false)
//     },
//     message: validation.message
//   })
// };
//
// export const addRuleCEP = (currentRules: Rule[], validation: FieldValidation) => {
//   currentRules.push({
//     validator: async (_, cep: string) => {
//
//       if (isValidCEP(cep)) return Promise.resolve(true);
//       return Promise.reject(false)
//     },
//     message: validation.message
//   })
// };
//
// export const addRulePhone = (currentRules: Rule[], validation: FieldValidation) => {
//   currentRules.push({
//     validator: async (_, phone: string) => {
//
//       if (isValidPhone(phone)) return Promise.resolve(true);
//       return Promise.reject(false)
//     },
//     message: validation.message
//   })
// };
//
// export const addRuleEmail = (currentRules: Rule[], validation: FieldValidation) => {
//   currentRules.push({
//     validator: async (_, email: string) => {
//
//       if (isValidEmail(email)) return Promise.resolve(true);
//       return Promise.reject(false)
//     },
//     message: validation.message
//   })
// };
//
// export const addRulePassword = (currentRules: Rule[], validation: FieldValidation) => {
//   currentRules.push({
//     validator: async (_, password: string) => {
//
//       if (isValidPassword(password)) return Promise.resolve(true);
//       return Promise.reject(false)
//     },
//     message: validation.message
//   })
// };

export const isValidCPF = (cpf: string): boolean => {
  
  let validationRegexCPF = /\d{3}.?\d{3}.?\d{3}-?\d{2}/g
  return !!cpf.match(validationRegexCPF);
}

export const isValidCNPJ = (cep: string): boolean => {
  let validationRegexCNPJ = /\d{4}[.\s]?\d{3}[.\s]?\d{4}[/\s]?\d{2}/g
  return !!cep.match(validationRegexCNPJ);
}

export const isValidCEP = (cep: string): boolean => {
  let validationRegexCEP = /\d{5}[-\s]?\d{3}/g
  return !!cep.match(validationRegexCEP);
}

export const isValidPhone = (phone: string): boolean => {
  let validationRegexPhone = /[(]?\d{2}[)]?[-\s]?\d{5}[-\s]?\d{4}/g
  return !!phone.match(validationRegexPhone);
}

export const isValidEmail = (email: string): boolean => {
  let validationRegexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g
  return !!email.match(validationRegexEmail);
}

export const isValidPassword = (password: string): boolean => {
  let validationRegexPassword = /^(?=.*\d)(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹])(?=.*[a-z])(?=.*[A-Z]).{6,8}$/g
  
  return !!password.match(validationRegexPassword);
}

// export const getFieldFormRules = (validations: FieldValidation[]): Rule[] => {
//   let rules: Rule[] = [];
// validations.forEach(validation => {
//   switch (validation.type) {
//     case ValidationType.RequiredValidator:
//       addRuleRequired(rules, validation);
//       break;
//     case ValidationType.MaxLengthValidator:
//       addRuleMaxLength(rules, validation);
//       break;
//     case ValidationType.MinLengthValidator:
//       addRuleMinLength(rules, validation);
//       break;
//     case ValidationType.CPFValidator:
//       addRuleCPF(rules, validation);
//       break;
//     case ValidationType.CEPValidator:
//       addRuleCEP(rules, validation);
//       break;
//     case ValidationType.CNPJValidator:
//       addRuleCNPJ(rules, validation);
//       break;
//     case ValidationType.PhoneValidator:
//       addRulePhone(rules, validation);
//       break;
//     case ValidationType.EmailValidator:
//       addRuleEmail(rules, validation);
//       break;
//     case ValidationType.PasswordValidator:
//       addRulePassword(rules, validation);
//       break;
//     default:
//       break;
//   }
// })
// return rules;
// }
