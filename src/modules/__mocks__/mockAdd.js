import localStorageMock from './mockLocalStorage';

const addTodo = (tasks) => {
  const inputText = document.getElementById('input-text');
  const newItem = {
    index: Number(`${tasks.length}`),
    description: `${inputText.value}`,
    completed: false,
  };
  tasks.push(newItem);
  localStorageMock.setItem('data', tasks);
  return tasks;
};

export default addTodo;