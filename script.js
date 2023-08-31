// global variable 
let countries = [];

async function fetchCountries() { 
    const response = await fetch("https://restcountries.com/v3.1/all")
    const data = await response.json();
    countries = data;
    return data;
}

async function setUp() {
    const data = await fetchCountries();
    // add countries to global variable
    addToCountries(data);
}

function addToCountries(data) {
    const ul = document.querySelector('ul');
    ul.innerHTML = '';
    data.forEach((country) => {
        const li = document.createElement('li');
        li.textContent = `Name ${country.name.common}, Population ${country.population}`;
        ul.appendChild(li);
    });
}


function handleForm(event) {
    event.preventDefault();
    const input = document.querySelector("input[type='text']");
    console.log("Input value:", input.value);
    filterCountries(input.value);
}

function filterCountries(keyword) {
    const filteredCountries = countries.filter(country =>
      country.name.common.toLowerCase().includes(keyword.toLowerCase())
    );
    addToCountries(filteredCountries);
  }

const form = document.querySelector('form');
form.addEventListener('submit', handleForm);

window.addEventListener('load', setUp);


// document.querySelector("button").addEventListener("click", fetchCountries());
