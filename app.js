// import { app } from "./firebase.js";
// import {getDatabase, ref, onValue, get, push, update, set} from "https://www.gstatic.com/firebasejs/9.22.1/firebase-database.js";

// const database = getDatabase(app);
// const dbRef = ref(database);

// onValue(dbRef, (data) => {
//     if (data.exists()) {
//         for (let key in data.val()) {
//             console.log(data.val()[key].name)
//         }
//     } else {
//         console.log('Nothing here');
//     }
// })

import { getCountries } from "./api.js";

// Selecting input element to retrieve data

const form = document.querySelector('#get-options');

form.addEventListener('submit', getCountries);


