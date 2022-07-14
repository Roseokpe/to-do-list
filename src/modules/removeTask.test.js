import {
  deleteCompletedTodoItem,
  deleteOnlyOne,
} from './__mocks__/mockDelete';
import localStorageMock from './__mocks__/mockLocalStorage';

describe('delete Task', () => {
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
      completed: true,
    },
    {
      index: 4,
      description: 'Hello 4',
      completed: false,
    },
  ];

  it('Should delete the completed tasks', () => {
    expect(deleteCompletedTodoItem(tasks)).toHaveLength(2);
  });

  it('the localstore must update after delete', () => {
    expect(localStorageMock.getItem('data')[1].description).toBe('Hello 4');
  });

  it('the localstore must update after delete', () => {
    expect(localStorageMock.getItem('data')[1].index).toBe(1);
  });

  it('Index of task 0 should be 1', () => {
    expect(deleteCompletedTodoItem(tasks)[0].index).toBe(0);
  });
});

describe('deleteOnlyOne', () => {
  const tasks = [
    {
      index: 0,
      description: 'Hello 1',
      completed: false,
    },
    {
      index: 1,
      description: 'Hello 2',
      completed: true,
    },
    {
      index: 2,
      description: 'Hello 3',
      completed: false,
    },
  ];

  it('should delete one tasks from array', () => {
    expect(deleteOnlyOne(tasks, 2)).toHaveLength(2);
  });

  it('Local storage should update after delete', () => {
    expect(localStorageMock.getItem('data')).toHaveLength(2);
  });

  it('Local storage should update after delete', () => {
    expect(localStorageMock.getItem('data')).toBe(tasks);
  });

  it('Index should update after delete one item', () => {
    expect(tasks[1].index).toBe(1);
  });

  it('Should return update array', () => {
    expect(deleteOnlyOne(tasks, 0)).toEqual([{
      index: 0,
      description: 'Hello 2',
      completed: true,
    }]);
  });
});