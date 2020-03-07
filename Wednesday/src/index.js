import 'bootstrap/dist/css/bootstrap.css'
import jokes from "./jokes"

const allJokes = jokes.getJokes().map(joke => "<li>"+joke+"</li>")
document.getElementById("jokes").innerHTML = allJokes.join("")

//Finding an individual joke
document.getElementById("joke_id_button").addEventListener("click", (event) => {
    event.preventDefault()
    const JokeId = document.getElementById("joke_id").value - 1
    const newJokeByIdText = jokes.getJokeById(JokeId)
    document.getElementById("joke_result").innerHTML = newJokeByIdText
})

//Adding a new joke
const makeNewJoke = document.getElementById("add_joke")
document.getElementById("new_joke_button").addEventListener('click', (event) => {
    event.preventDefault()
    jokes.addJoke(makeNewJoke.value)
    const allJokes = jokes.getJokes().map(joke => "<li>" + joke + "</li>")
    document.getElementById("jokes").innerHTML = allJokes.join("")
})

//Getting an hourly quote
const hourlyQuoteButton = document.getElementById("hourly_quote_button")
hourlyQuoteButton.addEventListener('click', (event) => {
    event.preventDefault()
    getHourlyQuote()
})
function getHourlyQuote() {
    fetch('https://studypoints.info/jokes/api/jokes/period/hour')
        .then(function(response) {
            return response.json()
        })
        .then(function(data) {
            document.getElementById("quoteDiv").innerHTML = data.joke
        })
}