import { useState, createContext, useContext, useEffect } from 'react';
import axios from 'axios';

export const AuthContext = createContext({});

export const useAuth = () => {
  return useContext(AuthContext);
};

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [authorized, setAuthorized] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    setErrors(null);
  }, []);

  const loginUser = async (userData, history) => {
    setLoading(true);
    await axios
      .post('/api/signin', userData)
      .then(async (response) => {
        setAuthorizationToken(response.data.token);
        await getUserData();
        setLoading(false);
        history.push('/');
      })
      .catch((err) => {
        if (err) setErrors(err.response);
        console.log(err);
      });
  };

  const getUserData = async () => {
    await axios
      .get('/api/profile')
      .then((response) => {
        setCurrentUser(response.data);
        setAuthorized(true);
      })
      .catch((err) => {
        if (err) setErrors(err.response);
        console.error(err.response);
      });
  };

  const setAuthorizationToken = (token) => {
    const fireToken = `Bearer ${token}`;
    axios.defaults.headers.common['Authorization'] = fireToken;
  };

  return (
    <AuthContext.Provider
      value={{ loginUser, authorized, currentUser, errors, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
}
