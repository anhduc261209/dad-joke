const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'd3c5dbe6ccmsh37d38169379cda7p1d66a8jsn4f5b8d97ed41',
        'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'
    }
};

function showJoke(joke) {
    const jokeElement = document.getElementById('joke-textarea');
    jokeElement.innerHTML = joke["body"][0]["setup"] + "\n" + "\n" + "\n" + joke["body"][0]["punchline"];
}

function nextJoke() {
    fetch('https://dad-jokes.p.rapidapi.com/random/joke', options)
        .then(response => response.text())
        .then(response => JSON.parse(response))
        .then(response => showJoke(response))
        .catch(err => console.log(err));
}

window.onload = () => {
    document.getElementById('next-btn').addEventListener('click', nextJoke);
    nextJoke();
}