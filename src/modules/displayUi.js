import { tasks } from './tasks';

const displayUI = ({ description }) => {
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

  taskContainer.append(checkbox, descPara, trash, ellipse);
  todoLists.appendChild(taskContainer);
};

const displayEachTask = () => {
  tasks.forEach((task) => {
    displayUI(task);
  });
};

export default displayEachTask;
