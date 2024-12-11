import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {createContext, ReactNode, useEffect, useState} from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}
const AUTH_KEY = 'IS_AUTHENTICATED';

export const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
});

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const loadAuthState = async () => {
      try {
        const storedAuthState = await AsyncStorage.getItem(AUTH_KEY);
        if (storedAuthState) {
          setIsAuthenticated(JSON.parse(storedAuthState));
        }
      } catch (e) {
        console.error('Error al cargar el estado de autenticación:', e);
      }
    };

    loadAuthState();
  }, []);

  const saveAuthState = async (state: boolean) => {
    try {
      await AsyncStorage.setItem(AUTH_KEY, JSON.stringify(state));
    } catch (e) {
      console.error('Error al guardar el estado de autenticación:', e);
    }
  };

  const login = () => {
    setIsAuthenticated(true);
    saveAuthState(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
    saveAuthState(false);
  };

  return (
    <AuthContext.Provider value={{isAuthenticated, login, logout}}>
      {children}
    </AuthContext.Provider>
  );
};
