import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';

import PageNavbar from './components/Navbar';

import Home from './pages/Home';
import DadosBasicos from './pages/DadosBasicos';
import Localizacao from './pages/Localizacao';
import Login from './pages/Login';
import SignUp from './pages/Signup';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <Router>
      <AuthProvider>
        <PageNavbar />
        <main className="router-wrapper">
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/cadastro" component={SignUp} />
            <PrivateRoute exact path="/" component={Home} />
            <PrivateRoute path="/perfil" component={DadosBasicos} />
            <PrivateRoute path="/localizacao" component={Localizacao} />
          </Switch>
        </main>
      </AuthProvider>
    </Router>
  );
}

export default App;
