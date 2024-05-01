let joueurName1 = "";
let joueurName2 = ""; 

let playerQuestion = 1 // 1 ou 2

// container
const container_choice = document.getElementById("container_choice")
const container_question = document.getElementById("container_question")
const name_player = document.getElementById("name_player")

// question 
const questionR = document.getElementById("questionR")
const player_name = document.getElementById("player_name")
const next_question = document.getElementById("next-question")

// btn 
const action = document.getElementById("action")
const veriter = document.getElementById("veriter")

// joueur 1
let QuestionActionJoueur1; 
let DernierQuestionActionJoueur1 = 0;


let QuestionVeriteJoueur1; 
let DernierQuestionVeriteJoueur1 = 0;

// joueur 2
let QuestionActionJoueur2; 
let DernierQuestionActionJoueur2 = 0;


let QuestionVeriteJoueur2; 
let DernierQuestionVeriteJoueur2 = 0;



action.addEventListener("click", () => {
    DisplayQuestion(true) // true = affiche container question, false = affiche action ou vertier
    PoseQuestion(playerQuestion, true)
})

veriter.addEventListener("click", () => {
    DisplayQuestion(true) // true = affiche container question, false = affiche action ou vertier
    PoseQuestion(playerQuestion, false)
})

next_question.addEventListener("click", function() {
    if (playerQuestion === 1) {
        playerQuestion = 2
        UpdateName(playerQuestion)
        DisplayQuestion(false)

    }else {
        playerQuestion = 1
        UpdateName(playerQuestion)
        DisplayQuestion(false)
    }
})

// function 

function UpdateName(joueurName) {
    if (joueurName === 1) {
        name_player.textContent = joueurName1
    }else {
        name_player.textContent = joueurName2
    }
}

function DisplayQuestion(container) {
    if (container) {
        container_choice.style.display = "none"
        container_question.style.display = "flex"
    }else {
        container_choice.style.display = "flex"
        container_question.style.display = "none"
    }   
}

function PoseQuestion(player, status) {
    if (player === 1) {
        if (status) {
            questionR.textContent = QuestionActionJoueur1[DernierQuestionActionJoueur1]; 
            player_name.textContent = joueurName1
            DernierQuestionActionJoueur1++
        }else {
            questionR.textContent = QuestionVeriteJoueur1[DernierQuestionVeriteJoueur1];
            player_name.textContent = joueurName1 
            DernierQuestionVeriteJoueur1++
        }
    } else {
        if (status) { 
            questionR.textContent = QuestionActionJoueur2[DernierQuestionActionJoueur2]
            player_name.textContent = joueurName2
            DernierQuestionActionJoueur2++
        }else {
            questionR.textContent = QuestionVeriteJoueur2[DernierQuestionVeriteJoueur2]; 
            player_name.textContent = joueurName2
            DernierQuestionVeriteJoueur2++
        }
    }
}

function ActualiseJoueur(player) {
    if (player === 1) {
        console.log(joueurName1)
        return joueurName1 
    }else {
        console.log(joueurName2)
        return joueurName2
    }
}