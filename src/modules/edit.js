import { tasks } from './tasks';

const editTask = () => {
  const descriptions = document.querySelectorAll('.para');
  descriptions.forEach((item, index) => {
    item.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        const newtask = item.textContent;
        const filteredTask = tasks.filter((task) => task.index === index + 1);
        tasks[filteredTask[0].index - 1].description = newtask;
        localStorage.setItem('tasks', JSON.stringify(tasks));
      }
    });
  });
};
export default editTask;
