const input = document.getElementById("numbers");
const results = document.getElementById("all-results");
const buttonPlayAgain = document.getElementById("button-play-again");
const alertText = document.getElementById("alert");
let matchNumber = 0;
let arrayInputNumbers = [];
let arrayMatchNumber = [];
let bulls = 0;
let cows = 0;
let stackPrevent = [];
const bullsFunc = () => {
    arrayInputNumbers.forEach((element, index) => {
        arrayMatchNumber.forEach((elementToMatch, indexToMatch) => {
            if (element === elementToMatch && index === indexToMatch) {
                bulls += 1;
            }
        });
    });
}

const cowsFunc = () => {
    arrayInputNumbers.forEach((element, index) => {
        // verificar se o número está presente no número secreto
        if (arrayMatchNumber.includes(element)) {
            if (element !== arrayMatchNumber[index]) {
                // Se não estiver na mesma posição, é uma Cow
                cows += 1;
            }
        }
    });
}


let StringToNumber = num => Number(num); // usando para o array

let randomizeNumber = () => {
    do {
        for (let i = 0; i < 4; i++) {
            arrayMatchNumber[i] = Math.floor(Math.random() * 10); // Gerar um número de 4 dígitos
        }

    } while (!hasUniqueDigits(arrayMatchNumber.join(""))); // Garantir que tenha 4 dígitos e todos sejam únicos.padStart(4, '0'); // Garantir que o número tenha 4 dígitos e preencher com zero à esquerda se necessário


    return arrayMatchNumber.join("");
}

const hasUniqueDigits = (num) => {
    const digits = num.toString().split('');
    const uniqueDigits = new Set(digits);
    return digits.length === uniqueDigits.size;
}

buttonPlayAgain.addEventListener("click", () => { // reset game
    input.removeAttribute("disabled");
    results.innerHTML = "";
    buttonPlayAgain.style.visibility = 'hidden';

    matchNumber = randomizeNumber();  
});

document.addEventListener("keypress", (e) => {
  if (e.key === "Enter") { 

    arrayInputNumbers = Array.from(String(input.value), StringToNumber);

    if (input.value === "" || arrayInputNumbers.length !== 4) { //caso padrao
        alertText.textContent = "O jogo funciona apenas com 4 digitos diferentes.";
        return;
    } 

    for (let i = 0; i < arrayMatchNumber.length; i++) { //caso padrao
        if (stackPrevent.includes(arrayInputNumbers[i])) {
            alertText.textContent = "Não é permitido número repetido, apenas 4 digitos diferentes.";
            stackPrevent = [];
            return;
        }
        stackPrevent.push(arrayInputNumbers[i]);
    }
    stackPrevent = [];
    alertText.textContent = "";
    bulls = 0;
    cows = 0;

    bullsFunc();
    cowsFunc();

    if (matchNumber === input.value) {
        results.innerHTML += `<p class="result" id="result">${input.value} - ${bulls} B | ${cows} C</p>
                              <p class="win">u win!</p>`;
        input.setAttribute("disabled", "");
        buttonPlayAgain.style.visibility = 'visible';
        input.value = "";
    } else {
        results.innerHTML += `<p class="result" id="result">${input.value} - ${bulls} B | ${cows} C</p>`;
        input.value = "";
    }
  }
});

matchNumber = randomizeNumber(); //Executar por padrao uma vez