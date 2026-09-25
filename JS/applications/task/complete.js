import { TaskRepository } from "./../../infrastructure/storage/taskRepository.js"

import {
    syncChildrenState,
    // syncParentState
} from "./../../domain/complete.js"

export function executeCompleteTask(id) {
    const task = TaskRepository.findById(id)

    task.done = !task.done
    syncChildrenState(task, task.children)
    // syncParentState(e)

    TaskRepository.save()
}