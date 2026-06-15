import { navigate } from "../../router.js";
import { getUsers } from "../../services/api.js";


export default function connexion() {
    return `
     <div id="page1" class="page1">
        <div class="seconecter">
            <img id="logo1" style="margin-left: 25%; width: 50%;" src="./public/images/logo1.png">
            <h2>Connection Administrateur</h2>
            <p class="p">Bienvenue ! Connecter-vous pour accéder à votre <br> espace de gestion.</p>
            <p style="color: #013932;display: center;align-self:self-start ; margin-left: 7%;">Email</p>
            <input id="input1" type="text" placeholder="Entrer votre email">
            <p style="color: #013932;display: center;align-self:self-start ; margin-left: 7%;">Mot de passe</p>
            <input id="input2" type="password" placeholder="mot de passe">
            <div class="souvenir"><span>Se souvenir de moi</span><span style="color: var(--ternaire-color);">Mot de passe oublier ?</span></div>
            <button id="btn1">Se Connecter</button>
            <p id="insc">S'inscrire </p>
            <p class="p">© 2024 AYWA. Tous droits réservées.</p>
        </div>
        <div class="ulusta"></div>
    </div>
    `;
}
export function initConnexion() {

    const btn = document.getElementById(
        "btn1");
    const insc = document.getElementById("insc");

    insc.addEventListener("click", () => {
        navigate("#/inscription");
    });


    btn.addEventListener(
        "click",
        async () => {

            const users = await getUsers();
            const email =
                document.getElementById("input1").value;

            const password =
                document.getElementById("input2").value;

            if (!email || !password) {
                alert("Veuillez remplir tous les champs !");
                return; // stop
            }
            const user = users.find(user =>
                user.email === email &&
                user.password === password
            );

            if (user) {
                alert("Connexion réussie");
                navigate("#/dashboard");

            } else {

                alert(
                    "Email ou mot de passe incorrect"
                );
            }
        }
    );
}
