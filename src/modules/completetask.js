import { tasks } from './tasks';
import displayEachTask from './displayUi';
import editTask from './edit';

const completeTask = () => {
  const checkbox = document.querySelectorAll('.check');
  const ellipse = document.querySelectorAll('.ellipse');
  const tasksDiv = document.querySelector('.to-do');
  const taskDiv = document.querySelectorAll('.created-div');

  for (let i = 0; i < taskDiv.length; i += 1) {
    taskDiv[i].addEventListener('click', () => {
      taskDiv[i].classList.toggle('highlight');
      checkbox[i].classList.toggle('hidden');
      ellipse[i].classList.toggle('hidden');
    });
  }

  checkbox.forEach((item, index) => {
    item.addEventListener('change', (e) => {
        for (let i = 0; i < tasks.length; i += 1){
            if(e.checked && tasks[i].index === index + 1) {
            tasks[i].completed = true;
            }
        }

      localStorage.setItem('tasks', JSON.stringify(tasks));
      tasksDiv.innerHTML = '';
      displayEachTask();
      editTask();
      window.location.reload();
    });
  });
};

export default completeTask;