import localStorageMock from './mockLocalStorage';

function todoStatusUpdate(tasks, index) {
  if (tasks[index].completed === true) {
    tasks[index].completed = false;
  } else {
    tasks[index].completed = true;
  }
  localStorageMock.setItem('data', tasks);
  return tasks;
}

export default todoStatusUpdate;