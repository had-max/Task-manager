export function renderAllTasks(items, itemList) {

    itemList.innerHTML = ""

    if (items.length === 0) return

    items.forEach((item, index) => {

        const task = renderSingleTask(item)
        itemList.appendChild(task)

        renderAllTasks(
            item.children,
            task.querySelector(".sub-list")
        )

    })

}

export function renderSingleTask(data) {
    const task = document.createElement("li")

    task.dataset.id = data.id
    task.className = `${data.done ? "done" : ""} task`
    task.setAttribute("draggable", "true")

    insertHTMLStructure(task, data)

    return task
}

function insertHTMLStructure(task, item) {
    task.innerHTML = `
        <header class="task-header">

            <h3 class="task-text">
                <input type="text" class="text" value="${item.text}" />
            </h3>

            <div class="task-actions">
                <button class="complete-btn">✔</button>
                <button class="delete-btn">🗑</button>
                <button class="expand-btn"></button>
            </div>

            ${insertPriorityPicker(item)}

            <button class="add-sub-task">
                + إضافة
            </button>

        </header>

        <ul class="sub-list ${item.isOpen ? "display" : ""}"></ul>
    `
}

function insertPriorityPicker(item) {
    return `
        <div class="priority-picker priority-picker__edit" data-value="${item.priority}">
            <div class="priority-picker__options">

                <button class="priority-picker__option" data-value="low">
                    <span class="priority-picker__dot"></span>
                </button>

                <button class="priority-picker__option" data-value="medium">
                    <span class="priority-picker__dot"></span>
                </button>

                <button class="priority-picker__option" data-value="high">
                    <span class="priority-picker__dot"></span>
                </button>

            </div>
        </div>
    `
}