'use client';
import Tarefa from '@/types/types';
import Tarefas from '../Tarefas';
import { useContext } from 'react';
import { ListContext } from '@/contexts/ListContext';
import styles from './listatarefa.module.css';

const ListaTarefas = () => {
  const { tarefas } = useContext(ListContext);
  if (!tarefas) return;
  if (tarefas.length == 0) return <p>Nenhuma tarefa adicionada ainda!</p>;
  return (
    <>
      <ul className={styles.list}>
        {tarefas.map((tarefa: Tarefa) => (
          <Tarefas key={tarefa.id} Tarefa={tarefa} />
        ))}
      </ul>
    </>
  );
};

export default ListaTarefas;
