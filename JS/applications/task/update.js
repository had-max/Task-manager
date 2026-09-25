import { TaskRepository } from "../../infrastructure/storage/taskRepository.js"

export function executeUpdateText(input, id) {
    const task = TaskRepository.findById(id)

    task.text = input.value
    TaskRepository.save()
}

export function executeUpdatePriority(target, id) {
    const task = TaskRepository.findById(id)
    task.priority = target.dataset.value
    TaskRepository.save()

}