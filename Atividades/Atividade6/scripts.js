let button = document.querySelector(".Navegador-superior .Navagador-barra .conteudo button");

let menu_retratil = document.querySelector(".Navegador-superior .menu-retratil");

let conteudo = document.querySelector("div.meio div.container");

let openModal = document.querySelector(".Navegador-superior .Navagador-barra .conteudo .open-modal");

let overlayModal = document.querySelector(".overlay-modal")

let modalClose = document.querySelector(".modal-close");

let buttonClose = document.querySelector(".button-close");

let buttonSave = document.querySelector(".button-save");

button.addEventListener("click", function () {
    menu_retratil.classList.toggle("active");
    conteudo.classList.toggle("active");
})

openModal.addEventListener("click", function () {
    overlayModal.classList.add("active");
})

buttonClose.addEventListener("click", function () {
    overlayModal.classList.remove("active");
    nome_card.value = '';
    mensagem_card.value = '';
})

modalClose.addEventListener("click", function () {
    overlayModal.classList.remove("active");
    nome_card.value = '';
    mensagem_card.value = '';
})


window.addEventListener("click", function (event) {
    if (event.target == overlayModal) {
        overlayModal.classList.remove("active");
        nome_card.value = '';
        mensagem_card.value = '';
    }
})


let posts_data = [
    {
        nome: "Victor",
        mensagem: "tudo bem?"
    },
    {
        nome: "Carlos ",
        mensagem: "Tá quente hoje!"
    }
]

function number(minimo, maximo) {
    minimo = 0;
    maximo = 2;
    return Math.floor(Math.random() * (maximo - minimo)) + minimo;
}

let post = 0;
let Old;

let Interval = setInterval(function () {

    let equal = true

    while (equal) {
        post = number(0, posts_data.length)

        if (post !== Old) {
            equal = false;
        }

    }

    Old = post

    let mudarNome = document.querySelector(".info .mudar-nome")
    let mudarInfo = document.querySelector(".info .mudar-info")

    nome = mudarNome.innerHTML = posts_data[post].nome
    info = mudarInfo.innerHTML = posts_data[post].mensagem

}, 2000)


let nome_card = document.querySelector(".nome-form");
let mensagem_card = document.querySelector(".mensagem-form");

let submit_button = document.querySelector(".submit-button")

let mural = document.querySelector(".container");

submit_button.addEventListener("click", function (event) {
    event.preventDefault();
    let nome = nome_card.value;
    let mensagem = mensagem_card.value;

    let post = document.createElement("div");
    post.classList.add("info");
    mural.appendChild(post);

    let h3 = document.createElement("h3");
    h3.classList.add("info-nome");
    let text_h3 = document.createTextNode(nome);

    let img = document.createElement("img");
    img.classList.add("avatar");

    h3.appendChild(img);
    h3.appendChild(text_h3);
    post.appendChild(h3);

    let h1 = document.createElement("h1");
    h1.classList.add("info-mensagem");
    let text_h1 = document.createTextNode(mensagem);

    h1.appendChild(text_h1);
    post.appendChild(h1);

    overlayModal.classList.remove("active");

    nome_card.value = '';
    mensagem_card.value = '';

})