import {
  deleteCompletedTodoItem,
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