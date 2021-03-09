const form = document.querySelector('form');
const searchPage = document.getElementById("search-page")
const resultsPage = document.getElementById("results-page")
const nav = document.querySelector('nav');

resultsPage.style.display = "none";
searchPage.style.display = "block";

form.addEventListener('submit', presentResults)

function presentResults(e) {
    e.preventDefault();
    const searchText = document.getElementById('search-bar').value;

    if(!searchText) {
        fetch("http://localhost:3000/results")
            .then(resp => resp.json())
            .then(results => results.forEach(result => createResultElement(result)))
    }

    togglePage();

    // fetch("localhost:3000/search")
}

function togglePage(){
    if(searchPage.style.display === "none"){
        resultsPage.style.display = "none";
        searchPage.style.display = "block";
    } else {
        resultsPage.style.display = "block";
        searchPage.style.display = "none";
    }

}


function createResultElement(result){
    const resultSection = document.getElementById('results');

    const resultElement = document.createElement("div");
    const headingElement = document.createElement("h2")
    const urlElement = document.createElement("h4")
    const descElement = document.createElement("p")

    headingElement.textContent = result.heading;
    urlElement.textContent= result.url;
    descElement.textContent = result.desc;

    resultElement.appendChild(headingElement);
    resultElement.appendChild(urlElement);
    resultElement.appendChild(descElement);

    resultElement.className = "search-result"

    resultSection.appendChild(resultElement);


    console.log(result);

}