import React, { useState } from 'react';
import Button from './buttons/Button';
import Input from './inputs/Input';
import './Form.css';
import { validationRegisterForm } from '../../services/formAuthValidation';
import { toast } from 'react-toastify';

type FormErrors = {
  firstName: string | null;
  lastName: string | null;
  username: string | null;
  email: string | null;
  password: string | null;
};


type FormData = {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
};

const RegisterForm: React.FC = () => {
  const [errors, setErrors] = useState<FormErrors>({
    firstName: null,
    lastName: null,
    username: null,
    email: null,
    password: null,
  });

  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const _errors = validationRegisterForm(formData);
    if (_errors) {
      setErrors({
        ...errors, // Conserve les valeurs actuelles des autres propriétés
        ..._errors, // Met à jour firstName et lastName
      });
    }
    toast.error(`Formulaire soumis : ${formData.lastName} ${formData.firstName}`);
  };
  

  console.log(formData);

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <Input
  name="lastName"
  label="Nom"
  placeholder="Entrez votre nom..."
  value={formData.lastName}
  onChange={handleChange}
  error={errors.lastName ?? undefined} // Fournit undefined si errors.lastName est null
/>
<Input
  name="firstName"
  label="Prénom"
  placeholder="Entrez votre prénom..."
  value={formData.firstName}
  onChange={handleChange}
  error={errors.firstName ?? undefined} // Fournit undefined si errors.firstName est null
/>

      <Input
        name="username"
        label="Nom d'utilisateur :"
        placeholder="Entrez votre nom..."
        value={formData.username}
        onChange={handleChange}
      />
      <Input
        name="email"
        label="Email"
        placeholder="Entrez votre email..."
        value={formData.email}
        onChange={handleChange}
      />
      <Input
        name="password"
        label="Mot de passe"
        placeholder="Entrez votre mot de passe..."
        value={formData.password}
        onChange={handleChange}
      />
      <Button type="submit">S'enregistrer</Button>
    </form>
  );
};

export default RegisterForm;
