export function countryHTML(country, key) {
 return   `
<div class="country">
<img src="${country[key].flags.png}" alt="${country[key].name.common} flag" id="country-flag">
<div class="country-name">${country[key].name.common}${country[key].name.official === country[key].name.common ? "" : `, also known as ${country[key].name.official}`}</div>
<div class="country-info">
    <p class="population">Population: ${country[key].population.toLocaleString("en-US")}</p>
    <p class="region">Region: ${country[key].region}</p>
    <p class="capital">Capital: ${country[key].capital === undefined ? "N/A" : country[key].capital}</p>
</div>
`
}