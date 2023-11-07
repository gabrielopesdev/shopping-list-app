
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js"

import {getDatabase, ref, push} from "https://www.gstatic.com/firebasejs/10.5.2/firebase-database.js"

const appSettings = {
    databaseURL: "https://shopping-app-ab654-default-rtdb.firebaseio.com/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const itensInDB = ref(database, "list")

const inputTextEl = document.querySelector("#add-item")
const buttonAddEl = document.querySelector("#add-button")

buttonAddEl.addEventListener("click", ()=>{

    let inputTextValue = inputTextEl.value
    push(itensInDB, inputTextValue)

})
