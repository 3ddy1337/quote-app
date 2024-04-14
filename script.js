const quote = document.getElementById("quote");
const author = document.getElementById("author");
const getQuoteButton = document.getElementById("get-quote-button");

function getQuoteApi() {
  fetch("https://dummy-apis.netlify.app/api/quote")
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })

    .then((data) => {
      quote.append(document.createTextNode(data.quote));
      author.append(document.createTextNode(data.author));
    });
}

getQuoteButton.addEventListener("click", () => {
  quote.innerHTML = "";
  author.innerHTML = "";
  getQuoteApi();
});

getQuoteApi();
