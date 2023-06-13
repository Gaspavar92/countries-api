// import { app } from "./firebase.js";
// import {getDatabase, ref, onValue, get, push, update, set} from "https://www.gstatic.com/firebasejs/9.22.1/firebase-database.js";

// const database = getDatabase(app);
// const dbRef = ref(database);

// onValue(dbRef, (data) => {
//     if (data.exists()) {
//         for (let key in data.val()) {
//             console.log(data.val()[key].name)
//         }
//     } else {
//         console.log('Nothing here');
//     }
// })

import { getCountries } from "./api.js";
import { displayCountries } from "./display.js";
import { filterCountries } from "./filter.js";
import { searchCountries } from "./search.js";
import { countryHTML } from "./countries.js";
import { createFilter } from "./createFilter.js"
import { expand } from "./item.js";
import { detailedHTML } from "./detailedHTML.js";

// Selecting input element to retrieve data

const form = document.querySelector('#get-options');
const filter = document.getElementById('filter');

form.addEventListener('submit', handleGetCountries);
filter.addEventListener('change', handleFilterCountries);

function handleGetCountries(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    console.log(formData)
    let userInput = formData.get("country").toLowerCase();
    try {
        searchCountries(countriesData, userInput, countryHTML);
        expandCountry();
    } catch (error) {
        alert(error.message)
    }
}

function handleFilterCountries(event) {
    event.preventDefault()
    const selection = event.target.value.toLowerCase();
    try {
        filterCountries(countriesData, selection, countryHTML)
        expandCountry()
    } catch {
        console.log(error)
    }
}

const countriesData = await getCountries();
displayCountries(countriesData, countryHTML);
createFilter(countriesData)

function expandCountry() {
    const countries = document.querySelectorAll('.country');
    countries.forEach((country) => {
        country.addEventListener('click', handleExpand)
    })
}

expandCountry();


function handleExpand(event) {
    const country = event.currentTarget.querySelector('.country-name').attributes['data-value'].textContent;
    expand(countriesData, country, detailedHTML);
}




