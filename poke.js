


// bug: "#26de81",
// dragon: "#ffeaa7",
// electric: #fed330,
// fiary: "#FF0069",
// fighting: "#30336b", 
// fire: "#f0932b",
// flying: "#81ecec", 
// grass: "#00b894", 
// ground: "#EFB549", 
// ghost: "#a55eea",
// ice: "#74b9ff",
// normal: "#6c5ce7",
// poison: "#a29bfe",
// rock: "#2d3436",
// water: "#0190FF"

const url = "https://pokeapi.co/api/v2/pokemon/";
const card = document.getElementById('card');
const btn = document.getElementById('btn');

let getPokeData = () => {
    // Generate random number between 1 and 150
    let id = Math.floor(Math.random() * 150) + 1;
   // combine the id and url
    const finalUrl = url + id;

    console.log(id)
    // Fetch generated URL
    
    fetch(finalUrl)
    .then((x) => x.json())
    .then((y) => {
        // generateCard(y)
        console.log(y)
        // name of pokemon
        console.log(y.name)
        // image of pokemon
        console.log(y.sprites.front_default)
        // get HP 
        console.log(y.stats[0].base_stat)
        // get attack
        console.log(y.stats[1].base_stat)
        // get defense
        console.log(y.stats[2].base_stat)
        // get speed
        console.log(y.stats[5].base_stat)
    //    generateCard(y)
    })
   
 
  
}


btn.addEventListener('click', getPokeData);
window.addEventListener('load', getPokeData);













