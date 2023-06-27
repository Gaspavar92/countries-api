export function handleLocal() {
    const result = document.querySelector('.result')
    result.innerHTML = localStorage.getItem('myData');
    const theme = document.getElementById('theme');
    theme.href = localStorage.getItem('theme');
    const themeButton = document.querySelector('.dark-mode').querySelector('p');
    themeButton.textContent = localStorage.getItem('theme-button');
}