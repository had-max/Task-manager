// When interacting with children
// function syncParentState(e) {
//     const parentDOM = getTaskDOM(e).parentElement.closest(".task")
//     if (!parentDOM) return

//     const parent = findTask(tasks, parentDOM.dataset.id)
//     parent.done = areAllChildrenDone(parent.children)
// }

// When interacting with parent
export function syncChildrenState(parent, children) {
    if (children.length == 0) return

    for (const task of children) {
        task.done = parent.done

        syncChildrenState(parent, task.children)
    }
}