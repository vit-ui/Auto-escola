window.addEventListener("scroll", buttonState)
document.addEventListener("DOMContentLoaded", () => {
    const path = window.location.pathname
    if (path.endsWith("aprovados.html")) {
        carregaImagens()
    }
    voltarConfig()
    topoConfig()
})

function voltarConfig() {
    let voltar = document.querySelector(".voltar")
    if (voltar) {
        voltar.addEventListener('click', (event) => {
            event.preventDefault()
            history.back()
        })
    }
}

function topoConfig() {
    let botaoTopo = document.querySelector(".paratopo");

    if (botaoTopo) {
        // Adiciona um evento de clique a ele
        botaoTopo.addEventListener('click', (event) => {
            event.preventDefault();

            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        })
    }
}
function buttonState() {
    let button = document.querySelector(".paratopo")
    let voltar = document.querySelector(".voltar")
    if(button) {
        if (window.scrollY > 200) {
            button.style.display = "block";
        } else {
            button.style.display = "none";
        }
    }
    if(voltar) {
        if (window.scrollY > 10) {
            voltar.style.display = "none";
        } else {
            voltar.style.display = "block";
        }
    }
}

function carregaImagens() {
    let postsDiv = document.getElementById("posts")
    if (!postsDiv) alert("Erro! Página errada")

    const imagens = [
        "Aprovado1 (1).jpeg",
        "Aprovado1 (2).jpeg",
        "Aprovado1 (3).jpeg",
        "Aprovado1 (4).jpeg",
        "Aprovado1 (5).jpeg",
        "Aprovado1 (6).jpeg",
        "Aprovado1 (7).jpeg",
        "Aprovado1 (8).jpeg",
        "Aprovado1 (9).jpeg",
        "Aprovado1 (10).jpeg",
        "Aprovado1 (11).jpeg",
        "Aprovado1 (12).jpeg",
        "Aprovado1 (13).jpeg",
        "Aprovado1 (14).jpeg",
        "Aprovado1 (15).jpeg"
    ]

    imagens.reverse().forEach(nome => {
        let tagA = document.createElement("a")
        tagA.href = "https://www.instagram.com/autoescolarequinte/";
        tagA.target = "_blank";

        let img = document.createElement("img")
        img.src = "./recursos/fotos/aprovados/" + nome
        img.alt = "Aluno aprovado"

        tagA.appendChild(img)
        postsDiv.appendChild(tagA)
    })
}

// Accordion Passo a Passo
document.querySelectorAll(".passo-titulo").forEach(titulo => {
    titulo.addEventListener("click", () => {
        const conteudo = titulo.nextElementSibling;
        const seta = titulo.querySelector(".seta");

        if (conteudo.style.display === "block") {
            conteudo.style.display = "none";
            seta.classList.remove("ativa");
        } else {
            conteudo.style.display = "block";
            seta.classList.add("ativa");
        }
    });
});