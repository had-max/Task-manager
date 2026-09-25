import { TaskRepository } from "./../../infrastructure/storage/taskRepository.js"


export function executeDisplayChildTask(id, isOpen) {
    const task = TaskRepository.findById(id)

    task.isOpen = isOpen
    TaskRepository.save()
}