// Create an async function that:
// Makes a request to the Pokemon API using fetch that passes in a pokemon that the user requests
// Stores this request into a variable
// Makes sure we use .json()
// Display the name of the Pokemon in an alert

async function getPokemon() {
    // Get user input and validate
    const pokemonInput = prompt("Enter a Pokemon name:");
    if (!pokemonInput) {
        alert("Please enter a Pokemon name!");
        return;
    }

    const pokemon = pokemonInput.toLowerCase().trim();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    
    try {
        // Make the API request
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Pokemon "${pokemon}" not found!`);
        }
        
        // Parse the JSON response
        const data = await response.json();
            console.log(data);
           // console.log(data.stats[0].stat.name);
            console.log(data.moves[0].version_group_details[0].move_learn_method.name);




        
        // Display the result
        alert(`Found Pokemon: ${data.name.toUpperCase()}!`);
        
    } catch (error) {
        // Show user-friendly error message
        alert(`Error: ${error.message}`);
        console.error("API Error:", error);
    }
}

// Initialize the Pokemon search
getPokemon();