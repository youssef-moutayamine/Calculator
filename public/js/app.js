let container = document.getElementById("calculator")
let displayResult = document.getElementById("display")

container.addEventListener("click", e => {
    if (e.target.nodeName == "BUTTON") {
        switch (e.target.textContent) {

            case "C":
                clear()
                break;

            case "Del":
                deleteLast()
                break;

            case "=":
                result()
                break;

            default:
                add(e.target.textContent)
                break;
        }
    }
})


const clear = () => {
    displayResult.value = ""
}

const add = (value) => {
    displayResult.value += value
}


const deleteLast = (value) => {
    displayResult.value = displayResult.value.slice(0, -1)
}

const result = () => {
    try {

        displayResult.value = eval(displayResult.value.replace('x', '*').replace('÷', '/'))

    } catch (error) {
        displayResult.value = "Error"
    }
}