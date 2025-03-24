fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then(response => {
        if(!response.ok){
            throw new Error("Could not fetch resource")
        }
        console.log(response);
        
        return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.error(error));


// async function fetchData() {
//     try{

//         const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
//         const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

//         if(!response.ok){
//             throw new Error("Could not fetch resource");
//         }
        
//         const data = await response.json();
//         const pokemonImage = data.sprites.front_default;
//         const pokemonImageEl = document.getElementById("pokemonImage");
//         pokemonImageEl.src = pokemonImage;
//         pokemonImageEl.style.display = "block";

//     } catch (error) {
//         console.log(error);
//     }
// }