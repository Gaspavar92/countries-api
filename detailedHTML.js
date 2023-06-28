export function detailedHTML(data, key) {
    const country = data[key];
    const countryNameKey = Object.keys(country.name.nativeName);
    const countryCurrencyKey = Object.keys(country.currencies);
    const countryLanguageKey = Object.keys(country.languages);
 return   `
<div class="detailed-country wrapper">
    <img src="${country.flags.png}" alt="${country.name.common} flag" id="country-flag">
    <div class="detailed-info">
        <div class="detailed-country-name" data-value="${country.name.common}">${country.name.common}${country.name.official === country.name.common ? "" : `, also known as ${country.name.official}`}</div>
        <div class="detailed-information">
            <div class="detailed-country-info">
                <p class="detailed-native-name"><span class="detailed">Native name:</span> ${countryNameKey.map(key => country.name?.nativeName[key].common).join(', or ')}</p>
                <p class="detailed-population"><span class="detailed">Population:</span> ${country.population.toLocaleString("en-US")}</p>
                <p class="detailed-region"><span class="detailed">Region:</span> ${country.region}</p>
                <p class="detailed-subregion"><span class="detailed">Sub region:</span> ${country.subregion}</p>
                <p class="detailed-capital"><span class="detailed">Capital:</span> ${country.capital === undefined ? "N/A" : country.capital}</p>
            </div>
            <div class="detailed-additional-info">
                <p class=""><span class="detailed">Top Level Domain:</span> ${country?.tld.join(', ')}</p>
                <p class=""><span class="detailed">Currencies:</span> ${countryCurrencyKey.map(key => country?.currencies[key].name).join(', ')}</p>
                <p class=""><span class="detailed">Languages:</span> ${countryLanguageKey.map(key => country.languages[key]).join(', ')}</p>
            </div>
        </div>
    </div>
</div>
`
}