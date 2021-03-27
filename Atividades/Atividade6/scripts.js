let modal = new bootstrap.Modal(document.getElementById("exampleModal"));
modal.show();

let galeria_group = document.querySelector(".conjunto");
let galeria_talk = document.querySelector(".group-talk-info");
let barra_nome = document.querySelector(".navbar-collapse");
window.globalName = identificação();
window.globalId;

function identificação() {
    let form = document.getElementById('name-identifica');
    let input = document.getElementById('name');

    globalName = form.addEventListener('submit', function (e) {
        globalName = input.value;
        mostrarNome();
        e.preventDefault();
    });

}


function mostrarNome() {
    let span = document.createElement("span");
    span.classList.add("navbar-text")
    span.textContent = window.globalName;
    barra_nome.appendChild(span);
    return span;
}

let button = document.querySelector(".modal-body form .modal-footer .btn-primary");

button.addEventListener("click", function () {
    modal.hide();
})

function listarGrupos(id, nome) {

    let conjunto = document.createElement("div");
    conjunto.classList.add("conjunto");

    let group = document.createElement("div");
    group.classList.add("group-info");

    group.addEventListener("click", function () {
        console.log(id);
        Conversas(id, group);
        window.globalId = id;

    })

    let img = document.createElement("img");
    img.classList.add("img");
    img.src = "https://cdn.pixabay.com/photo/2016/11/14/17/39/person-1824147_960_720.png";



    let title = document.createElement("a")
    title.classList.add("titulo");
    title.textContent = nome;

    group.appendChild(img);
    group.appendChild(title);
    conjunto.appendChild(group);

    group = document.querySelector(".group-talk-info");



    return conjunto;
}



function listarConversar(talks) {
    let talk = document.createElement("ul");
    talk.classList.add("ul");

    let Ul = document.createElement("li");
    Ul.classList.add("li");

    for (let talk of talks) {
        let name = document.createElement("a")
        name.classList.add("nome");
        name.textContent = talk.nome;

        Ul.appendChild(name);

        let title = document.createElement("p")
        title.classList.add("texto");
        title.textContent = talk.corpo;
        Ul.appendChild(title);
    }

    talk.appendChild(Ul);

    Ul = document.querySelector(".group-talk-info").innerHTML = "";

    console.log(talk);

    return talk;
}

function Conversas(id) {
    axios({
        method: 'GET',
        url: 'https://server-json-lms.herokuapp.com/grupos/' + id + '/mensagens'

    }).then(
        (response) => {
            let talks = response.data
            let conversa = listarConversar(talks);
            galeria_talk.appendChild(conversa);
        }
    ).catch(
        (error) => {
            console.log(error);
        }
    )

}


// Listar grupos
function atualizarGroups() {
    galeria_group.innerHTML = "";
    axios({
        method: 'GET',
        url: 'https://server-json-lms.herokuapp.com/grupos'

    }).then(
        (response) => {
            let groups = response.data;
            for (let group of groups) {
                let createGroup = listarGrupos(group.id, group.nome);
                galeria_group.appendChild(createGroup);
            }
        }
    ).catch(
        (error) => {
            console.log(error);
        }
    )
}

atualizarGroups();


let form_group = document.getElementById("form-group");

let input_form = document.querySelector("#form-group #group");

// criar grupo

form_group.addEventListener("submit", function (e) {
    e.preventDefault();
    axios({
        method: "POST",
        url: "https://server-json-lms.herokuapp.com/grupos",
        data: {
            nome: input_form.value
        }
    }).then((response) => {
        atualizarGroups();
    }).catch((error) => {
        console.log(error);
    })

})

let form_talk = document.getElementById("form_talk");

let input_form_talk = document.querySelector("#form_talk #talk")

form_talk.addEventListener("submit", function (e) {
    e.preventDefault();
    axios({
        method: "POST",
        url: "https://server-json-lms.herokuapp.com/mensagens",
        data: {
            nome: globalName,
            corpo: input_form_talk.value,
            grupoId: globalId
        }
    }).then((response) => {
        input_form_talk.innerHTML = ""
        Conversas(globalId, group);

    }).catch((error) => {
        console.log(error);
    })
})




