/**
 * @jest-environment jsdom
 */

import addTodo from './__mocks__/mockAdd';
import localStorageMock from './__mocks__/mockLocalStorage';

describe('addTodo', () => {
  document.body.innerHTML = '<input id="input-text" value="Learn JavaScript">';
  const tasks = [];

  it('Should return task array with attached todo object', () => {
    expect(addTodo(tasks)).toHaveLength(1);
  });

  it('Local storage should update after add new item', () => {
    expect(localStorageMock.getItem('data')).toHaveLength(1);
  });

  it('Should return task array with attached todo object', () => {
    expect(addTodo(tasks)).toHaveLength(2);
  });

  it('Description should have input value', () => {
    expect(tasks[0].description).toBe('Learn JavaScript');
  });

  it('Status should be false', () => {
    expect(tasks[0].completed).toBe(false);
  });

  it('Status should be false', () => {
    expect(tasks[1].index).toBe(1);
  });
});
