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
}


setUp();


// document.querySelector("button").addEventListener("click", fetchCountries());
