

var Joke=require(
    'One-liner-joke'
);
// This is a line below to print the joke 
var hehe=Joke.getRandomJoke();
console.log(hehe);


var figlet=require("figlet");
figlet("Nice Joke", function (err, data){
    if(err)
    {
        console.log("Something went wrong..");
        console.log(err);
        return;
    }
    console.log(data);
});