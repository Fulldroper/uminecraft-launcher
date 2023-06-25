export const Debounce = (callback, delay) => {
    let timeoutId
    return () => {
        if (timeoutId) {
            clearTimeout(timeoutId)
        }

        timeoutId = setTimeout(() => {
            callback()
            timeoutId = null
        }, delay)
    }
}
