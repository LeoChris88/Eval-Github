class TaskManager {
  constructor() {
    this.tasks = [];
  }

  addTask(name) {
    this.tasks.push({ name, done: false });
  }

  toggleTask(index) {
    this.tasks[index].done = !this.tasks[index].done;
  }

  countDone() {
    return this.tasks.filter(t => t.done).length;
  }
}

module.exports = TaskManager;