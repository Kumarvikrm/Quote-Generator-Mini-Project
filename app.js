let authorEl = document.getElementById("author");
let quoteEl = document.getElementById("quote");
const apiUrl = "http://api.quotable.io/random";

async function getQuote(url){
  const response = await fetch(url);
  const data = await response.json()
  quoteEl.innerHTML = data.content;
  authorEl.innerHTML = data.author;
  
}
getQuote(apiUrl);

function tweet(){
  window.open("https://twitter.com/intent/tweet?text="+quoteEl.innerHTML+ "  -----By  " + authorEl.innerHTML ,"Tweet Window","width=700, height=400");

}
tweet();