export function detailedHTML(data, key) {
    const country = data[key];
 return   `
<div class="detailed-country">
<img src="${country.flags.png}" alt="${country.name.common} flag" id="country-flag">
<div class="detailed-country-name" data-value="${country.name.common}">${country.name.common}${country.name.official === country.name.common ? "" : `, also known as ${country.name.official}`}</div>
<div class="detailed-country-info">
    <p class="detailed-population">Population: ${country.population.toLocaleString("en-US")}</p>
    <p class="detailed-region">Region: ${country.region}</p>
    <p class="detailed-capital">Capital: ${country.capital === undefined ? "N/A" : country.capital}</p>
</div>
`
}