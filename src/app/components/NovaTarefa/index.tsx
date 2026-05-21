'use client';
import { ListContext } from '@/contexts/ListContext';
import { useContadorDeTarefa } from '@/hooks/useContadorDeTarefa';
import { ChangeEvent, FormEvent, useContext, useEffect, useState } from 'react';
import styles from './novatarefa.module.css';

const NovaTarefa = () => {
  const { tarefas, setTarefas } = useContext(ListContext);
  const [valor, setValor] = useState('');
  const [erro, setErro] = useState('');
  const contador = useContadorDeTarefa(tarefas);
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValor(e.target.value);
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (valor == '') {
      setErro('Por favor, digitar uma tarefa!');
    } else setErro('');
    if (valor == '') return;
    if (!tarefas) return;
    const quantidade = tarefas.length;
    const novaTarefa = { tarefa: valor, id: quantidade + 1 };
    setTarefas([...tarefas, novaTarefa]);
    console.log(tarefas);
    setValor('');
  };
  useEffect(() => {
    contador.incrementar();
  }, [contador]);
  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.form__input}
          type="text"
          placeholder="Digite uma Tarefa"
          value={valor}
          onChange={onChange}
        />
        <button className={styles.form__button} type="submit">
          <span className={styles.form__span}>Adicionar</span>
        </button>
      </form>
      <div className={styles.container}>
        <p className={styles.container__alert}>{erro}</p>
        <p>Quantidade de Tarefas: {contador.valor}</p>
      </div>
    </>
  );
};

export default NovaTarefa;
