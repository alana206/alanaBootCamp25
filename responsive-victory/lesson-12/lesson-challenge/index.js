const axios = require('axios');

async function fetchJoke() {
  try {
    const response = await axios.get('https://official-joke-api.appspot.com/jokes/319');
    const { setup, punchline } = response.data;
    console.log(response.data); // Log the entire response data for debugging
    console.log('Joke:');
    console.log(setup);
    console.log(punchline);
  } catch (error) {
    console.error('Error fetching joke:', error.message);
  }
}

fetchJoke(); // Calls the fetchJoke function to retrieve and display a joke
