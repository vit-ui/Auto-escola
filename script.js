window.addEventListener("scroll", buttonState)

function buttonState(){
    let button = document.getElementById("paratopo")
    let img = document.getElementById("topo")
    if(window.scrollY > 100){
        button.style.display = "block"
    }
    else{
        button.style.display = "none"
    }
}