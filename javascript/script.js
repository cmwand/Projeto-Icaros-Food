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

// login

function onChangeEmail(){
  toggleButtonsDisable();
  toggleEmailErrors();

}

function onChangePassword(){
  toggleButtonsDisable();
  togglePasswordErrors();
}


function isEmailValid(){
  const email = form.email().value;
  if (!email){
      return false;
  }
  return validateEmail(email);
}


function toggleEmailErrors(){
  const email = form.email().value;
  if (!email){
    form.emailRequiredError().style.display = "block";
  } else{
    form.emailRequiredError().style.display = "none";
  }

  if (validateEmail(email)){
    form.emailInvalidError().style.display = "none";
  } else{
    form.emailInvalidError().style.display = "block";
  }

}

function togglePasswordErrors(){
  const password = form.password().value;
  if (!password){
    form.passwordRequiredError().style.display = "block";
  } else {
    form.passwordRequiredError().style.display = "none";
  }
}



function toggleButtonsDisable(){
  const emailValid = isEmailValid();
  form.recoverPassword().disabled = !emailValid;

  const passwordValid = isPasswordValid();
  form.login().disabled = !emailValid || !passwordValid;
}


function isPasswordValid(){
  const password = form.password().value;
  if(!password){
      return false;
  }
  return true;
}

function validateEmail(email){
  return /\S+@\S+.\S+/.test(email);
}

const form = {
  email: () => document.getElementById('email'),
  password: () => document.getElementById('password'),
  login: () => document.getElementById('login-button'),
  emailInvalidError: () => document.getElementById('email-invalid-error'),
  emailRequiredError: () => document.getElementById('email-required-error'),
  passwordRequiredError: () => document.getElementById('password-required-error'),
  recoverPassword: () => document.getElementById('recover-password-button')
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
