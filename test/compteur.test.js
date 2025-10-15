const TaskManager = require('../lib/compteur');

test('countDone compte les tâches faites', () => {
  const tm = new TaskManager();
  tm.addTask('a');
  tm.addTask('b');
  tm.toggleTask(0);
  expect(tm.countDone()).toBe(1);
});