import 'bootstrap/dist/css/bootstrap.css'

document.getElementById("svg2").addEventListener("click", clickMap)
let url = "http://restcountries.eu/rest/v1/alpha?codes="

var prev

function clickMap(element) {
    if (prev == null) {
        prev = element
        element.target.style = "fill: red"
    } else {
        prev.target.style = "fill:606060"
        element.target.style = "fill: red"
        prev = element
    }

    let fetchURL
    if (element.target.id != "svg2") {
        if (element.target.id.length > 2) {
            fetchURL = url + element.target.parentNode.id
        } else {
            fetchURL = url + element.target.id
        }

        fetch(fetchURL)
            .then(function(response) {
                return response.json()
            }).then(function(info) {
                console.log(info)
                showDataAboutCountry(info)
            });
    } else {
        document.getElementById("europeMap").innerHTML = "Not a country mate. Retry. And do better!"
    }
}

function showDataAboutCountry(info) {
    let countryStats =
        "Country: " + info[0].name + "<br>" +
        "Population: " + info[0].population + "<br>" +
        "Area: " + info[0].area + "<br>" +
        "Borders: " + info[0].borders.join(", ")
    document.getElementById("europeMap").innerHTML = countryStats
}