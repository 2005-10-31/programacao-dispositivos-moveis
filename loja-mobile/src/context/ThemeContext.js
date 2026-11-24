import { createContext, useContext, useState } from 'react';

const temas = {
  claro: {
    fundo: '#F4F1EA',
    cartao: '#FFFFFF',
    texto: '#1C1F26',
    textoSecundario: '#6B7280',
    primaria: '#2F5BDB',
    borda: '#E2DED5',
  },
  escuro: {
    fundo: '#151922',
    cartao: '#1F2532',
    texto: '#F1F3F7',
    textoSecundario: '#9AA3B2',
    primaria: '#8FA8FF',
    borda: '#2C3444',
  },
};

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [modo, setModo] = useState('claro');

  const alternarTema = () => {
    setModo((atual) => (atual === 'claro' ? 'escuro' : 'claro'));
  };

  const value = { modo, tema: temas[modo], alternarTema };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error('useTheme deve ser usado dentro de um ThemeProvider');
  }
  return ctx;
}