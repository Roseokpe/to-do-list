import localStorageMock from './__mocks__/mockLocalStorage';
import editToDo from './__mocks__/mockEdittask';

describe('edit Task', () => {
  const tasks = [
    {
      index: 1,
      description: 'Hello 1',
      completed: false,
    },
    {
      index: 2,
      description: 'Hello 2',
      completed: true,
    },
    {
      index: 3,
      description: 'Hello 3',
      completed: false,
    },
  ];

  it('should check if a task editable', () => {
    expect(editToDo(tasks, 0, 'Finish project')).toEqual([
      { completed: false, description: 'Finish project', index: 1 },
      { completed: true, description: 'Hello 2', index: 2 },
      { completed: false, description: 'Hello 3', index: 3 },
    ]);
  });

  it('Local storage should update after edit', () => {
    expect(localStorageMock.getItem('data')[0].description).toBe('Finish project');
  });

  it('Array length shouldnt change', () => {
    expect(tasks.length).toBe(3);
  });
});