const button = document.getElementById('button');
const audioElement = document.getElementById('audio');

// Disable/Enable button
function toggleButton() {
  button.disabled = !button.disabled;
}

// Passing Joke to VoiceRSS API
function tellMe(joke) {
  VoiceRSS.speech({
    key: '6e0888e198a54c9dbf44b30ad1cfc200',
    src: joke,
    hl: 'en-us',
    r: 0,
    c: 'mp3',
    f: '44khz_16bit_stereo',
    ssml: false
  });
}

// Get Jokes from Joke API
async function getJokes() {
  let joke = '';
  const apiUrl = 'https://sv443.net/jokeapi/v2/joke/Programming,Miscellaneous,Dark,Pun?blacklistFlags=nsfw,religious,political,racist,sexist&type=single';
  
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    
    if (data.setup) {
      joke = `${data.setup} ... ${data.delivery}`;
    } else {
      joke = data.joke;
    }
    
    tellMe(joke);
    toggleButton();
  } catch (error) {
    console.log('whoops', error);
  }
}

// Event Listeners
button.addEventListener('click', getJokes);
audioElement.addEventListener('ended', toggleButton);