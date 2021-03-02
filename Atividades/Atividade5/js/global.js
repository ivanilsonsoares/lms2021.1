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
    location.reload();
})

modalClose.addEventListener("click", function () {
    overlayModal.classList.remove("active");
    location.reload();
})

buttonSave.addEventListener("click", function () {
    alert("Mensagem enviada com sucesso!!!");
    overlayModal.classList.remove("active");
    location.reload();

})

window.addEventListener("click", function (event) {
    if (event.target == overlayModal) {
        overlayModal.classList.remove("active");
        location.reload();
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

  let Interval = setInterval(function() {

    let equal = true

    while (equal) {
      post = number(0, posts_data.length)

      if(post !==Old) {
        equal = false;
      }

    }

    Old = post

    let mudarNome = document.querySelector(".info .mudar-nome")
    let mudarInfo = document.querySelector(".info .mudar-info")

    let nome = mudarNome.innerHTML = posts_data[post].nome
    let info = mudarInfo.innerHTML = posts_data[post].mensagem

    h3.appendChild(nome);
    h1.appendChild(info);

  }, 2000)

