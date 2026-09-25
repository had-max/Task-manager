import { getTaskData } from "./../getData.js"
import { updateProgress } from "./progress.js"
import { executeCompleteTask } from "./../../../applications/task/complete.js"


export function handleCompleteTask(e) {

    if (!e.target.classList.contains("complete-btn")) return

    const { node, id } = getTaskData(e)

    executeCompleteTask(id)
    node.classList.toggle("done")
    updateProgress()

}