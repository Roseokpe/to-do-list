import { tasks } from './tasks';

const displayUI = ({ description, completed }) => {
  console.log('d:' + description + ' x:' + completed);
  const todoLists = document.querySelector('.to-do');

  const taskContainer = document.createElement('div');
  taskContainer.classList.add('created-div');

  const descPara = document.createElement('p');
  descPara.setAttribute('contenteditable', 'true');
  descPara.classList.add('para');
  descPara.textContent = description;

  const ellipse = document.createElement('i');
  ellipse.setAttribute('class', 'fa-solid fa-ellipsis-vertical');
  ellipse.classList.add('icon', 'ellipse');

  const trash = document.createElement('i');
  trash.setAttribute('class', 'fa-solid fa-trash');
  trash.classList.add('hidden', 'icon', 'trash');

  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.classList.add('check');
  if (completed){
    taskContainer.classList.add('is-completed');
    checkbox.checked = true;
    taskContainer.classList.toggle('highlight');
  }
else{
    taskContainer.classList.remove('is-completed');
  }

  taskContainer.append(checkbox, descPara, trash, ellipse, );
  todoLists.appendChild(taskContainer);
};

const displayEachTask = () => {
  console.log(tasks);
  tasks.forEach((task) => {
    displayUI(task);
    console.log(task);
  });
};

export default displayEachTask;
