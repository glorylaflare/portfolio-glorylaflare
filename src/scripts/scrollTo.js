const scrollToCabecalho = document.querySelector('#scroll-to-cabecalho');
// Variaveis versão desktop
const scrollToSobre = document.querySelector('#scroll-to-sobre');
const scrollToHabilidade = document.querySelector('#scroll-to-habilidades');
const scrollToProjetos = document.querySelector('#scroll-to-projetos');
// Variaveis versão mobile
const scrollToSobreMobile = document.querySelector('#scroll-to-sobre_mb');
const scrollToHabilidadeMobile = document.querySelector('#scroll-to-habilidades_mb');
const scrollToProjetosMobile = document.querySelector('#scroll-to-projetos_mb');

const scrollToElement = (e) => {
    const targetElement = document.getElementById(e);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
};

scrollToCabecalho.addEventListener('click', () => scrollToElement('cabecalho'));
// Eventos versão desktop
scrollToSobre.addEventListener('click', () => scrollToElement('secao-sobre'));
scrollToHabilidade.addEventListener('click', () => scrollToElement('secao-habilidades'));
scrollToProjetos.addEventListener('click', () => scrollToElement('secao-projetos'));
// Eventos versão mobile
scrollToSobreMobile.addEventListener('click', () => scrollToElement('secao-sobre'));
scrollToHabilidadeMobile.addEventListener('click', () => scrollToElement('secao-habilidades'));
scrollToProjetosMobile.addEventListener('click', () => scrollToElement('secao-projetos'));