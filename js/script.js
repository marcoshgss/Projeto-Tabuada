// Seleção de elementos
const multiplication = document.querySelector("#multiply-form");
const inputNumber = document.querySelector("#number");
const multiplicationInput = document.querySelector("#multiplicator");

const multiplicationTitle = document.querySelector("#multiplicator-title span")

const multiplicationTable = document.querySelector("#multiply-operations");

// Funções

const createTable = (number, multiplicatorNumber) => {
    multiplicationTable.innerHTML = "";

    for(i = 1; i <= multiplicatorNumber; i++) {

        const result = number * i
    
        const template = `<div class="row">
                <div class="operation">${number} X ${i} = </div>
                <div class="result">${result}</div>
            </div>`;
        
        const parser = new DOMParser();

        const htmlTemplate = parser.parseFromString(template, "text/html");

        const row = htmlTemplate.querySelector(".row");

        multiplicationTable.appendChild(row);
    }

    multiplicationTitle.innerText = number;
};

// Eventos
multiplication.addEventListener("submit", (event) => {
    event.preventDefault();

    const multiplicationNumbers = +inputNumber.value;
    
    const multiplicatorNumbers = +multiplicationInput.value;

    if(!multiplicationNumbers || !multiplicatorNumbers) return;

    createTable(multiplicationNumbers, multiplicatorNumbers)
})