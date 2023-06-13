export function back() {
    const backButton = document.querySelector('.back');
    
    backButton.addEventListener('click', () => {
        window.location.href = "./index.html";
    })
}
