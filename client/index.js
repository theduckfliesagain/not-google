const form = document.querySelector('form');
const randomBtn = document.querySelector('[name="random"]');
const searchPage = document.getElementById("search-page")
const resultsPage = document.getElementById("results-page")
const resultSection = document.getElementById('results');
const nav = document.querySelector('nav');

const url = "http://localhost:3000/"

console.log(randomBtn);

resultsPage.style.display = "none";
searchPage.style.display = "block";

form.addEventListener('submit', presentResults)
randomBtn.addEventListener('click', presentRandomResult)

function presentResults(e) {
    e.preventDefault();
    const searchText = document.getElementById('search-bar').value;
    const routeURL =  searchText ? `search?q=${searchText}` : `results`;
    let fetchURL =  url + routeURL;

    fetch(fetchURL)
        .then(resp => resp.json())
        .then(results => showResults(results))

    togglePage();

}


function presentRandomResult(e) {
    e.preventDefault();

    let fetchURL = url + `results/random`;

    fetch(fetchURL)
        .then(resp => resp.json())
}

function togglePage(){
    // If on the search page switch to the results page and vice versa
    if(searchPage.style.display === "none"){
        resultsPage.style.display = "none";
        searchPage.style.display = "block";


    } else {
        resultsPage.style.display = "block";
        searchPage.style.display = "none";
    }

}

function showResults(results){
    if(results.length === 0){
        const noResultElement = document.createElement('p');
        noResultElement.textContent = 'No results, sorry!';
        resultSection.appendChild(noResultElement);
    }
    else {
        results = results.slice(0, 10);
        results.forEach(result => createResultElement(result));
    }
}


function createResultElement(result){
    const resultSection = document.getElementById('results');

    const resultElement = document.createElement("div");
    const headingElement = document.createElement("h2")
    const urlElement = document.createElement("h4")
    const descElement = document.createElement("p")
    const linkElement = document.createElement("a");

    headingElement.textContent = result.heading;
    urlElement.textContent= result.url;
    descElement.textContent = result.desc;

    linkElement.setAttribute("href", result.url);
    
    linkElement.appendChild(headingElement)


    resultElement.appendChild(urlElement);
    resultElement.appendChild(linkElement);
    resultElement.appendChild(descElement);

    resultElement.className = "search-result"

    resultSection.appendChild(resultElement);


    console.log(result);

}