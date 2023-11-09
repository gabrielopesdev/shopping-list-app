import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js"

import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-database.js"

const appSettings = {
    databaseURL: "https://shopping-app-ab654-default-rtdb.firebaseio.com/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const itensInDB = ref(database, "listShop")

const inputTextEl = document.querySelector("#add-item")
const buttonAddEl = document.querySelector("#add-button")
const shoppingListEl = document.querySelector("#shopping-list") 

buttonAddEl.addEventListener("click", ()=>{

    let inputValue = inputTextEl.value
    push(itensInDB, inputValue)

    clearInputFieldEl(inputTextEl)
    clearShoppingListEl()
    
    onValue(itensInDB, (list)=>{

        var listArray = Object.values(list.val())
            
        for(let i=0; i < listArray.length; i++) {
            addItemToList(listArray[i])
        }   
    })
})

function clearInputFieldEl(input) {
    input.value = ""
}

function addItemToList(value) {
    shoppingListEl.innerHTML += `<span>${value}</span>`
}

function clearShoppingListEl() {
    shoppingListEl.innerHTML = ""
}


