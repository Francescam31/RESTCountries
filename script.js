const fetchCountries = () => { 
    const request = fetch("https://restcountries.com/v3.1/all");
    console.log(request);
}

fetchCountries();
