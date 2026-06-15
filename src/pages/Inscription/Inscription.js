import { createUser } from "../../services/api.js";

export default function inscription() {
    return `
        <div id="page2" class="page2">
        <div class="seconecter">
            <img id="logo1" style="margin-left: 25%; width: 50%;" src="./public/images/logo1.png">
            <h2>S'inscrire</h2>
            <p>Bienvenue ! veuille s'inscrire pour accéder à votre <br> espace de gestion.</p>
            <p style="color: #013932;display: center;align-self:self-start ; margin-left: 7%;">Nom d'uliisateur</p>
            <input id="nom" type="text" placeholder="Entrer votre nom">
            <p style="color: #013932;display: center;align-self:self-start ; margin-left: 7%;">Email</p>
            <input id="email" type="text" placeholder="Entrer votre email">
            <p style="color: #013932;display: center;align-self:self-start ; margin-left: 7%;">Mot de passe</p>
            <input id="password" type="password" placeholder="mot de passe">
           <button id="btnInscription">S'inscrire</button>

            <p>© 2024 AYWA. Tous droits réservées.</p>
        </div>
        <div class="ulusta"></div>
    </div>
    `;
};



export function initInscription() {

    const btn =
        document.getElementById(
            "btnInscription"
        );

    btn.addEventListener(
        "click",
        async () => {

            const nom =
                document.getElementById("nom").value;

            const email =
                document.getElementById("email").value;

            const password =
                document.getElementById("password").value;
                  if (!nom || !email || !password) {
            alert("Veuillez remplir tous les champs !");
            return; 
        }

            await createUser({
                nom,
                email,
                password
            });
           
            navigate("#/");
            alert(
                "Inscription réussie"
            );
        }
    );
}
