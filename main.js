// ALTERAR E OTIMIZAR ESSE CÓDIGO ANTES DO ANDAMENTO DO PROJETO

const miniListaLinks = document.querySelectorAll(
    ".apresentacao__links__navegacao"
);
const checkBoxMusic = document.getElementById("switch");
const textoMusica = document.querySelector(".adicionais__texto-musica");
const audio = document.querySelector(".audio");
const music = new Audio("./Audios/By Your Side (melancholy ver.).mp3"); // TALVEZ ALTERAR ESSE AUDIO PARA OS DOIS AUDIOS PEGAREM POR AQUI
music.loop = true;

function tocaAudio(listaLinks) {
    for (let i = 0; i < listaLinks.length; i++) {
        listaLinks[i].addEventListener("click", () => {
            audio.volume = 0.3;
            audio.play();
        });
    }
}

checkBoxMusic.addEventListener("change", () => {
    if (checkBoxMusic.checked) {
        music.play();
        textoMusica.style.color = `#B98EA7`;
    } else {
        music.pause();
        textoMusica.style.color = `#EFF6EE`;
    }
});

tocaAudio(miniListaLinks);
