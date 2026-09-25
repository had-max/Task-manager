import { getTaskData } from "../getData.js"
import { executeDeleteTask } from "../../../applications/task/delete.js"
import { updateProgress } from "./progress.js"



export function handleDeleteTask(e) {
    if (!e.target.classList.contains("delete-btn")) return

    const { node, id, } = getTaskData(e)
    executeDeleteTask(id)

    node.remove()
    updateProgress()
}