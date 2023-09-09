

const typeColor = {
    bug: "#26de81",
    dragon: "#ffeaa7",
    electric: "#fed330",
    fairy: "#FF0069",
    fighting: "#30336b",
    fire: "#f0932b",
    flying: "#81ecec",
    grass: "#00b894",
    ground: "#EFB549",
    ghost: "#a55eea",
    ice: "#74b9ff",
    normal: "#6c5ce7",
    poison: "#a29bfe",
    rock: "#2d3436",
    water: "#0190FF"
    
    }

const url = "https://pokeapi.co/api/v2/pokemon/";
const card = document.getElementById('card');
const btn = document.getElementById('btn');


let styleCard = (inputP) => {
    card.style.background = `radial-gradient(
        circle at 50% 0%, ${inputP} 36%, white 36%
    )`
    card.querySelectorAll('.types span').forEach(typeColor => {
        typeColor.style.backgroundColor = inputP
    })
}

let appendTypes = (types) => {

        types.forEach(param => {
            let span = document.createElement('span')
            span.textContent = param.type.name;
            document.querySelector('.types').appendChild(span)
        })

}

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

        generateCard(y)
    })
}

let generateCard = (z) => {
    // get data and assign it to variables
    
    const hp = z.stats[0].base_stat;
    const imgSrc = z.sprites.other.dream_world.front_default;
    const pokeName = z.name[0].toUpperCase() + z.name.slice(1);
    const statAttack = z.stats[1].base_stat;
    const statDefense = z.stats[2].base_stat;
    const statSpeed = z.stats[5].base_stat;

    // set themeColor based on pokemon type

    const themeColor = typeColor[z.types[0].type.name];

    card.innerHTML = `
    
    <p class="hp">
    <span>HP</span>
    ${hp}
</p>
<img src="${imgSrc}"/>
<h2 class="poke-name">${pokeName}</h2>
<div class="types">



    </div>
<div class="stats">
    <div>
        <h3>${statAttack}</h3>
        <p>Attack</p>
    </div>
    <div>
        <h3>${statDefense}</h3>
        <p>Defense</p>
    </div>
    <div>
        <h3>${statSpeed}</h3>
        <p>Speed</p>
    </div>
</div>`

appendTypes(z.types)
styleCard(themeColor);

}


btn.addEventListener('click', getPokeData);
window.addEventListener('load', getPokeData);













