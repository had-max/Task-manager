import { findTask } from "../../domain/taskTree.js"
const tasks = JSON.parse(localStorage.getItem('tasks')) || []

export const TaskRepository = {
    get() {
        return tasks
    },
    save() {
        localStorage.setItem("tasks", JSON.stringify(tasks))
    },
    add(task, parent) {
        parent.push(task)
        this.save(tasks)
    },
    findById(id) {
        return findTask(tasks, id);
    }
}