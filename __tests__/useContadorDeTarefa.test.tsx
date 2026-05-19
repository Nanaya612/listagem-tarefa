import { useContadorDeTarefa } from '@/hooks/useContadorDeTarefa';
import { act, renderHook } from '@testing-library/react';

test('Retornar a contagem correta das tarefas', () => {
  const tarefas: object[] = [];
  const { result } = renderHook(() => useContadorDeTarefa(tarefas));
  expect(result.current.valor).toBe(0);

  act(() => {
    tarefas.push({ titulo: 'hello' }, { titulo: 'world' });
    result.current.incrementar();
  });
  expect(result.current.valor).toBe(2);
});
