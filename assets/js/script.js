let modais = {
    1: {
        sinopse: 'Após anos aprisionado, Morpheus, o Rei dos Sonhos, embarca em uma jornada entre mundos para recuperar o que lhe foi roubado e restaurar seu poder.',
        elenco: 'Tom Sturridge, Boyd Holbrook, Patton Oswalt, mais',
        generos: 'Séries de fantasia, Séries dramáticas, Séries dos EUA',
        cenas_e_momentos: 'Sombrios',
        imagem: './assets/img/sandman.jpg',
        alt: 'sandman'
    },
    2: {
        sinopse: 'O festival de Woodstock de 1969 prometia paz e música. Mas na edição de 1999 foram dias de tumulto, violência e danos reais. Por que tudo deu tão errado?',
        elenco: '',
        generos: 'Documentários socioculturais, Séries documentais, Séries dos EUA',
        cenas_e_momentos: 'Investigativos',
        imagem: './assets/img/woodstock.jpg',
        alt: 'woodstock'
    },
    3: {
        sinopse: 'Antes de se transformar no infame Saul Goodman, o advogado de Breaking Bad era mais inocente, mas não era santo',
        elenco: 'Bob Odenkirk, Jonathan Banks, Rhea Seehorn, mais',
        generos: 'Séries policiais, Séries dramáticas, Séries dos EUA',
        cenas_e_momentos: 'Excêntricos, Realistas',
        imagem: './assets/img/better-call-saul.jpg',
        alt: 'better-call-saul'
    },
    4: {
        sinopse: 'Desiludido com o mundo corporativo, um homem faz um amigo misterioso e cria um clube secreto - o lugar perfeito para lidar com os sentimentos reprimidos.',
        elenco: 'Brad Pitt, Edward Norton, Helena Bonham Carter, mais',
        generos: 'Filmes sobre questões sociais, filmes baseados em livros, filmes noir',
        cenas_e_momentos: 'Sombrios',
        imagem: './assets/img/clube-da-luta.webp',
        alt: 'clube-da-luta'
    },
    5: {
        sinopse: 'Expulso de sua vila após comer a fruta proibida, um Neandertal atrapalhado e seu fiel escudeiro embarcam em uma jornada bíblica.',
        elenco: 'Jack Black, Michael Cera, Oliver Platt, mais',
        generos: 'Ação e aventura, Comédia, Comérias de fim de noite noir',
        cenas_e_momentos: 'Apimentados',
        imagem: './assets/img/ano-um.webp',
        alt: 'ano-um'
    },
    6: {
        sinopse: 'Um professor de química do ensino médio começa a vender drogas para sustentar sua família.',
        elenco: 'Bryan Cranston, Aaron Paul, Anna Gunn, mais',
        generos: 'Séries policiais, Suspense para TV, Séries dramáticas noir',
        cenas_e_momentos: '',
        imagem: './assets/img/breaking-bad.webp',
        alt: 'breaking-bad'
    },
    7: {
        sinopse: 'Um homem gentil e simpático presencia os principais eventos das décadas de 1960 e 1970 e, graças a seu otimismo inabalável, inspira todas as pessoas ao seu redor.',
        elenco: 'Tom Hanks, Robin Wright, Gary Sinise, mais',
        generos: 'Comédias românticas, Filmes baseados em livros, Filmes clássicos',
        cenas_e_momentos: 'Sentimentais, Alto-astral, Comoventes',
        imagem: './assets/img/forrest-gump.webp',
        alt: 'forrest-gump'
    },
    8: {
        sinopse: 'Uma mulher que Jerry conheceu em Michigan chega a Nova York e liga para ele. Será que ela está a fim dele?',
        elenco: 'Jerry Seinfeld, Julia Louis-Dreyfus, Jason Alexander, mais',
        generos: 'Sitcoms, Comédias para a TV, Séries dos EUA',
        cenas_e_momentos: 'Espirituosos, Irreverentes',
        imagem: './assets/img/seinfeld.webp',
        alt: 'seinfeld'
    },
    9: {
        sinopse: 'Em reabilitação, Elton John relembra suas origens humildes, as músicas atemporais e os momentos de inspiração e excesso. Baseado em sua verdadeira história',
        elenco: 'Taron Egerton, Jamie Bell, Richard Madden, mais',
        generos: 'Aqui tem muita música, Filmes LGBTQ, Filmes baseados na vida real',
        cenas_e_momentos: 'Comoventes',
        imagem: './assets/img/rocketman.webp',
        alt: 'rocketman'
    },
    10: {
        sinopse: 'Saitama está decidido a ser um super-herói. Após anos de treinamento, ele está forte o suficiente para proteger a humanidade',
        elenco: 'Makoto Furukawa, Kaito Ishikawa, Yuki Kaji, mais',
        generos: 'Japonês, Séries baseadas em mangá, Animes Seinen',
        cenas_e_momentos: 'Humor seco, Empolgantes',
        imagem: './assets/img/one-punch-man.webp',
        alt: 'one-punch-man'
    }
}

