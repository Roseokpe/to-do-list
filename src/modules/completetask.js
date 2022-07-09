import { tasks } from './tasks';
import displayEachTask from './displayUi';
import editTask from './edit';

const completeTask = () => {
  const checkbox = document.querySelectorAll('.check');
  const ellipse = document.querySelectorAll('.ellipse');
  const tasksDiv = document.querySelector('.to-do');
  const taskDiv = document.querySelectorAll('.created-div');
  const edit = document.querySelectorAll('.edit');

  for (let i = 0; i < taskDiv.length; i += 1) {
    taskDiv[i].addEventListener('click', () => {
      taskDiv[i].classList.toggle('highlight');
      checkbox[i].classList.toggle('hidden');
      ellipse[i].classList.toggle('hidden');
      edit[i].classList.toggle('hidden');
    });
  }

  checkbox.forEach((item, index) => {
    item.addEventListener('change', (e) => {
      for (let i = 0; i < tasks.length; i += 1) {
        if (tasks[i].index === index + 1) {
          if (e.currentTarget.checked) {
            tasks[i].completed = true;
          } else {
            tasks[i].completed = false;
          }
        }
      }

      localStorage.setItem('tasks', JSON.stringify(tasks));
      tasksDiv.innerHTML = '';
      displayEachTask();
      completeTask();
      editTask();
      window.location.reload();
    });
  });
};

export default completeTask;