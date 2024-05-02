const html = document.querySelector("html");
const miniListaLinks = document.querySelectorAll(
    ".apresentacao__links__navegacao"
);
const checkBoxMusic = document.getElementById("switch");
const textoMusica = document.getElementById("musica-titulo");
const navBarElement = document.querySelectorAll(".cabecalho__nav__button");
const containerHome = document.getElementById("container-home");
const containerAboutMe = document.getElementById("container-about-me");
const containerHabilidades = document.getElementById("container-habilidades");
const containerPortfolio = document.getElementById("container-portfolio");
const containerContato = document.getElementById("container-contato");
const music = new Audio("./Audios/By Your Side (melancholy ver.).mp3"); //long music
const audio = new Audio("./Audios/audio.wav"); //short music
music.loop = true;
audio.volume = 0.3;

miniListaLinks.forEach(element => {
    element.addEventListener("click", () => {
        audio.play();
    });
});

checkBoxMusic.addEventListener("change", () => {
    if (checkBoxMusic.checked) {
        music.play();
        textoMusica.style.color = `#B98EA7`;
    } else {
        music.pause();
        textoMusica.style.color = `#EFF6EE`;
    }
});

navBarElement.forEach( (element, index) => {
    let aux = "";
    if (index === 0) {
        aux = containerHome;
    } else if (index === 1) {
        aux = containerAboutMe;
    } else if (index === 2) {
        aux = containerHabilidades;
    } else if (index === 3) {
        aux = containerPortfolio;
    } else if (index == 4) {
        aux = containerContato;
    }
    element.addEventListener("click", event => {
        event.preventDefault();
        window.scrollTo({
        top: aux.offsetTop  - (window.innerHeight * 0.1),
        behavior: "smooth"
        });
    });
});

    