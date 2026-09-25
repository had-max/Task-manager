export function deleteTask(items, taskID) {

    for (const [index, task] of items.entries()) {
        if (task.id == taskID) {
            items.splice(index, 1)
            return true
        }
        const deleted = deleteTask(task.children, taskID)
        if (deleted) return true
    }
    return null
}