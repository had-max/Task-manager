export function getTaskData(e) {

    const node = e.target.closest(".task")
    const id = node?.dataset.id

    if (!node) return

    return {
        node,
        id,
    }
}