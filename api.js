export async function getCountries(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    let country = formData.get("country").toLowerCase();

    const url = "https://restcountries.com/v3.1/all";

    try {

        const response = await fetch(url);
        const data = await response.json()
        console.log(data)

        if (data.message) {
            throw {
                message: "Something went wrong..."
            }
        }
    } catch(error) {
        console.log(error.message)
    }

}