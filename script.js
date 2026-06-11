
const page1 = document.querySelector(".page1");
const page2 = document.querySelector(".page2");
const page3 = document.querySelector(".page3");
const inscription = document.getElementById("insc");
const connecter = document.getElementById("btn1");
const inscrire = document.getElementById("btnInscription");
const nom = document.getElementById("nom");
const email = document.getElementById("email");
const mdp = document.getElementById("password");

inscription.addEventListener(
    "click",
    () => {


        
    }
);


inscription.addEventListener(
    "click",
    () => {
    page1.style.display = "none";
    page2.style.display = "flex";
    }
);

connecter.addEventListener(
    "click",
    () => {
    page1.style.display = "none";
    page3.style.display = "flex";
    }
);
inscrire.addEventListener(
    "click",
    () => {
            const ustlisateur ={
        nom : nom.value,
        email : email.value,
        mtdp: mdp.value
    }
        const ut = JSON.stringify(ustlisateur);

        
    page2.style.display = "none";
    page3.style.display = "flex";
    }
);




// document.getElementById("insc").addEventListener("click", () => {
//     changepage("page2");
// });
// document.getElementById("btn1").addEventListener("click", () => {
//     changepage("page3");
// });


// function changepage(pageId) {
//     const pages = document.querySelectorAll(".page");

//     pages.forEach(page => {
//         page.classList.add("hidden");
//     });

//     document.getElementById(pageId).classList.remove("hidden");
// }
// const utilisateur = {
//     nom: "Bamba",
//     email: "bamba@gmail.com",
//     motDePasse: "1234"
// };
// localStorage.setItem(
//     "admin",
//     JSON.stringify(utilisateur)
// );

// const utilisateurJSON = JSON.stringify(utilisateur);
// localStorage.setItem( "admin",utilisateurJSON );
// const admin =
//     JSON.parse(
//         localStorage.getItem("admin")
//     );
// const page1 = document.querySelector(".page1");
// const page2 = document.querySelector(".page2");

// document.getElementById("insc").addEventListener("click", () => {
//     page1.style.display = "none";
//     page2.style.display = "flex";
// });