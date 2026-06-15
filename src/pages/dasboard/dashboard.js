export default function dashboard() {
    
    return `
       
    <div id="page3" class="page3">
        <div class="nav1">
            <div style="display: flex; height: 10%;"> <img src="../public/images/logo2.png">
                <div style="margin-top: 10%;height: 10%;"><img src="../public/images/aywa.png"><img src="../public/images/Au suivant,en avant.png"></div>
            </div>
            <div class="nov" id="tb"><img src="../public/images/keur.png">
                <p class="tb"> Tableaux de bord</p>
            </div>
            <div class="nov"> <img src="../public/images/menu.png ">
                <p> Files d’attente</p>
            </div>
            <div class="nov"> <img src="../public/images/ticket.png">
                <p> Tickets</p>
            </div>
            <div class="nov"><img src="../public/images/afiche.png">
                <p> Affichage</p>
            </div>
            <hr>
            <div id="deconecte" class="nov deconnexion"><img src="../public/images/deonnect.png">
                <p>Déconnexion</p>
            </div>
        </div>

        <div class="prin">
            <div class="nav2">
                <div class="nov"><i class="fa-solid fa-bars" style="color: rgb(38, 44, 54);"></i>
                    <p style="font-weight: bold;">Tableaux de bord</p>
                </div>
                <div class="nov"><i class="fa-regular fa-user" style="color: rgb(38, 44, 54);"></i>
                    <p>aministrateur</p>
                </div>
            </div>

            <div class="entete-tableau">
                <h2>Bonjour,Administrateur👋</h2> <button class="btn-file">+ Créer une file</button>
            </div>

            <div class="Carte">

                <div class="carte1">
                    <div class="icone"><img src="../public/images/Frame 19.png"></div>
                    <div>
                        <h4>Files d'attente</h4>
                        <h1>3</h1>
                    </div>
                </div>

                <div class="carte2">
                    <div class="icone"> <img src="../public/images/Frame 18.png"> </div>
                    <div>
                        <h4>En attente</h4>
                        <h1>18</h1>
                    </div>
                </div>

                <div class="carte3">
                    <div class="icone"><img src="../public/images/Frame 17.png"></div>
                    <div>
                        <h4>Tickets traités</h4>
                        <h1>57</h1>
                    </div>
                </div>

                <div class="carte4">
                    <div class="icone">
                        <img src="../public/images/Frame 17.png">
                    </div>
                    <div>
                        <h4>Temps moyen</h4>
                        <h1>10 min</h1>
                    </div>
                </div>
            </div>


            <div class="files">
                <div class="files-enTete">
                    <h2>Mes Files d'attente</h2>
                </div>

                <table>
                    <thead>
                        <tr>
                            <th>Nom de la file</th>
                            <th>Préfixe</th>
                            <th>En attente</th>
                            <th>Ticket actuel</th>
                            <th>Statut</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>

                        <tr>
                            <td>Retrait</td>
                            <td>RT</td>
                            <td>8</td>
                            <td>RT-010</td>
                            <td>
                                <span class="active">
                                    ● Active
                                </span>
                            </td>
                            <td>
                                <div class="Action"> <button id="modif"
                                        style="height: 27px; padding-top: 10%;">🖍</button> <button id="sup"><i
                                            class="fa-solid fa-trash" style="color: rgb(209, 50, 43);"></i></button>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td>Correction JS</td>
                            <td>JS</td>
                            <td>9</td>
                            <td>JS-010</td>
                            <td>
                                <span class="active">
                                    ● Active
                                </span>
                            </td>
                            <td>
                                <div class="Action"> <button id="modif"
                                        style="height: 27px; padding-top: 10%;">🖍</button> <button id="sup"><i
                                            class="fa-solid fa-trash" style="color: rgb(209, 50, 43);"></i></button>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td>Consultation</td>
                            <td>CT</td>
                            <td>18</td>
                            <td>CT-010</td>
                            <td>
                                <span class="active">
                                    ● Active
                                </span>
                            </td>
                            <td>
                                <div class="Action"> <button id="modif"
                                        style="height: 27px; padding-top: 10%;">🖍</button> <button id="sup"><i
                                            class="fa-solid fa-trash" style="color: rgb(209, 50, 43);"></i></button>
                                </div>
                            </td>
                        </tr>

                    </tbody>

                </table>

            </div>

        </div>

    </div>
    `;
}