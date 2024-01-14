const cards = document.querySelectorAll(".card");
const input = document.querySelector("#input");
let titulos = [cards[0].children[1].textContent, cards[1].children[1].textContent, cards[2].children[1].textContent]


input.addEventListener("keydown",
    function (tecla) {
        cards.forEach
            (function (carta) {
                if (carta.children[1].textContent.toLowerCase().includes(input.value.toLowerCase())) {
                    carta.classList.remove('hidden')
                    // carta.classList.add('flex')

                } else {
                    carta.classList.add('hidden')
                }

            }

            )
    }
)

const profile = document.querySelector(".profile");
const info = document.querySelector(".info-profile");
const main = document.querySelector(".main");
const closer = document.querySelector("#close-popup");


profile.addEventListener("click",
    function () {
        info.classList.remove('hidden')
        main.classList.add('hidden')

    }
)

closer.addEventListener("click",
    function () {
        info.classList.add('hidden')
        main.classList.remove('hidden')

    }
)

// const defaultFile = '../img/default.png';

const file = document.getElementById('foto');
const img = document.getElementById('img-info'); // Corregido aquí

file.addEventListener('change', e => {
    if (e.target.files[0]) {
        const reader = new FileReader();
        reader.onload = function (e) {
            img.src = e.target.result;
        };
        reader.readAsDataURL(e.target.files[0]);
    } else {
        img.src = defaultFile;
    }
});

// const historias = document.querySelector(".historias");
//       const popup = document.querySelector(".popup-out");
//       const equis = document.querySelector(".closer");
//       const imgHistoria = document.querySelector(".img-historia");

//       let imgs = [
//         "https://astelus.com/wp-content/viajes/Lago-Moraine-Parque-Nacional-Banff-Alberta-Canada.jpg",
//         "https://tse3.mm.bing.net/th?id=OIP.Bi0PkoTiRjGeZOLBp2HJCAHaEK&pid=Api&P=0&h=180",
//         "https://previews.123rf.com/images/aprillrain/aprillrain2212/aprillrain221200638/196354278-imagen-de-caricatura-de-un-astronauta-sentado-en-una-luna-ilustraci%C3%B3n-de-alta-calidad.jpg",
//       ];

//       imgs.forEach((link) => {
//         historias.innerHTML += `
//         <div class="rounded-full w-[100px] h-[100px]">
//           <img src="${link}" class="w-[100%] object-cover rounded-full h-[100%] historia" alt="">
//         </div>
//         `;
//       });






// const summit = document.querySelector(".summit");
// const input = document.getElementById("foto");
// const imginfo = document.getElementById("img-info");

// summit.addEventListener("click", function () {
   
   
       
//         localStorage.imginfo = img.value;

//     }
   
// });

// const infouser = document.querySelectorAll("#info-user");

// infouser.forEach(
//     function (userElement) {
//         userElement.addEventListener("click", function () {
//             const user = userElement.textContent;
//             localStorage.setItem("localstore.user", user); 
//             window.location.href = "../index.html"; 
//         });
//     }
// );