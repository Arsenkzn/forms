import React, { useState } from 'react';
import { Button } from '@mantine/core';
import { IconAt } from '@tabler/icons-react';

interface InputProps {

  label: string;
  placeholder: string;
  inputType?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  icon?: React.ReactNode;
  description: string;
}

const Input = ({ label, inputType = 'text', placeholder, description, value, onChange, icon }: InputProps) => {
  return (
    <> 
    <p>{label}</p>
    <p>{description}</p>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {icon && <span>{icon}</span>}
    <input
      title='Full name'
      type={inputType}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      />
      </div>
    </>
  );
};

interface SignupProps {
  onSubmit: (data: SignupFormData) => void;
}

interface SignupFormData {
  name: string;
  nickname: string;
  email: string;
  gender: string;
  password: string;
  confirmPassword: string;
}

export function Signup({ onSubmit }: SignupProps) {

  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if(password !== confirmPassword){
      setErrorMessage('Пароли не совпадают');
      return;
    }
    const formData: SignupFormData = {
      name,
      nickname,
      email,
      gender,
      password,
      confirmPassword,
    };
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="Full name"
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.currentTarget.value)}
      />

      <Input
        label="NickName"
        placeholder="NickName"
        icon={<IconAt size="0.8rem" />}
        value={nickname}
        onChange={(e) => setNickname(e.currentTarget.value)}
      />

      <Input
        type="email"
        label="Email"
        placeholder="Введите адрес электронной почты"
        value={email}
        onChange={(e) => setEmail(e.currentTarget.value)}
      />
<div style={{ marginTop: '15px' }}></div>
      <label>
        <input
          type="radio"
          value="male"
          checked={gender === 'male'}
          onChange={() => setGender('male')}
        />
        Мужской
      </label>
      <label>
        <input
          type="radio"
          value="female"
          checked={gender === 'female'}
          onChange={() => setGender('female')}
        />
        Женский
      </label>

      <Input
        type="password"
        label="Пароль"
        placeholder="Введите пароль"
        value={password}
        onChange={(e) => setPassword(e.currentTarget.value)}
      />

      <Input
        type="password"
        label="Повторите пароль"
        placeholder="Повторите пароль"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.currentTarget.value)}
      />

      {errorMessage && <p style={{color:'red'}}>{errorMessage}</p>}

      <div style={{ marginTop: '15px' }}>
      <Button type="submit" fullWidth mt="md">
        Зарегистрироваться
      </Button>
      </div>
    </form>
  );
}
