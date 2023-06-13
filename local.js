export function handleLocal() {
    const result = document.querySelector('.result')
    result.innerHTML = localStorage.getItem('myData');
}