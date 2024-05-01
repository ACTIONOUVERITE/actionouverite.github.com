// launch games 
const launch_games = document.getElementById("launch_games")

launch_games.addEventListener("click", function() {
    RedirectionPages("./assets/pages/games.html")
})

function RedirectionPages(chemin) {
    window.location.href = chemin;
}