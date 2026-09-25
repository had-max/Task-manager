import { executeReorderTasks } from "./../../../applications/task/reorder.js"
import { getTaskData } from "../getData.js"

let dragState = null

function setDragState(node, id, startY) {
    dragState = {
        node,
        id,
        startY
    }
}

function resetDragState() {
    dragState = null
}

export function startDrag(e) {
    if (!e.target.classList.contains("task")) return

    const { node, id } = getTaskData(e)
    setDragState(node, id, e.clientY)
}

export function handleReorderTasks(e) {

    if (!dragState) return
    e.preventDefault()

    const { node, id } = getTaskData(e)

    if (!executeReorderTasks(dragState.id, id)) {
        resetDragState()
        return
    }

    updatePosition(node, e.clientY)
    resetDragState()
}

function updatePosition(dropTaskNode, dropClientY) {
    if (dragState.node == dropTaskNode) {
        return
    }

    if (dragState.startY < dropClientY) {
        dropTaskNode.after(dragState.node)
    }

    if (dragState.startY > dropClientY) {
        dropTaskNode.before(dragState.node)
    }
}