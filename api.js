export async function getCountries(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    let country = formData.get("country").toLowerCase();

    const input = document.querySelector('#get-country');
    input.value = "";

    const url = "https://restcountries.com/v3.1/all";

    try {

        const response = await fetch(url);
        const data = await response.json()
        
        const result = document.querySelector('.result');
        console.log(result);

        for (let key in data) {

            console.log(data[key])
            const countryHTML = `
            <div class="country">
            <img src="${data[key].flags.png}" alt="" id="country-flag">
            <div class="country-name">${data[key].name.common} ${data[key].name.official === data[key].name.common ? "" : `, also known as ${data[key].name.official}`}</div>
            <div class="country-info">
                <p class="population">Population: ${data[key].population}</p>
                <p class="region">Region: ${data[key].region}</p>
                <p class="capital">Capital: ${data[key].capital[0]}</p>
            </div>
            `
            // console.log(data[key])

            if (data[key].name.common.toLowerCase() === country) {
                console.log(`You found ${data[key].name.common} ${data[key].name.official === data[key].name.common ? "" : `, also known as ${data[key].name.official}`}`)
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