import Home from '@/app/page';
import { ListProvider } from '@/contexts/ListContext';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

test('Testar renderização das tarefas na pagina principal', () => {
  render(
    <ListProvider>
      <Home />
    </ListProvider>,
  );

  expect(screen.getByText('Tarefa 1')).toBeInTheDocument();
  expect(screen.getByText('Tarefa 2')).toBeInTheDocument();
  expect(screen.getAllByRole('listitem')).toHaveLength(2);
});
