import Add from './Add';
import { tasks } from './tasks';
import displayEachTask from './displayUi';
import deleteTodo from './delete';

const addtask = () => {
  const input = document.querySelector('.input-task');

  input.addEventListener('keydown', (event) => {
    const tasksContainer = document.querySelector('.task-list');
    if (event.key === 'Enter') {
      tasksContainer.innerHTML = '';
      event.preventDefault();
      const inputValue = input.value;
      const task = new Add(inputValue, false, tasks.length + 1);
      input.value = '';
      tasks.push(task);
      localStorage.setItem('tasks', JSON.stringify(tasks));
      displayEachTask();
      deleteTodo();
    }
  });
};

export default addtask;
