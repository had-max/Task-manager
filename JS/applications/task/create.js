import { createTask } from "./../../domain/create.js"
import { TaskRepository } from "./../../infrastructure/storage/taskRepository.js"


export function executeCreateTask(text, priority, id) {

    const parent = TaskRepository.findById(id)?.children || TaskRepository.get()

    const task = createTask(text, priority)
    if (!task) return

    TaskRepository.add(task, parent)
    return task
}