let timer = document.getElementById("app")
let button = document.getElementById("btn")
function startBtn() {
    timer.disabled = true
    button.disabled = true
    setInterval(() => {
        let timerNumber = Number(timer.value)
        setInterval(() => {
            if (timerNumber === 1) {
                document.getElementById("end").play()
            }
        }, 0)
        if (timerNumber === 0) {
            timer.value = 0
            setTimeout(() => {
                window.location.reload()
            }, 500)
        } else {
            timer.value = timerNumber - 1
        }
        if (timerNumber <= 6) {
            timer.style.borderColor = "#D00000"
            timer.style.transition = "all 1s"
        } else if (timerNumber <= 11) {
            timer.style.borderColor = "#F48C06"
            timer.style.transition = "all 1s"
        } else {
            timer.style.borderColor = "#18ca0e"
            timer.style.transition = "all 1s"
        }
    }, 1000)
}