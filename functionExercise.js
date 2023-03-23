//Function Exercise//

//1
function fozzieBear(){
    console.log("Wocka Wocka!");
}
fozzieBear();

//2
function beaker(speak){
    for (i = 0; i < 4; i++){
        console.log(speak);
    }
}
beaker("Meep");

//3
function muppetShow(a, b){
    if (a === "Muppet" && b === "Show"){
        console.log("It's time to play the music. It's time to light the lights.");
    }
}
muppetShow("Muppet", "Show");

//4
function kermit(){
    return "Kermit The Frog";
}

//5
function muppetShowSeasons(seasons){
    if (seasons == 5){
        return true;
    }
    return false;
}

//6
const manOrMuppet = function (){console.log("Am I a man or am I a Muppet?")};

//7
rainbowConnection = () => "Someday we'll find it. The Rainbow Connection. The lovers, the dreamers and me";

//8, No
//9, No

//10a
const newMuppetsMovies = ["The Muppets", "Muppets Most Wanted"];
//10b
console.log(newMuppetsMovies.map(function(c){return c.toUpperCase()}));

//Bonus//

//11a
const oldMuppetMovies = ["The Muppet Movie", "The Muppets Take Manhattan", "The Great Muppet Caper", "The Muppet Christmas Carol", "Muppet Treasure Island", "Muppets From Space"];
//11b
const twoMovies = oldMuppetMovies.filter(c => {if (c == "The Great Muppet Caper" || c == "Muppet Treasure Island") return c})
console.log(twoMovies);

//12a
const charactersOne = ["Statler", "Waldorf"];
//12b
const charactersTwo = ["The Swedish Chef", "Animal", "Rowlf"]
//12c
randomMuppet = characters => {
    let max = characters.length
    let mup = Math.floor((Math.random() * max))
    console.log(characters[mup]); 
}
//12d
randomMuppet(charactersOne);
randomMuppet(charactersTwo);

//13
caps = string => {
    cap = 0;
    let final = "";
    string = string.toLowerCase();
    for (i = 0; i < string.length; i++){
        if (string.slice(i, i+1) != " "){
            if (cap == 0){
                final += string.slice(i, i+1).toUpperCase();
                cap = 1;
            } else {
                final += string.slice(i, i+1).toLowerCase();
                cap = 0;
            }  
        } else {
            final += " ";
        }
    }
    console.log(final);
}
caps("Hello World");