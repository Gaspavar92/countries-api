export async function displayCountries() {
    const url = "https://restcountries.com/v3.1/all";

    try {

        const response = await fetch(url);
        const data = await response.json()
        
        const result = document.querySelector('.result');

        for (let key in data) {
            const countryHTML = `
            <div class="country">
            <img src="${data[key].flags.png}" alt="" id="country-flag">
            <div class="country-name">${data[key].name.common}${data[key].name.official === data[key].name.common ? "" : `, also known as ${data[key].name.official}`}</div>
            <div class="country-info">
                <p class="population">Population: ${data[key].population}</p>
                <p class="region">Region: ${data[key].region}</p>
                <p class="capital">Capital: ${data[key].capital}</p>
            </div>
            `

            result.innerHTML += countryHTML;
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