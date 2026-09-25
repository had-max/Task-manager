import { executeCreateTask } from "./../../../applications/task/create.js"
import { renderSingleTask } from "../render.js"
import { getTaskData } from "../getData.js"
import { updateProgress } from "./progress.js"


export function handleCreateTask(e) {
    const input = document.getElementById("taskInput")
    const priority = document.querySelector(".priority-picker__trigger").dataset.value
    const mainList = document.getElementById("main-list")

    if (input.value === "") return

    const task = executeCreateTask(input.value, priority)
    if (!task) return

    input.value = ""
    mainList.appendChild(renderSingleTask(task))
    updateProgress()
}

export function handleCreateChildTask(e) {
    if (!e.target.classList.contains("add-sub-task")) return

    const { node, id } = getTaskData(e)

    const child = executeCreateTask("مهمة", "medium", id)
    const list = node.querySelector(".sub-list")

    list.classList.add("display")
    list.appendChild(renderSingleTask(child))
    updateProgress()

}