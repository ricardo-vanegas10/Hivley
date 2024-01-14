//   const input = document.querySelector("#email");
//   const input1 = document.querySelector("#user");
//   const input2 = document.querySelector("#pass");
//   const boton = document.querySelector("#register");
//   const boton1 = document.querySelector("#login");
//   const popup = document.querySelector(".popup-out");

//   function registro() {
//     localStorage.email = input.value;
//     localStorage.user = input1.value;
//     localStorage.contraseña = input2.value;
//   }

//   boton1.addEventListener("click",
//     () => {
//       popup.classList.remove("hidden")
//       popup.classList.add("flex")
//     }
//   )




const boton0 = document.querySelector(".b-begin");
const input = document.querySelector("#user");
const input1 = document.querySelector("#email");
const input2 = document.querySelector("#password");
const register = document.querySelector("#register");
const alerta = document.querySelector("#alerta");

// Changed from ".register" to "#register"
const login = document.querySelector("#login");
const started = document.querySelector(".started");
const section = document.querySelector(".register-section");
const popup = document.querySelector(".popup-out");
const closer = document.querySelector("#close-popup");


const input3 = document.querySelector("#user1");
const input4 = document.querySelector("#pass1");
const botonLogin = document.querySelector("#log-in");


boton0.addEventListener("click", () => {
  started.classList.add("hidden");
  section.classList.remove("hidden");
});

login.addEventListener("click", () => {
  popup.classList.remove("hidden");

});

closer.addEventListener("click", () => {
  popup.classList.add("hidden");
});

// Replace botonLogin with login
// if (input.value == localStorage.user && input2.value == localStorage.contraseña) {
//   alert("El usuario es correcto");
//   window.location.href = "./pages/plantilla2.html";
// } else {
//   alert("El usuario está mal");
// }






//verificacion de campos vacios y almacenamiento en localstorage de inputs 
function registro() {
  if (input1.value == "" || input2.value == "" || input.value == "") {
    alerta.classList.remove("text-[blue]");
    alerta.classList.add("text-[red]");
    alerta.innerHTML = "You must fill out fields";
  } else {
    alerta.innerHTML = "Successful registration";
    alerta.classList.remove("text-[red]");
    alerta.classList.remove("animate-bounce")
    alerta.classList.add("text-[blue]");
    alerta.classList.add("animate-scale");
    localStorage.user = input.value;
    localStorage.email = input1.value;
    localStorage.contraseña = input2.value;
    window.location.href = "./pages/page-content.html";
  }
}




botonLogin.addEventListener("click",
  function () {
    if (input3.value == localStorage.user && input4.value == localStorage.contraseña) {
      alert("El usuario es correcto")
      window.location.href = "./pages/page-content.html";
    } else {
      alert("El usuario está mal")
    }
  })

document.querySelector("#info-user").innerHTML = localStorage.getItem("localstore.user");