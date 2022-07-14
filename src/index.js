import './index.css';
import addTasks from './modules/addTasks';
import displayEachTask from './modules/displayUi';
import editTask from './modules/edit';
import deleteTodo from './modules/delete';
import completeTask from './modules/completetask';
import clearCompletedTasks from './modules/clearCompletedTask';

displayEachTask();
addTasks();
editTask();
deleteTodo();
completeTask();
clearCompletedTasks();