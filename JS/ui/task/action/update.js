import {
    executeUpdateText,
    executeUpdatePriority
} from "../../../applications/task/update.js"

import { getTaskData } from "../getData.js"

export function updateText(e) {
    if (!e.target.classList.contains("text")) return

    const input = e.target
    const { node, id } = getTaskData(e)

    input.addEventListener("blur", () => {
        executeUpdateText(input, id)
    })
}

export function updatePriority(e) {
    const target = e.target.closest(".priority-picker__edit .priority-picker__option")

    if (!target) return
    const picker = e.target.closest(".priority-picker__edit")
    const { node, id, } = getTaskData(e)

    executeUpdatePriority(target, id)
    picker.dataset.value = target.dataset.value
}