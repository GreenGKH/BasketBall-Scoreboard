let scoreHome = document.getElementById("score-home")
let scoreGuest = document.getElementById("score-guest")

let countScoreHome = 0
let countScoreGuest = 0

function add1PointHome() {
    countScoreHome += 1
    scoreHome.innerHTML = countScoreHome
}

function add1PointGuest() {
    countScoreGuest += 1
    scoreGuest.innerHTML = countScoreGuest
}

function add2PointsHome() {
    countScoreHome += 2
    scoreHome.innerHTML = countScoreHome
}

function add2PointsGuest() {
    countScoreGuest += 2
    scoreGuest.innerHTML = countScoreGuest
}

function add3PointsHome() {
    countScoreHome += 3
    scoreHome.innerHTML = countScoreHome
}

function add3PointsGuest() {
    countScoreGuest += 3
    scoreGuest.innerHTML = countScoreGuest
}