export function displayPriority(e) {
    const picker = e.target.closest(".priority-picker")

    if (!picker) return
    picker.classList.add("open")
}

export function closePriority() {
    const opened = document.querySelector(".priority-picker.open")

    if (!opened) return
    opened.classList.remove("open")

}

export function pickPriority(e) {
    const target = e.target.closest(".priority-picker__option")

    if (!target) return

    const priorityTrigger = document.querySelector(".priority-picker__trigger")
    const optionTextEl = target.querySelector(".priority-picker__text")
    const optionText = optionTextEl.textContent.trim()
    const triggerTextEl = priorityTrigger.querySelector(".priority-picker__text")

    triggerTextEl.textContent = optionText
    priorityTrigger.dataset.value = target.dataset.value

}