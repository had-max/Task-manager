import { getTaskData } from "../getData.js"
import { executeDisplayChildTask } from "../../../applications/task/displayChild.js"


export function displayChildTask(e) {
    if (!e.target.classList.contains("task-header")) return

    const { node, id } = getTaskData(e)

    const list = node.querySelector(".sub-list")
    list.classList.toggle("display")

    const isOpen = list.classList.contains("display")
    executeDisplayChildTask(id, isOpen)
}
