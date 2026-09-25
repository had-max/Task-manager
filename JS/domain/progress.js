export function progressPrecent(tasks, percentage) {

    if (tasks.length == 0) return 0

    const taskPercent = (percentage / tasks.length)
    let progress = 0

    for (const task of tasks) {

        if (task.done && task.children.length == 0)
            progress += taskPercent

        progress += progressPrecent(task.children, taskPercent)

    }

    return progress
}