let carrossel = [
    {
        id: 1,
        imagem: './assets/img/sandman.jpg',
        alt: 'sandman',
    },
    {
        id: 2,
        imagem: './assets/img/woodstock.jpg',
        alt: 'woodstock',
    },
    {
        id: 3,
        imagem: './assets/img/better-call-saul.jpg',
        alt: 'better-call-saul',
    },
    {
        id: 4,
        imagem: './assets/img/clube-da-luta.webp',
        alt: 'clube-da-luta',
    },
    {
        id: 5,
        imagem: './assets/img/ano-um.webp',
        alt: 'ano-um',
    },
    {
        id: 6,
        imagem: './assets/img/breaking-bad.webp',
        alt: 'breaking-bad',
    },
    {
        id: 7,
        imagem: './assets/img/forrest-gump.webp',
        alt: 'forrest-gump',
    },
    {
        id: 8,
        imagem: './assets/img/seinfeld.webp',
        alt: 'seinfeld',
    },
    {
        id: 9,
        imagem: './assets/img/rocketman.webp',
        alt: 'rocketman',
    },
    {
        id: 10,
        imagem: './assets/img/one-punch-man.webp',
        alt: 'one-punch-man',
    },
]

let contador = 1;

function criarCarrossel() {
    let carrosselAtivo = document.querySelector('.carousel-item');
    if (contador % 2 == 0) {
        carrosselAtivo.innerHTML = '';
        for (let i = 5; i < carrossel.length; i++) {
            carrosselAtivo.innerHTML += `<button type="button" class="btn btn-carrossel" data-bs-toggle="modal" data-bs-target="#exampleModal" 
            id="${carrossel[i].id}" onClick="abrirModal(this.id)">
            <img src=${carrossel[i].imagem} alt=${carrossel[i].alt} style="width:200px; height: 100px;" ">
          </button>`
        }
    } else {
        carrosselAtivo.innerHTML = '';
        for (let i = 0; i < 5; i++) {
            carrosselAtivo.innerHTML += `<button type="button" class="btn btn-carrossel" data-bs-toggle="modal" data-bs-target="#exampleModal" 
            id="${carrossel[i].id}" onClick="abrirModal(this.id)"">
            <img src=${carrossel[i].imagem} alt=${carrossel[i].alt} style="width:200px; height: 100px;">
          </button>`
        }
    }
    contador += 1;
}

function adicionarFilme() {
    let titulo = document.querySelector('#imagem-busca').getAttribute('alt');
    titulo = titulo.toUpperCase().replaceAll('-', ' ');
    if (minhaLista.includes(titulo)) {
        alert(`Esse filme já está na sua lista. Lista atual: \n${minhaLista}`)
    } else {
        minhaLista.push(new MinhaLista(titulo).addFilme());
    }
}

function carregar() {
    let modalAtivo = document.querySelector('.modal-content')
    modalAtivo.innerHTML = `<div class="ph-item" id="placeholder">
        <div class="ph-col-12">
          <div class="ph-picture"></div>
          <div class="ph-row">
          </div>
        </div>
      </div>`
    console.log('chegou aqui')
}

function abrirModal(clicked_id) {
    carregar()
    setTimeout(() => {
        let modalAtivo = document.querySelector('.modal-content')
        modalAtivo.innerHTML = ''
        modalAtivo.innerHTML = `
        <a href="#">
          <div class="modal-header">
            <img src="${modais[clicked_id].imagem}" alt="${modais[clicked_id].alt}" id="imagem-busca">
          </div>
        </a>
        <div class="modal-body">
          <div class="sinopse-modal">${modais[clicked_id].sinopse}</div>
          <div class="tags-modal">
            <span>
              <cor style="color: #777">Elenco:</cor> ${modais[clicked_id].elenco}
            </span><br>
            <span>
              <cor style="color: #777">Gêneros:</cor> ${modais[clicked_id].generos}
            </span><br>
            <span>
              <cor style="color: #777">Cenas e momentos:</cor> ${modais[clicked_id].cenas_e_momentos}
            </span>
            <button type="button" class="btn btn-secondary adicionar-lista">Adicionar a Lista</button>
          </div>
        </div>`

        let botaoAddLista = document.querySelector('.adicionar-lista')
        botaoAddLista.addEventListener('click', adicionarFilme)
    }, 1500)
}

function mostrarLista() {
    alert(`Sua lista atual: ${minhaLista}`)
}

class MinhaLista {
    constructor(alt) {
        this.titulo = alt.toString().toUpperCase().replaceAll('-', ' ');
    }
    addFilme() {
        return this.titulo;
    }
}

function abrirSite(){
    let abertura = document.querySelector('#abertura');
    abertura.innerHTML = '';
}

//Carousel Slick - Marcas
$('#carrossel-rubrica').slick({
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
});

let minhaLista = []

let botaoProximo = document.querySelector('#proximo'),
    botaoAnterior = document.querySelector('#anterior');

botaoProximo.addEventListener('click', criarCarrossel)
botaoAnterior.addEventListener('click', criarCarrossel)

if (botaoAnterior.style.display == '') {
    let carrosselCelular = document.querySelector('.carousel-item');
    carrosselCelular.addEventListener('touchmove', criarCarrossel)
}

let listaFilmes = document.querySelector('#minha-lista')
listaFilmes.addEventListener('click', mostrarLista)

criarCarrossel()

setTimeout(abrirSite, 3000)

