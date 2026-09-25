export function reorderTasks(parent, child1, child2) {
    const i = parent.findIndex(item => item.id === child1.id)
    const j = parent.findIndex(item => item.id === child2.id)

    if (i === -1 || j === -1) return false

    parent[i] = child2
    parent[j] = child1

    return true
}