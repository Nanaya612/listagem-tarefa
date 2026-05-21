'use client';
import res from '@/api/tarefas.json';
import { createContext, useState } from 'react';

export const ListContext = createContext() ?? {};
export function ListProvider({ children }) {
  if (!res) return;
  const [tarefas, setTarefas] = useState(res);
  return (
    <ListContext.Provider value={{ tarefas, setTarefas }}>
      {children}
    </ListContext.Provider>
  );
}
