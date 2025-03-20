import React, { useState } from 'react';
import { Button } from '@mantine/core';

interface InputProps {
  label: string;
  placeholder: string;
  inputType?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  icon?: React.ReactNode;
  description: string;
  name: string;
}

const Input = ({
  label,
  inputType = 'text',
  placeholder,
  description,
  value,
  onChange,
  name,
}: InputProps) => {
  return (
    <>
      <p>{label}</p>
      <p>{description}</p>
      <input
        title="Полное имя"
        type={inputType} 
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
      />
    </>
  );
};

interface SigninProps {
  onSubmit: (data: SigninFormData) => void;
}

interface SigninFormData {
  email: string;
  password: string;
}

export function Signin({ onSubmit }: SigninProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const formData: SigninFormData = { email, password };
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        inputType="email"
        label="Email"
        placeholder="Введите адрес электронной почты"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        name="email"
      />

      <Input
        inputType="password"
        label="Пароль"
        placeholder="Введите пароль"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        name="password" 
      />

      <div style={{ marginTop: '15px' }}>

      <Button type="submit" fullWidth mt="md" >
        Войти
      </Button>
      </div>
    </form>
  );
}