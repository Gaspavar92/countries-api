export function searchCountries(data, input, html) {

    const inputField = document.querySelector('#get-country');
    inputField.value = "";

    const result = document.querySelector('.result');
    result.innerHTML = "";

    for (let key in data) {
        if (data[key].name.common.toLowerCase() === input || data[key].name.official.toLowerCase() === input) {
            const getCountry = html(data, key);
            result.innerHTML = getCountry;
        } else if (input === data[key].region.toLowerCase()) {
            const getCountry = html(data, key);
            result.innerHTML += getCountry;
        }
    }
}
       
