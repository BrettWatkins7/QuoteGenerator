// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

 //An array of objects with the quote and its information
const quotes = [{quote: "There is a natural aristocracy among men. The grounds of this are virtue and talents.",
                 source: "Thomas Jefferson", citation: "", year: "1743"},
                {quote: "All our words from loose using have lost their edge.",
                 source: "Ernest Hemingway", citation: "", year: "1898"},
                {quote: "Life is not a problem to be solved, but a reality to be experienced.",
                 source: "Soren Kierkegaard", citation: "", year: "1813"},
                {quote: "In three words I can sum up everything I've learned about life. It goes on.",
                 source: "Robert Frost", citation: "", year: "1875"},
                {quote: "Where there is love there is life.",
                 source: "Mahatma Ghandi", citation: "", year: "1869"}
];

//function that randomly selects a quote
const getRandomQuote = quotes => quotes[Math.floor(Math.random() * (4 + 1))];

//A function that builds and prints the quote and its information
function printQuote(){
  const randomQuote = getRandomQuote(quotes);
  document.getElementsByClassName('quote')[0].innerHTML = randomQuote.quote;
  document.getElementsByClassName('source')[0].innerHTML = randomQuote.source + randomQuote.citation + ', ' + randomQuote.year;
}
