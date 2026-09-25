const mainList = document.getElementById("main-list")

import "./ui/task/events.js"
import { TaskRepository } from "./infrastructure/storage/taskRepository.js"
import { renderAllTasks } from "./ui/task/render.js"
import { loadTheme } from "./ui/theme.js"
import { updateProgress } from "./ui/task/action/progress.js"


renderAllTasks(TaskRepository.get(), mainList)
updateProgress()
loadTheme()