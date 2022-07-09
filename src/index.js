import './index.css';
import addtask from './modules/addTasks';
import displayEachTask from './modules/displayUi';
import editTask from './modules/edit';
import deleteTodo from './modules/delete';
import completeTask from './modules/completetask';
import clearCompletedTasks from './modules/clearCompletedTask';

displayEachTask();
addtask();
editTask();
deleteTodo();
completeTask();
clearCompletedTasks();