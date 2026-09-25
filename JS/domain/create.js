export function createTask(text, priority, open = false) {
    return {
        id: Date.now(),
        text: text,
        done: false,
        priority: priority,
        isOpen: open,
        children: []
    }
}