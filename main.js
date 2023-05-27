import { countryHTML } from "./countries.js";
export async function displayCountries() {
    const url = "https://restcountries.com/v3.1/all";

    try {

        const response = await fetch(url);
        const data = await response.json()
        
        const result = document.querySelector('.result');

        for (let key in data) {
            const getCountry = countryHTML(data, key);
            result.innerHTML += getCountry;
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