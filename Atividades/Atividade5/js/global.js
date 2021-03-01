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
function infos(){
    let posts_data = [
        {
            nome:"victor",
            mensagem:"tudo bem?"
        },
        {
            nome:"Carlos ",
            mensagem:"Tá quente hoje!"
        }
    ]
    
}

    let h3 = document.createElement("h3");
    let h1 = document.createElement("h1");
    infos.posts_data
    let mudarNome = document.querySelector(".meio .container .post .info .mudar-nome")
    console.log(mudarNome)

    let mudarInfo = document.querySelector(".meio .container .post .info .mudar-info")
    console.log(mudarInfo)

    mudarNome.appendChild(h3);
    mudarInfo.appendChild(h1);
    let nome = document.createTextNode("teste dfdf");
    let info = document.createTextNode("teste dfdf");


    h3.appendChild(nome);
    h1.appendChild(info)

