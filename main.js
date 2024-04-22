

const miniListaLinks = document.querySelectorAll(
    ".apresentacao__links__navegacao"
);
const checkBoxMusic = document.getElementById("switch");
const textoMusica = document.getElementById("musica-titulo");
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
