'use client';
import { createContext, useContext, useState } from 'react';

export const ListContext = createContext() ?? {};
export function ListProvider({ children }) {
  const [tarefas, setTarefas] = useState([]);
  return (
    <ListContext.Provider value={{ tarefas, setTarefas }}>
      {children}
    </ListContext.Provider>
  );
}
