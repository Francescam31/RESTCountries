const fetchCountries = () => { 
    const request = fetch("https://restcountries.com/v3.1/all")
    .then(response => response.json())
    .then(response => console.log(response))
}

fetchCountries();
