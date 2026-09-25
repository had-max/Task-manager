import { ThemeRepository } from "../infrastructure/storage/themeRepository.js"
const themeToggleEl = document.querySelector(".theme-toggle")

themeToggleEl.addEventListener("click", (e) => toggleTheme())

function toggleTheme() {
    document.body.classList.toggle('dark')
    const isDark =
        document.body.classList.contains('dark')
            ? "dark"
            : "light"

    ThemeRepository.save(isDark)
    updateText(isDark)
}

export function loadTheme() {
    const savedTheme = ThemeRepository.get()
    document.body.classList = savedTheme
    updateText(savedTheme)
}

function updateText(theme) {

    const themeButton = document.querySelector(".theme-toggle")
    themeButton.textContent = theme === "light" ? "☀️" : "🌙"

}