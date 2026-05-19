import { useState } from 'react';

export function useContadorDeTarefa(tarefas: Array<object>) {
  const [valor, setValor] = useState(tarefas?.length);
  const incrementar = () => {
    setValor(tarefas?.length);
    return valor;
  };
  return {
    valor,
    incrementar,
  };
}
