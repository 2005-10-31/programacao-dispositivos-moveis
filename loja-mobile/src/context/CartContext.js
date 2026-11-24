import { createContext, useContext, useState } from 'react';

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [itens, setItens] = useState([]);

  const adicionar = (produto) => {
    setItens((atual) => {
      const existe = atual.some((item) => item.id === produto.id);
      if (existe) {
        return atual.map((item) =>
          item.id === produto.id
            ? { ...item, quantidade: item.quantidade + 1 }
            : item
        );
      }
      return [
        ...atual,
        { id: produto.id, nome: produto.nome, preco: produto.preco, quantidade: 1 },
      ];
    });
  };

  const remover = (id) => {
    setItens((atual) =>
      atual
        .map((item) =>
          item.id === id ? { ...item, quantidade: item.quantidade - 1 } : item
        )
        .filter((item) => item.quantidade > 0)
    );
  };

  const limpar = () => setItens([]);

  const totalItens = itens.reduce((soma, item) => soma + item.quantidade, 0);
  const totalPreco = itens.reduce(
    (soma, item) => soma + item.preco * item.quantidade,
    0
  );

  const value = { itens, adicionar, remover, limpar, totalItens, totalPreco };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error('useCart deve ser usado dentro de um CartProvider');
  }
  return ctx;
}