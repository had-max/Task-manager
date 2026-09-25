export const ThemeRepository = {
    get() {
        return localStorage.getItem("theme") || "light"
    },
    save(theme) {
        localStorage.setItem("theme", theme)
    }
}