console.log("hello")

let rendre = document.getElementById('pokemon');

fetch ('https://pokeapi.co/api/v2/pokemon?offset=10&limit=10')
.then(response=> response.json())
.then(data=> {
    let pokemons=data.results;
//   console.log(pokemons)


for(let i=0; i< pokemons.length; i++){
    let p = document.createElement('p');
    p.innerText = pokemons[i].name;

    let splitUrl = pokemons[i].url.split('/');
    let id = splitUrl[splitUrl.length-2]
    let img = document.createElement('img');
    console.log(id);
    img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
    
    
    rendre.appendChild(img);
    rendre.appendChild(p)
}
})

    // let img = document.createElement('img');
    // img.src = data.sprites.front_shiny;
        // rendre.appendChild(img);