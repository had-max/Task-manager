import { executeUpdateProgress } from "../../../applications/task/progress.js"

export function updateProgress() {
    const totalEl = document.querySelector(".task-summary__total")
    const completedEl = document.querySelector(".task-summary__completed")
    const percentageEl = document.querySelector(".task-summary__percentage")
    const circleEl = document.querySelector(".task-summary__value")

    const { tasksLength, percentage, completed } = executeUpdateProgress()

    function updateTexts() {
        totalEl.textContent = completed
        completedEl.textContent = tasksLength
        percentageEl.textContent = `${percentage}%`
    }

    function updateCircle() {
        const circumference = 251
        const offset = circumference - (percentage / 100) * circumference

        circleEl.style.strokeDashoffset = offset
    }

    updateTexts()
    updateCircle()
}
