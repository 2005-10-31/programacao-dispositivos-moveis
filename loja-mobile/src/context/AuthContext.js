import { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [usuario, setUsuario] = useState(null);

  const entrar = (nome) => {
    const limpo = nome.trim();
    if (!limpo) return;
    setUsuario(limpo);
  };

  const sair = () => setUsuario(null);

  const value = { usuario, entrar, sair };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  return ctx;
}