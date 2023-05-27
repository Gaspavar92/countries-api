import { countryHTML } from "./countries.js";
export async function getCountries(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    let userInput = formData.get("country").toLowerCase();

    const input = document.querySelector('#get-country');
    input.value = "";

    const url = "https://restcountries.com/v3.1/all";

    try {

        const response = await fetch(url);
        const data = await response.json()
        
        const result = document.querySelector('.result');
        result.innerHTML = "";

        for (let key in data) {
            console.log(data[key])
            if (data[key].name.common.toLowerCase() === userInput || data[key].name.official.toLowerCase() === userInput) {
                const getCountry = countryHTML(data, key);
                result.innerHTML = getCountry;
            } else if (userInput === data[key].region.toLowerCase()) {
                const getCountry = countryHTML(data, key);
                result.innerHTML += getCountry;
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