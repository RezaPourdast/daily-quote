const api_url = "https://api.quotable.io/random";
const quote = document.getElementById("quote");
const author = document.getElementById("author");
const quotebtn = document.getElementById("quote-btn");
const tweetbtn = document.getElementById("tweet-btn");

async function getQuote(url) {
  const response = await fetch(url);
  var data = await response.json();
  quote.innerHTML = data.content;
  author.innerHTML = data.author;
}

function tweet() {
  window.open(
    "https://twitter.com/intent/tweet?text=" +
      quote.innerHTML +
      " ---- by  " +
      author.innerHTML,
    "Tweet window",
    "width=600, height=300"
  );
}

getQuote(api_url);

quotebtn.addEventListener("click", () => {
  getQuote(api_url);
});

tweetbtn.addEventListener("click", () => {
  tweet();
});
