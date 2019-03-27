let input = ''
let display = ''


function createButtons() {
    const buttonsDisplay = document.querySelector('#number')
    let numberList = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    
    for (let number of numberList){
        const numberButton = document.createElement('button')
        numberButton.innerText = `${number}`
        numberButton.addEventListener('click', function () {
            input = number
            displayTotal(input)
        })  

        buttonsDisplay.appendChild(numberButton)
    }




    const operatorDisplay = document.querySelector('#operator')
    let operands = ['+', '-', '*', '/']
    
    for (let oporator of operands){
        const operatorButton = document.createElement('button')
        operatorButton.innerText = `${oporator}`
        operatorButton.addEventListener('click', function () {
            input = ` ${oporator} `
            displayTotal(input)
        })  

        operatorDisplay.appendChild(operatorButton)
    }




    const equalsDisplay = document.querySelector('#equals')
    let equals = '='
    const equalsButton = document.createElement('button')
    equalsButton.innerText = `${equals}`
    equalsButton.addEventListener('click', function () {
        displayResult(display)
        display = ''
        input = ''
    })
        equalsDisplay.appendChild(equalsButton)
    
}



function displayTotal(input) {
    display += input
    document.querySelector('#display').innerText = `${display}`
}

function displayResult(display){
    let answer = eval(display)
    document.querySelector('#display').innerText = `${answer}`
    display = ''
    input = ''
    return display, input
    
}

function createCalculator () {
    createButtons()
    displayTotal(input)

}

createCalculator()