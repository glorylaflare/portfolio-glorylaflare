const menuHamburguer = document.querySelector("#menu-hamburguer");
const cabecalhoBotao = document.querySelector("#cabecalho-botao");
const curriculoBotao = document.querySelector("#curriculo-botao");
const certificadosBotao = document.querySelector("#certificados-botao");
const githubBotao = document.querySelector("#github-botao");

// Funções
const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "./assets/curriculo.pdf";
    link.download = "curriculo.pdf";
    link.click();
    link.remove();
};

// Eventos
menuHamburguer.addEventListener("click", () => {
    const menuAberto = document.querySelector("#menu-aberto");

    if(menuAberto.style.display == "none") {
        menuAberto.style.display = "block";
        menuHamburguer.innerHTML = "close";
    } else {
        menuAberto.style.display = "none";
        menuHamburguer.innerHTML = "menu";
    }
});

// cabecalhoBotao.addEventListener('click', () => window.location.href = './page/contato.html');
// certificadosBotao.addEventListener('click', () => window.location.href = './page/certificados.html');
// githubBotao.addEventListener('click', () => window.location.href = 'https://github.com/glorylaflare');

curriculoBotao.addEventListener("click", downloadCV);

document.addEventListener("DOMContentLoaded", () => {
    const imagens = ["spring.png", "postgres.png", "aws.png", "node.png", "java.png"]; 
    const alts = ["spring boot", "postgreSQL", "amazon web services", "node.js", "java"];

    const img = document.querySelector(".habilidades__imagem");
    let index = 0;

    function trocarImagem() {
        img.style.transform = "translateX(250%)";
        setTimeout(() => {
            img.src = "./assets/images/habilidades/" + imagens[index];
            img.alt = alts[index];
            img.style.transform = "translateX(0)";
            index = (index + 1) % imagens.length;
        }, 500);
    }

    setInterval(trocarImagem, 2000);
});