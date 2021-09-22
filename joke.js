function loadJoke(){
  fetch('https://icanhazdadjoke.com/', {
    method: 'GET', // or 'PUT'
    headers: {
      Accept: 'application/json',
    },
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data.joke);
    const jokes = document.querySelector(".jokes_here");
    jokes.innerHTML = data.joke;
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}

function copyJoke(){
  const copyText = document.getElementById("joke");
  navigator.clipboard.writeText(copyText.innerText);
}
document.querySelector("#copyToClipBoard").addEventListener("click", copyJoke);

loadJoke();