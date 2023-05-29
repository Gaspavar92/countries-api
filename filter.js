import { countryHTML } from "./countries.js";

export async function filterCountries(event) {
    const url = "https://restcountries.com/v3.1/all";
    const selection = event.target.value.toLowerCase();

    try {

        const response = await fetch(url);
        const data = await response.json()
        
        const result = document.querySelector('.result');
        result.innerHTML = "";

        for (let key in data) {
            if (selection === data[key].region.toLowerCase()) {
                const countries = countryHTML(data, key);
                result.innerHTML += countries;
            }
        }
        
        if (data.message) {
            throw {
                message: "Something went wrong..."
            }
        }
    } catch(error) {
        console.log(error.message)
    }
} 