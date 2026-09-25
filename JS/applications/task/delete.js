import { TaskRepository } from "./../../infrastructure/storage/taskRepository.js"
import { deleteTask } from "./../../domain/delete.js"


export function executeDeleteTask(id) {
    const tasks = TaskRepository.get()
    deleteTask(tasks, id)

    TaskRepository.save()
}