import { back } from "./back.js";
import { handleLocal } from "./local.js";
import { changeTheme } from "./theme.js";

back();
handleLocal();
const theme = document.getElementById('theme');
const themeButton = document.querySelector('.dark-mode');
themeButton.addEventListener('click', changeTheme);

localStorage.setItem('theme', theme.attributes.href.textContent);
localStorage.setItem('theme-button', themeButton.querySelector('p').textContent);
