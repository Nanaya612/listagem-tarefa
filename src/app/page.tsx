import ListaTarefas from './components/ListaTarefas';
import NovaTarefa from './components/NovaTarefa';
import Title from './components/Title';
import styles from './page.module.css';

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <Title title={'Lista de Tarefas'}></Title>
        <NovaTarefa />
        <ListaTarefas />
      </div>
    </>
  );
}
