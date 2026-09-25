import { progressPrecent } from "../../domain/progress.js"
import { TaskRepository } from "../../infrastructure/storage/taskRepository.js"

export function executeUpdateProgress() {
    const tasks = TaskRepository.get()
    const tasksLength = tasks.length
    const percentage = Math.round(progressPrecent(tasks, 100))
    const completed = tasks.filter(task => task.done).length

    if (tasksLength == 0)
        return {
            tasksLength: 0,
            percentage: 0,
            completed: 0
        }


    return {
        tasksLength,
        percentage,
        completed
    }
}