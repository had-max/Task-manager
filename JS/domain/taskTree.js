export function findTask(items, taskID) {
    for (const task of items) {
        if (task.id == taskID) {
            return task
        }

        const found = findTask(task.children, taskID)

        if (found) {
            return found
        }
    }

    return null
}

export function getParent(tasks, child, parent = null) {
    for (const task of tasks) {

        if (task.id === child.id) {
            return parent
        }

        const foundParent = getParent(task.children, child, task)

        if (foundParent) {
            return foundParent
        }
    }

    return null
}

export function areAllChildrenDone(tasks) {

    if (!tasks || tasks.length == 0) return true

    for (const task of tasks) {

        if (!task.done) return false
        if (!areAllChildrenDone(task.children)) return false

    }

    return true
}