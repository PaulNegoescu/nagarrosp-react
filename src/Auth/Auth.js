import jwtDecode from 'jwt-decode';
import { useState } from 'react';
import { useAuthContext } from './AuthContext';

export function Auth() {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });
  const { login } = useAuthContext();

  function handleInputChange(e) {
    // const newValues = Object.assign({}, values);
    // const newValues = { ...values };
    // newValues[e.target.name] = e.target.value;
    // setValues(newValues);
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const urlApi = 'http://localhost:3001/login';
    //Object destructuring
    const { accessToken } = await fetch(urlApi, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: values.email, password: values.password }),
    }).then((res) => {
      return res.json();
    });

    login(accessToken, {
      email: jwtDecode(accessToken).email,
    });
  }
  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={handleInputChange}
          value={values.email}
        />
      </p>
      <p>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={handleInputChange}
          value={values.password}
        />
      </p>
      <p>
        <button type="submit">Login</button>
      </p>
    </form>
  );
}
