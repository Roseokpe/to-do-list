import { tasks } from './tasks';
import displayEachTask from './displayUi';
import editTask from './edit';

const clearCompletedTasks = () => {
  const clearCT = document.getElementById('clearBtn');
  const ellipse = document.querySelectorAll('.ellipse');
  const tasksDiv = document.querySelector('.to-do');
  const taskDiv = document.querySelectorAll('.created-div');
  const edit = document.querySelectorAll('.edit');
  const trash = document.querySelectorAll('.trash');

  for (let i = 0; i < taskDiv.length; i += 1) {
    taskDiv[i].addEventListener('click', () => {
      taskDiv[i].classList.toggle('highlight');
      trash[i].classList.toggle('hidden');
      ellipse[i].classList.toggle('hidden');
      edit[i].classList.toggle('hidden');
    });
  }

  clearCT.addEventListener('click', () => {
    const ttasks = tasks.filter((data) => data.completed !== true);
    for (let i = 0; i < ttasks.length; i += 1) ttasks[i].index = i + 1;
    localStorage.setItem('tasks', JSON.stringify(ttasks));
    tasksDiv.innerHTML = '';
    displayEachTask();
    clearCompletedTasks();
    editTask();
    window.location.reload(false);
  });
};

export default clearCompletedTasks;