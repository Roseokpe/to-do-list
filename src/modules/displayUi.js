import { tasks } from './tasks';

const displayUI = ({ description, completed }) => {
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

  const edit = document.createElement('i');
  edit.setAttribute('class', 'fa-solid fa-edit');
  edit.classList.add('hidden', 'icon', 'edit');

  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.classList.add('check');
  if (completed) {
    taskContainer.classList.add('is-completed');
    checkbox.checked = true;
    taskContainer.classList.toggle('highlight');
  } else {
    taskContainer.classList.remove('is-completed');
  }

  taskContainer.append(checkbox, descPara, edit, trash, ellipse);
  todoLists.appendChild(taskContainer);
};

const displayEachTask = () => {
  tasks.forEach((task) => {
    displayUI(task);
  });
};

export default displayEachTask;
