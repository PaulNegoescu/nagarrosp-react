import jwtDecode from 'jwt-decode';
import { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useAuthContext } from './AuthContext';

export function Auth() {
  const [values, setValues] = useState({
    email: '',
    password: '',
    retype: '',
  });

  const [formError, setFormError] = useState(null);
  const { login } = useAuthContext();
  const location = useLocation();
  const history = useHistory();

  let isLogin = true;
  if (location.pathname === '/register') {
    isLogin = false;
  }

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

    const urlApi =
      'http://localhost:3001/' + ((isLogin && 'login') || 'register');
    //Object destructuring
    const result = await fetch(urlApi, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: values.email, password: values.password }),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return res.text();
    });

    if (result.accessToken) {
      login(result.accessToken, {
        email: jwtDecode(result.accessToken).email,
      });
    } else {
      // Error as string from server
      setFormError(
        (isLogin && 'Invalid email or password') || 'Email already exists'
      );
      return;
    }

    setFormError(null);
    history.push('/movies');
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>{(isLogin && 'Login') || 'Register'}</h1>
      {formError && <h2 style={{ color: '#cc0000' }}>{formError}</h2>}
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
      {!isLogin && (
        <p>
          <label htmlFor="retype">Retype Password</label>
          <input
            type="password"
            id="retype"
            name="retype"
            onChange={handleInputChange}
            value={values.retype}
          />
        </p>
      )}
      <p>
        <button type="submit">{(isLogin && 'Login') || 'Register'}</button>
      </p>
    </form>
  );
}
