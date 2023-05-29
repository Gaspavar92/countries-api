import { countryHTML } from "./countries.js";
export async function displayCountries() {
    const url = "https://restcountries.com/v3.1/all";

    try {

        const response = await fetch(url);
        const data = await response.json()
        
        const result = document.querySelector('.result');
        const filter = document.getElementById('filter');

        const allRegions = [];
        for (let key in data) {
          allRegions.push(data[key].region);
        }
        const uniqueRegions = [...new Set(allRegions)];
        
        for (let region of uniqueRegions) {
          const option = document.createElement('option');
          option.value = region;
          option.textContent = region;
          filter.append(option);
        }

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