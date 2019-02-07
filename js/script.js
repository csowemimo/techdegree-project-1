/******************************************
Treehouse Techdegree:
Full Stack Javascript Project 1 -
       A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/***
Object array names "quotes" with 6 objects. Each object must have a quote and a source property.
The properties of citation and year are optional
***/
let quotes = [
  {
    quote: "If you are not willing to risk the unusual, you will have to settle for the ordinary.",
    source: "John Rohn"
  },
  {
    quote: "Learn to say ‘no’ to the good so you can say ‘yes’ to the best.",
    source: "John C. Maxwell",
    tags: "inspirational"
  },
  {
    quote: "The scariest moment is always just before you start.",
    source: "Stephen King",
    citation: "On Writing: A Memoir of the Craft, Book",
    year: 2000,
    tags: "memoir"
  },
  {
    quote: "As long as we are not ourselves, we will try to be what other people are.",
    source: "Malidoma Patrice Some",
    citation: "Of Water and the Spirit, Book",
    year: 1994
  },
  {
    quote: "Get busy living or get busy dying.",
    source: "'Red' Redding",
    citation: "Shawshank Redemption, Movie",
    year: 1994
  },
  {
    quote: "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do.",
    source: "H. Jackson Brown’s mother",
    citation: "P.S. I Love You: When Mom Wrote, She Always Saved the Best for Last, Book",
    year: 1991,
    tags: "memoir"
  }
]


/***
getRandomQuote function passed in the quote array of objects and performs a calculation
in order to select which random quote to display. After a number is chosen, it is returned
to the function that calls it.
***/
function getRandomQuote(array)
{
  let randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
}



/***
The printQuote function calls getRandomQuote an uses the number returned to concatenate
the quote string and prints it out. If the citation and/or year is
a missing property in the object, the string concatenation will skip over it.
***/
function printQuote()
{
  let quoteObject = getRandomQuote(quotes);
  let quoteString = "";

  quoteString += '<p class="quote">' + quoteObject.quote + '</p>';
  quoteString += '<p class="source">' + quoteObject.source;

  if(quoteObject.citation)
  {
    quoteString += '<span class="citation">' + quoteObject.citation + '</span>';
  }

  if(quoteObject.year)
  {
    quoteString += '<span class="year">' + quoteObject.year + '</span>';
  }

  if(quoteObject.tags)
  {
    quoteString += '<span class="year">' + quoteObject.tags + '</span>';
  }
    quoteString += "</p>";


  document.getElementById('quote-box').innerHTML = quoteString;

/*  let hex = '';
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

  hex += 'rgb(' + r + ',' + g + ',' + b + ')';*/

document.querySelector('body').style.backgroundColor = getBackgroundColor();


}

function getBackgroundColor()
{
  let hex = '';
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

  hex += 'rgb(' + r + ',' + g + ',' + b + ')';

  return hex;
}


/***
When the button to "show another quote" is clicked, it will call getRandomQuote to get another quote number.
***/

document.getElementById('loadQuote').addEventListener('click', printQuote);
setInterval(printQuote,20000);
