import { TaskRepository } from "../../infrastructure/storage/taskRepository.js"
import { reorderTasks } from "./../../domain/reorder.js"
import { getParent } from "../../domain/taskTree.js"

export function executeReorderTasks(child1Id, child2Id) {
    const child1 = TaskRepository.findById(child1Id)
    const child2 = TaskRepository.findById(child2Id)
    const tasks = TaskRepository.get()

    if (!child1 || !child2) return false

    const parent = getParent(tasks, child1)?.children || tasks
    if (!parent) return false

    const changed = reorderTasks(parent, child1, child2)
    if (!changed) return false

    TaskRepository.save()

    return true
}