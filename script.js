const api = "https://api.adviceslip.com/advice"
const addJoke = document.getElementById("add-quote")
const jokeCount = document.getElementById("count")
function newJoke() {
  fetch(api)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(quote => {
      // Process the retrieved user data
      console.log(quote.slip)
      addJoke.innerText =  `" ${quote.slip.advice} "`
      jokeCount.innerText = quote.slip.id
    })
    .catch(error => {
      console.error('Error:', error);
    });
}