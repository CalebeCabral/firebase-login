import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import Spinner from 'react-bootstrap/Spinner';
import styles from '../styles/pages/Forms.module.css';

export default function Login({ history }) {
  const { loginUser, errors, loading, currentUser } = useAuth();

  const [email, setEmail] = useState('calebe@calebe.com');
  const [password, setPassword] = useState('123456');

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email: email,
      password: password,
    };
    loginUser(userData, history);
  };
  console.log(loading);

  return (
    <div className={styles.formsWrapper}>
      <form onSubmit={handleSubmit} className={styles.formContainer}>
        <p>{currentUser && currentUser.email}</p>
        <h5>Login</h5>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail"
        />
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Senha"
        />
        {errors && <div className={styles.errors}>{errors.message}</div>}
        <div className={styles.formActions}>
          {loading ? (
            <button className={styles.entrar} type="submit" disabled>
              <Spinner animation="border" size="sm" />
            </button>
          ) : (
            <button className={styles.entrar} type="submit">
              Entrar
            </button>
          )}
          <button type="submit">Recuperar Senha</button>
          <button
            onClick={() => {
              history.push('/cadastro');
            }}
            type="button"
          >
            Cadastrar
          </button>
        </div>
      </form>
    </div>
  );
}
