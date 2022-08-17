let quote= document.getElementById("quote");
let author= document.getElementById("author");
let quotes=[
    {
        "quote": '"You miss 100% of the shots you don\'t take."',
        "author": '--Wayne Gretzy' ,
    },
    {
        "quote": '"Do not take life too seriously. You will not get out alive."',
        "author": '--Elbert Hubbard' ,
    },
    {
        "quote": '"It\'s not what happens to you, but how you react to it that matters."',
        "author": '--Epictetus' ,
    },
    {
        "quote": '"The best revenge is massive success."',
        "author": '--Frank Sinatra' ,
    },
    {
        "quote": '"Resentment is like drinking poison and waiting for your enemies to die."',
        "author": '--Nelson Mandela' ,
    },
    {"quote": '"Beware of what you become in pursuit of what you want."',
     "author": '--Jim Rohn'
    },
    {"quote": '"Be yourself; everyone else is already taken."',
     "author": '-- Oscar Wilde'
    },
    {"quote": '“So many books, so little time.”',
     "author": '-- Frank Zappa'
    }
]

function getQuote(){
    let index= Math.floor(Math.random()*quotes.length);
    quote.innerHTML= quotes[index].quote;
    author.innerHTML= quotes[index].author;
}