import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from './inputs/Input';
import Button from './buttons/Button';
import './Form.css';
import { useAuth } from '../../contexts/authContext';

type LoginFormData = {
  identifier: string;
  password: string;
};

const LoginForm: React.FC = () => {
  const [formData, setFormData] = useState<LoginFormData>({
    identifier: '',
    password: '',
  });

  const navigate = useNavigate();

  const { state: { user, jwt, error }, login } = useAuth();

  useEffect(() => {
    if (user && jwt) {
      navigate('/dashboard');
    }
  }, [user, jwt]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append('identifier', formData.identifier);
    formDataToSend.append('password', formData.password);
    login(formDataToSend);
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2>SE CONNECTER</h2>
      <Input
        name="identifier"
        label="Email : "
        placeholder="mail@provider.com"
        value={formData.identifier}
        onChange={handleChange}
      />
      <Input
        name="password"
        type="password"
        label="Mot de passe : "
        placeholder=""
        value={formData.password}
        onChange={handleChange}
      />
      {error && <p style={{ color: 'red' }}>{error.message}</p>}
      <Button type="submit">Se connecter</Button>
    </form>
  );
};

export default LoginForm;
