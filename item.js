export function expand(data, country, html) {
    let storedData;
    for (let key in data) {
        const APIcountry = data[key].name.common;
        APIcountry === country ? storedData = html(data, key) : null;
    }
    localStorage.setItem('myData', storedData);
    console.log(localStorage.getItem('myData'))
    window.location.href = "./details.html";
}

// Change CSS in order to display element at the center in a fixed position
// Add dynamically all additional elements to display
// Change styling to fit current configuration