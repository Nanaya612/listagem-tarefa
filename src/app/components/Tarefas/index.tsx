import Tarefa from '@/types/types';
import styles from './tarefas.module.css';

type Props = {
  Tarefa: Tarefa;
};
const Tarefas = ({ Tarefa }: Props) => {
  const { tarefa, id } = Tarefa;
  return (
    <li key={id} className={styles.tarefa}>
      {tarefa}
    </li>
  );
};

export default Tarefas;
