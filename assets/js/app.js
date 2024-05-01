// function

// menu application 

const btn_close = document.querySelector(".close");
const menu_appli_donwload = document.querySelector(".container_application_dowload");
const menu_identity = document.getElementById("menu_identity");
const menu_categories = document.getElementById("menu_categories");

let menu_appli = true;

// element click 
btn_close.addEventListener("click", function() {
    menu_appli = false;
    CloseMenuClick(menu_appli_donwload);
});

function CloseMenuClick(menuclose) {
    menuclose.style.display = "none";
}

// verification champs
const valid_identifiant = document.getElementById("valid_champs");
const player1input = document.getElementById("player1");
const player2input = document.getElementById("player2");

valid_identifiant.addEventListener("click", function() {
    verifychampsplayer();
})

function verifychampsplayer() {
    const valuesinput1 = player1input.value;
    const valuesinput2 = player2input.value;
    if (valuesinput1 == "" || valuesinput2 == "") {
        alert("Veuillez remplir les champs correctement !");
    } else {
        if (valuesinput1 === valuesinput2) {
            alert("Le nom du joueur 1 est le même que celui du joueur 2. Veuillez entrer des noms différents !");
        } else {

            if (valuesinput1.length >= 2 && valuesinput2.length >= 2) {
                
                menu_identity.style.display = "none";
                menu_categories.style.display = "flex";
                
                joueurName1 = valuesinput1;
                joueurName2 = valuesinput2;
                CloseMenuClick(menu_identity);

                QuestionActionJoueur1 = ["tu doit faire 10 pompes !", "Appel quelqu'un au hasard et fait lui une blague", 
                "Fais un tatouage sur la cheville de " + ActualiseJoueur(2) + ", puis donne-lui des indices pour qu'il ou elle devine le tatouage. S'il ou elle trouve, il ou elle pourra te donner un défi à relever.",
                "Parler avec un accent différent pour le reste du tour.", "Donnez un massage des pieds à " + ActualiseJoueur(2) + " pendant 5 minutes", "Mangez une cuillère de nourriture bizarre (moutarde, sauce piquante, etc.)",]
                
                QuestionVeriteJoueur1 = ["Quelle est ta plus grande source d'inspiration ou de motivation ?", "Comment considere tu " + ActualiseJoueur(2), "Avez-vous déjà essayé une drogue illégale?", ]
                QuestionActionJoueur2 = ["Laissez quelqu'un d'autre vous maquiller.","Fais une danse folle pendant 30 secondes.", "Essayez de lécher votre coude", "Raconter une blague", "Faites un concours de silence pendant 30 secondes. (Le premier à parler perd !)","Tu peux passer ton tour","Tourne sur toi-même 20 fois et essaie de marcher sur un pied."]
                QuestionVeriteJoueur2 = ["Quel est votre plus gros secret que personne ne connaît ?", "Avez-vous déjà volé quelque chose ?", "Trouve une qualité et un defaut a "+ ActualiseJoueur(1), "Quel sont tes objectif dans ta vie ?", "Quelle est votre plus grande peur ?", "Qu'est-ce que vous aimez le plus chez vous?", "Avez-vous déjà envoyé une photo de vous nu à quelqu'un ?", "Avez-vous déjà été infidèle à quelqu'un ?","Quelle est ta plus grande honte ?", "Que pense tu de " + ActualiseJoueur(1),]

                UpdateName(playerQuestion)
            } else {
                alert("Veuillez entrer au moins 2 caractères dans les noms des joueurs !");
            }
        }
    }
}
 
function LaunchGames(categorieschoiseplayer) {
    console.log(categorieschoiseplayer);
    menu_categories.style.display = "none";
 }