import '@testing-library/jest-dom';
import NovaTarefa from '@/app/components/NovaTarefa';
import { fireEvent, render, screen } from '@testing-library/react';
import { ListContext } from '@/contexts/ListContext';

test('Exibir menssagem de erro caso o input estiver vaziu', () => {
  const mockTarefa: object[] = [];
  const mockSetTarefas = jest.fn();
  render(
    <ListContext.Provider
      value={{ tarefas: mockTarefa, setTarefas: mockSetTarefas }}
    >
      <NovaTarefa />
    </ListContext.Provider>,
  );

  fireEvent.click(screen.getByRole('button'));

  expect(
    screen.getByText('Por favor, digitar uma tarefa!'),
  ).toBeInTheDocument();
});

test('Menssagem de Erro deve sair no submit com input preenchido', () => {
  const mockTarefa: object[] = [];
  const mockSetTarefas = jest.fn();
  render(
    <ListContext.Provider
      value={{ tarefas: mockTarefa, setTarefas: mockSetTarefas }}
    >
      <NovaTarefa />
    </ListContext.Provider>,
  );

  fireEvent.click(screen.getByRole('button'));
  expect(
    screen.getByText('Por favor, digitar uma tarefa!'),
  ).toBeInTheDocument();

  const inputTarefa = screen.getByRole('textbox');
  fireEvent.change(inputTarefa, { target: { value: 'Tarefa 1' } });
  fireEvent.click(screen.getByRole('button'));
  expect(
    screen.queryByText('Por favor, digitar uma tarefa!'),
  ).not.toBeInTheDocument();
});

test('testar se a função setTarefas é chamada com o preenchimento do input', () => {
  const mockTarefa: object[] = [];
  const mockSetTarefas = jest.fn();
  render(
    <ListContext.Provider
      value={{ tarefas: mockTarefa, setTarefas: mockSetTarefas }}
    >
      <NovaTarefa />
    </ListContext.Provider>,
  );

  const inputTarefa = screen.getByRole('textbox');
  fireEvent.change(inputTarefa, { target: { value: 'Tarefa 1' } });
  fireEvent.click(screen.getByRole('button'));

  expect(mockSetTarefas).toHaveBeenCalledTimes(1);
  expect(mockSetTarefas).toHaveBeenCalledWith([{ id: 1, tarefa: 'Tarefa 1' }]);
});
