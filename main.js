let countries;
const countriesList = document.getElementById('countries');

//event listener
countriesList.addEventListener("change", function(event){
    displayCountryInfo(event.target.value);
})



fetch("https://restcountries.eu/rest/v2/all")
.then(res => res.json())
.then(data => initialize(data))
.catch(err => console.log(err))

function initialize(countriesData){
    //console.log(countriesData)
    countries = countriesData;
    let options = "";

    countries.forEach(country => options += `<option value="${country.alpha2Code}">${country.name}</option>"`)

    /*
    for (let i=0; i<countries.length; i++){
        options += `<option value="${countries[i].alpha2Code}">${countries[i].name} (${countries[i].callingCodes[0]})</option>"`;
    }
    */
    //document.getElementById('countries').innerHTML = options;
    //document.querySelector('#countries').innerHTML = options;
    countriesList.innerHTML = options;

    //displayCountryInfo("AF");
    displayCountryInfo(countriesList[countriesList.selectedIndex].value);
}

function displayCountryInfo(countryByAlpha2Code){
    const countryData = countries.find(country => country.alpha2Code === countryByAlpha2Code)
    //console.log(countryData); 
    //document.querySelector("#flag-container img").src = countryData.flag;
    document.getElementById("flag").src = countryData.flag;
    //document.querySelector("#flag-container img").alt = `Flag of ${countryData.name}`;
    document.getElementById("flag").alt = `Flag of ${countryData.name}`;
    document.getElementById("capital").innerHTML = countryData.capital;
    document.getElementById("dialing-code").innerHTML = countryData.callingCodes[0];
    document.getElementById("population").innerHTML = countryData.population.toLocaleString("en-US");
    document.getElementById("currencies").innerHTML = countryData.currencies.map(c => `${c.name} (${c.code})`).join(", ");
    document.getElementById("region").innerHTML = countryData.region;
    document.getElementById("subregion").innerHTML = countryData.subregion;


}

