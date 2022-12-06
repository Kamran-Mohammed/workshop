const Quote = require('inspirational-quotes');
const q=Quote.getRandomQuote();

const cowsay = require("cowsay");

console.log(cowsay.say({
    text : q,
    e : "oO",
    T : "U "
}));

