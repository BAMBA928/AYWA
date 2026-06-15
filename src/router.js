// import connexion from "./pages/connexion/connexion.js";
// import inscription from "./pages/Inscription/Inscription.js";
// import dashboard from "./pages/dasboard/dashboard.js";

// export const routes = {
//     "/": connexion,
//     "/inscription": inscription,
//     "/dashboard": dashboard
// };

// const app = document.getElementById("app");

// export function render() {

//     const path = window.location.pathname;t


//     const page = routes[path];

//     if (!page) {
//         app.innerHTML = "<h1>404</h1>";
//         return;
//     }

//     app.innerHTML = page();
// }

// export function navigate(path) {

//     history.pushState({}, "", path);

//     render();
// }

// window.addEventListener(
//     "popstate",
//     render
// );

//  export function navigueur(chemin) {

//     app.innerHTML=routes[chemin]();
//     // document.getElementById("insc").addEventListener("click", () => navigueur("/Inscription"))
//      console.log(window.location.pathname);

// };
import inscription, { initInscription } from "./pages/Inscription/Inscription.js";
import connexion, { initConnexion } from "./pages/connexion/connexion.js";
import dashboard from "./pages/dasboard/dashboard.js";

export const routes = {
    "#/": connexion,
    "#/inscription": inscription,
    "#/dashboard": dashboard
};

const app = document.getElementById("app");
export function render() {

    const path = window.location.hash || "#/";
    const page = routes[path];

    if (!page) {
        app.innerHTML =
            "<h1>404</h1>";
        return;
    }
    app.innerHTML = page();

    if (path === "#/") {
        initConnexion();
    }

    if (path === "#/inscription") {
        initInscription();
    }

}
export function navigate(path) {
    window.location.hash = path;
}

window.addEventListener(
    "hashchange",
    render
);
