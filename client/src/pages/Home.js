import React from 'react';
import { useAuth } from '../contexts/AuthContext';

export default function Home() {
  const { currentUser } = useAuth();

  return (
    <div>
      <h1>Home!</h1>
      <p>Bem-vindo, {currentUser.name.first}!</p>
    </div>
  );
}
