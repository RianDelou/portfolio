const input = document.getElementById("numbers");
const results = document.getElementById("all-results");
const buttonPlayAgain = document.getElementById("button-play-again");
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
    let aux = Math.random() * 9000;
    return Math.floor(1000 + aux);
}

buttonPlayAgain.addEventListener("click", () => { // reset game
    input.removeAttribute("disabled");
    results.innerHTML = "";
    buttonPlayAgain.setAttribute("hidden", "");

    matchNumber = randomizeNumber();  
    arrayMatchNumber = Array.from(String(matchNumber), StringToNumber);
    console.log(arrayMatchNumber);
    console.log(matchNumber);
});

document.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    if (true) {
        // CRIAR CASO PADRAO
    }

    bulls = 0;
    cows = 0;
    arrayInputNumbers = Array.from(String(parseInt(input.value)), StringToNumber);

    bullsFunc();
    cowsFunc();

    if (matchNumber === parseInt(input.value)) {
        results.innerHTML += `<p class="result" id="result">${parseInt(input.value)} - ${bulls} B | ${cows} C</p>
                              <p>u win!</p>`;
        input.setAttribute("disabled", "");
        buttonPlayAgain.removeAttribute("hidden")
        input.value = "";
    } else {
        results.innerHTML += `<p class="result" id="result">${parseInt(input.value)} - ${bulls} B | ${cows} C</p>`;
        input.value = "";
    }
  }
});

matchNumber = randomizeNumber(); //Executar por padrao uma vez
arrayMatchNumber = Array.from(String(matchNumber), StringToNumber); //Executar por padrao uma vez (isso converte todos os nums para um array de 0 a 3)

console.log(arrayMatchNumber);
console.log(matchNumber);
