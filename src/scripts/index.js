import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import menu from '../DATA.json'
require("./navbar")
let restaurants = menu.restaurants
let myContainer = document.querySelector('#restaurant')

for(var i = 0; i<restaurants.length; i++){
    let { pictureId, rating, name, description, city } = restaurants[i]
    let card = document.createElement("article")
    card.setAttribute("id", "card")
    card.innerHTML = 
    `
    <h2 class="card-tag" tabindex="0">${city}</h2>
    <img src=${pictureId} alt="pic" class="card-image">
    <p class="card-rating" tabindex="0">Rating: ${rating}</p>
    <h2 class="card-title" tabindex="0">${name}</h2>
    <p class="card-description" tabindex="0">${description}</p>
    `
    myContainer.appendChild(card)
    console.log(restaurants)
}

