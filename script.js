// global variable 
let countries = [];

const fetchCountries = async () => { 
    const reponse = await fetch("https://restcountries.com/v3.1/all")
    .then(response => response.json())
    return reponse;
}

function setUp() {
    const data = fetchCountries();
    // add countries to global variable
    addToCountries(data);
}

function addToCountries() {
    const ul = document.querySelector('ul');
    data.forEach(country => {
        const li = document.createElement('li');
        li.textContent(`Name ${country.name.common}, Population ${country.population}`);
        ul.appendChild(li);
    })
}


setUp();


// document.querySelector("button").addEventListener("click", fetchCountries());
