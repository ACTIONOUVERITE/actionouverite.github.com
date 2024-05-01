const amis_categories = document.getElementById("amis_categories")
const extreme_categories = document.getElementById("extreme_categories")
const couple_categories = document.getElementById("couple_categories")
const couple_sexy_categories = document.getElementById("couple_sexy_categories")

clickbtn(amis_categories)

extreme_categories.addEventListener("click", function() {
    renitialise()
    clickbtn(extreme_categories)
    actualise_categories(categories_extreme_games)
})

amis_categories.addEventListener("click", function() {
    renitialise()
    clickbtn(amis_categories)
    actualise_categories(categories_amis_games)

})

couple_categories.addEventListener("click", function() {
    renitialise()
    clickbtn(couple_categories)
    actualise_categories(categories_couple_games)
})

couple_sexy_categories.addEventListener("click", function() {
    renitialise()
    clickbtn(couple_sexy_categories)
    actualise_categories(categories_couple_sexy_games)
})

function clickbtn(element) {
    element.style.background = "white"
    element.style.color = "black"
}

function renitialise() {
    extreme_categories.style.background = "rgba(0, 0, 0, 0.412)"
    extreme_categories.style.color = "white"

    amis_categories.style.background = "rgba(0, 0, 0, 0.412)"
    amis_categories.style.color = "white"

    couple_categories.style.background = "rgba(0, 0, 0, 0.412)"
    couple_categories.style.color = "white"

    couple_sexy_categories.style.background = "rgba(0, 0, 0, 0.412)"
    couple_sexy_categories.style.color = "white"
}

// categories
const categories_amis_games = document.getElementById("categories_amis_games")
const categories_extreme_games = document.getElementById("categories_extreme_games")
const categories_couple_games = document.getElementById("categories_couple_games")
const categories_couple_sexy_games = document.getElementById("categories_couple_sexy_games")

function actualise_categories(element) {
    categories_amis_games.style.display = "none"
    categories_extreme_games.style.display = "none"
    categories_couple_games.style.display = "none"
    categories_couple_sexy_games.style.display ="none"
    element.style.display = "block"
}