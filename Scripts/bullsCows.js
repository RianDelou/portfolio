const input = document.getElementById("numbers");
const results = document.getElementById("all-results");
const buttonPlayAgain = document.getElementById("button-play-again");
const alertText = document.getElementById("alert");
let matchNumber = 0;
let arrayInputNumbers = [];
let arrayMatchNumber = [];
let bulls = 0;
let cows = 0;

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
    let number;
    do {
        number = Math.floor(Math.random() * 9000) + 1000;
    } while (!hasUniqueDigits(number));
    return number;
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
    arrayMatchNumber = Array.from(String(matchNumber), StringToNumber);
    console.log(arrayMatchNumber);
    console.log(matchNumber);
});

document.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    if (input.value === "") {
        alertText.textContent = "Resposta vazia, digite 4 números.";
        return;
    } else if (input.value <= 999 || input.value >= 10000) {
        alertText.textContent = "O jogo funciona apenas com 4 digitos";
        return;
    }

    bulls = 0;
    cows = 0;
    arrayInputNumbers = Array.from(String(parseInt(input.value)), StringToNumber);

    bullsFunc();
    cowsFunc();

    if (matchNumber === parseInt(input.value)) {
        results.innerHTML += `<p class="result" id="result">${parseInt(input.value)} - ${bulls} B | ${cows} C</p>
                              <p class="win">u win!</p>`;
        input.setAttribute("disabled", "");
        buttonPlayAgain.style.visibility = 'visible';
        input.value = "";
    } else {
        results.innerHTML += `<p class="result" id="result">${parseInt(input.value)} - ${bulls} B | ${cows} C</p>`;
        input.value = "";
    }
  }
});

matchNumber = randomizeNumber(); //Executar por padrao uma vez
arrayMatchNumber = Array.from(String(matchNumber), StringToNumber); //Executar por padrao uma vez (isso converte todos os nums para um array de 0 a 3)