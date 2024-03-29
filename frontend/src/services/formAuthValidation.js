import { isLength } from 'validator'

const validationRegisterForm = (formData) => {
  const errors = {}
  if (typeof formData === 'object') {
    if (!isLength(formData.firstName, { min: 2, max: undefined })) {
      errors.firstName = 'First name is invalid'
    }
    if (!isLength(formData.lastName, { min: 2, max: undefined })) {
      errors.lastName = 'Last name is invalid'
    }
  } else {
    throw new Error('Invalid parameter type')
  }
  return errors
}

export { validationRegisterForm }
