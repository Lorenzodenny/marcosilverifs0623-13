function inserimento(a){
    a.preventDefault()
    const aggiunta = document.createElement("p")
    aggiunta.setAttribute("class", "cose-aggiunte")
    aggiunta.setAttribute("onclick", "sottolineoP")
    aggiunta.innerText = document.getElementById("inseritore").value
    const bottoncione = document.createElement("button")
    bottoncione.setAttribute("class", "bottoncione")
    bottoncione.innerText = ("Delete")
    aggiunta.appendChild(bottoncione)
    const console = document.getElementById("formTotale")
    console.appendChild(aggiunta)
}


const pulsante = document.querySelector("#invia-btn")
pulsante.addEventListener("click", inserimento)


p.addEventListener("click", function () {
    p.classList.toggle("completed");
  });
