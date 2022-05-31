let textArea = document.getElementById("textArea")
let button = document.querySelector("button")

function sort() {
    // split input
    let rawArray = textArea.value.split("\n")
    
    let filteredArray = []
    
    // push only non-empty and non-repeating elements
    for (let element of rawArray) {
        if (element != "" && !filteredArray.includes(element.toUpperCase())) {
            filteredArray.push(element.toUpperCase())
        }
    }

    // checks if there's at least two elements
    if (filteredArray.length <= 1) {
        return document.getElementById("result").textContent = "Erro: Insira ao menos dois elementos diferentes."
    } else {
        // limit -> maxIndex = array's length - 1
        let maxIndex = filteredArray.length - 1

        // generates random index
        let randomizer = Math.random() * maxIndex
        let randomIndex = Math.round(randomizer)

        return document.getElementById("result").textContent = `Resultado: ${filteredArray[randomIndex]}`
    }
}

button.onclick = sort