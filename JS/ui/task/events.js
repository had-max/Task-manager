const addTaskBtn = document.getElementById("add-task-btn")
const mainList = document.getElementById("main-list")
const priorityCreate = document.querySelector(".priority-picker__create")

import {
    handleCreateTask,
    handleCreateChildTask
} from "./action/create.js"

import { handleDeleteTask } from "./action/delete.js"
import { displayChildTask } from "./action/displayChild.js"

import { handleCompleteTask } from "./action/complete.js"

import {
    updateText,
    updatePriority
} from "./action/update.js"

import {
    pickPriority,
    displayPriority,
    closePriority
} from "./action/pickPriority.js"

import {
    startDrag,
    handleReorderTasks
} from "./action/reorder.js"


addTaskBtn.addEventListener("click", (e) => handleCreateTask())


mainList.addEventListener("click", (e) => {
    handleCreateTask(e)
    handleDeleteTask(e)
    handleCreateChildTask(e)
    displayChildTask(e)
    handleCompleteTask(e)
    updateText(e)
    updatePriority(e)
})

document.body.addEventListener("click", (e) => {
    closePriority(e)
    displayPriority(e)
})
priorityCreate.addEventListener("click", (e) => pickPriority(e))

mainList.addEventListener("dragstart", (e) => startDrag(e))
mainList.addEventListener("dragover", (e) => e.preventDefault())
mainList.addEventListener("drop", (e) => handleReorderTasks(e))