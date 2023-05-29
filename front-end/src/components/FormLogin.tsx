import React from "react";
import { useState } from "react";

import StyledFormLogin from "../elements/StyledFormLogin";

const FormLogin = (props: any): JSX.Element => {
  const [state, setState] = React.useState<any>({
    username: "",
    phone: "",
    password: "",
  });

  const { username, phone, password } = state;
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const inputValue: string = e.target.value;
    const inputName: string = e.target.name;
    setState(() => ({
      ...state,
      [inputName]: inputValue,
    }));
  };

  return (
    <StyledFormLogin>
      <label className="label">
        <input
          className="input"
          name="username"
          placeholder="Kullanıcı Adı Giriniz..."
          value={username}
          onChange={handleChange}
        />
      </label>
      <label className="label">
        <input
          className="input"
          name="phone"
          placeholder="Telefon Numarası Giriniz..."
          value={phone}
          onChange={handleChange}
        />
      </label>
      <label className="label">
        <input
          className="input"
          name="password"
          placeholder="Şifre Giriniz..."
          type="password"
          value={password}
          onChange={handleChange}
        />
      </label>
      <button onClick={() => props.onLogin(state)} className="loginBtn">
        Bağlan
      </button>
    </StyledFormLogin>
  );
};

export default FormLogin;
