// global variable 
let countries = [];

const fetchCountries = async () => { 
    const reponse = await fetch("https://restcountries.com/v3.1/all")
    .then(response => response.json())
    return reponse;
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
        li.textContent(`Name ${country.name.common}, Population ${country.population}`);
        ul.appendChild(li);
    })
}


function handleForm(event) {
    event.preventDefault();
    const input = document.querySelector('input[type="text"]');
   console.log('Input value:', input.value);
}

setUp


// document.querySelector("button").addEventListener("click", fetchCountries());
