window.onload = startSlider;

// slider
function startSlider() {
  var counter = 1;
  setInterval(function () {
      document.getElementById('radio' + counter).checked = true;
      counter++;
      if (counter > 2) {
          counter = 1;
      }
  }, 4500);
}

  // Carregar paginas
  document.querySelectorAll('a').forEach(link => {
    const cont = document.getElementById('conteudo');

    link.onclick = function (e) {
        e.preventDefault();
        fetch(link.href)
            .then(response => response.text())
            .then(html => {
                cont.innerHTML = html;
            });
    }
});

// Formulário
function enviar() {
    
    var nome = document.getElementById("name");
    var nomeEmail = document.getElementById("email");
    var mens = document.getElementById("mensagem");

    if (nome.value == "" || nomeEmail.value == "" || mens.value == "")
            alert("Um dos campos está vazio");
            
        else
            if (nome.value != "") 
                alert("Obrigado sr(a) " + nome.value + ", os seus dados foram encaminhados com sucesso!");
    
}

// Darkmode

let modeColor = "--mode";

document.getElementById("icon").addEventListener("click", function() {
  const body = document.body;
    const currentModeColor = getComputedStyle(body).getPropertyValue("background-color").trim();
  if (currentModeColor === "rgb(255, 255, 255)") {
    body.style.setProperty(modeColor, "#010103");
    document.documentElement.style.setProperty("--dtext", "#ffffff");
    icon.src = "/img/darkmode.png";
  } else {
    body.style.setProperty(modeColor, "#ffffff");
    document.documentElement.style.setProperty("--dtext", "#000000");
    icon.src = "/img/lightmode.png";
  }
});
