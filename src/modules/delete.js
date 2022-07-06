import { tasks } from './tasks';
import displayEachTask from './displayUi';
import editTask from './edit';

const deleteTodo = () => {
  const trash = document.querySelectorAll('.trash');
  const ellipse = document.querySelectorAll('.ellipse');
  const tasksDiv = document.querySelector('.to-do');
  const taskDiv = document.querySelectorAll('.created-div');

  for (let i = 0; i < taskDiv.length; i += 1) {
    taskDiv[i].addEventListener('click', () => {
      taskDiv[i].classList.toggle('highlight');
      trash[i].classList.toggle('hidden');
      ellipse[i].classList.toggle('hidden');
    });
  }

  trash.forEach((item, index) => {
    item.addEventListener('click', (e) => {
      const deletedTask = e.target.parentElement;
      tasksDiv.removeChild(deletedTask);
      const ttasks = tasks.filter((data) => data.index !== index + 1);
      for (let i = 0; i < ttasks.length; i += 1) ttasks[i].index = i + 1;
      localStorage.setItem('tasks', JSON.stringify(ttasks));
      tasksDiv.innerHTML = '';
      displayEachTask();
      deleteTodo();
      editTask();
      window.location.reload();
    });
  });
};

export default deleteTodo;