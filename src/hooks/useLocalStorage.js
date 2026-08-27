import { useState, useEffect } from 'react';

export function useLocalStorage(chave, valorInicial) {
  const [valor, setValor] = useState(() => {
    const salvo = window.localStorage.getItem(chave);
    return salvo ? JSON.parse(salvo) : valorInicial;
  });

  useEffect(() => {
    window.localStorage.setItem(chave, JSON.stringify(valor));
  }, [chave, valor]);

  return [valor, setValor];
}
