import { countryHTML } from "./countries.js";
export async function displayCountries() {
    const url = "https://restcountries.com/v3.1/all";
    const result = document.querySelector('.result');

    try {

        const response = await fetch(url);
        const data = await response.json()

        if (data.message) {
            console.log(data)
            throw {
                message: `<p class="error">Something went wrong: ${data.message}</p>`
        }
    }
        
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

    } catch(err) {
        result.innerHTML = err?.message || "Something went wrong...";
    }
} 