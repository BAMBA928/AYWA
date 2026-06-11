
const page1 = document.querySelector(".page1");
const page2 = document.querySelector(".page2");
const page3 = document.querySelector(".page3");
const inscription = document.getElementById("insc");
const connecter = document.getElementById("btn1");
const inscrire = document.getElementById("btnInscription");
const nom = document.getElementById("nom");
const email = document.getElementById("email");
const mdp = document.getElementById("password");
const emailConnexion = document.getElementById("input1");
const mdpConnexion = document.getElementById("input2");


inscription.addEventListener(
    "click",
    () => {
        page1.style.display = "none";
        page2.style.display = "flex";
    }
);


inscrire.addEventListener(
    "click",
    () => {
        const ustlisateur = {
            nom: nom.value,
            email: email.value,
            mtdp: mdp.value
        }

        const ut = JSON.stringify(ustlisateur);
        localStorage.setItem(
            "bamba",
            JSON.stringify(ustlisateur)
        );

        if (
            nom.value === "" || email.value === "" || mdp.value === ""
        ) {
            alert("Veuillez remplir tous les champs");
            return;
        }

        page2.style.display = "none";
        page3.style.display = "flex";
    }
);

connecter.addEventListener(
    "click",
    () => {
        const bamba = JSON.parse(localStorage.getItem("bamba")
        );
        if (bamba === null) {
            alert("Aucun compte enregistré");
            return;
        }
        if (
            emailConnexion.value === bamba.email &&
            mdpConnexion.value === bamba.mtdp
        ) {
        page1.style.display = "none";
        page3.style.display = "flex";
        }
        else {

        }

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
//     "bamba",
//     JSON.stringify(utilisateur)
// );

// const utilisateurJSON = JSON.stringify(utilisateur);
// localStorage.setItem( "bamba",utilisateurJSON );
// const bamba =
//     JSON.parse(
//         localStorage.getItem("bamba")
//     );
// const page1 = document.querySelector(".page1");
// const page2 = document.querySelector(".page2");

// document.getElementById("insc").addEventListener("click", () => {
//     page1.style.display = "none";
//     page2.style.display = "flex";
// });