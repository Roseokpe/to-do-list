import './index.css';

const toDoList = [
  {
    description: 'Finsish my project',
    completed: false,
    index: 1,
  },
  {
    description: 'Do some reading',
    completed: false,
    index: 2,
  },
  {
    description: 'Have some rest',
    completed: false,
    index: 3,
  },
];

toDoList.forEach((toDoItem) => {
  const todoLists = document.querySelector('.to-do');
  const taskContainer = document.createElement('div');
  taskContainer.classList.add('created-div');
  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.classList.add('check');
  taskContainer.append(checkbox, toDoItem.description);
  todoLists.appendChild(taskContainer);
});
