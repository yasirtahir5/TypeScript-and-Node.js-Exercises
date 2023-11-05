/* Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints 
the name of each magician in the array. */

let magician1=[`John`,`Alex`,`JoJo`,`Tim Pane`];

function show_magicians1(magician1){
    for(let name of magician1){
        console.log(name);
        
    }
}
show_magicians1(magician1)

//Program End