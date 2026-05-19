import '@testing-library/jest-dom';
import { ListContext } from '@/contexts/ListContext';
import { render, screen } from '@testing-library/react';
import ListaTarefas from '@/app/components/ListaTarefas';
import Tarefa from '@/types/types';

test('Testar renderização do componente Lista de Tarefas corretamente', () => {
  const mockTarefa: Tarefa[] = [
    { tarefa: 'Tarefa 1', id: 1 },
    { tarefa: 'Tarefa 2', id: 2 },
  ];
  const mockSetTarefas = jest.fn();
  render(
    <ListContext.Provider
      value={{ tarefas: mockTarefa, setTarefas: mockSetTarefas }}
    >
      <ListaTarefas />
    </ListContext.Provider>,
  );

  expect(screen.getByText('Tarefa 1')).toBeInTheDocument();
  expect(screen.getByText('Tarefa 2')).toBeInTheDocument();
  expect(screen.getAllByRole('listitem')).toHaveLength(2);
});
