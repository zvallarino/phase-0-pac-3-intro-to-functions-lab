function shout(string){
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}

function logShout(string){
    return console.log(string.toUpperCase());
}

function logWhisper(string){
    return console.log(string.toLowerCase());
}

function logShout2(string){
    console.log(shout(string));
}

function sayHiToGrandma(string){
    if (string === string.toUpperCase())
    {
    return "YES INDEED!";
} else if (string === `I love you, Grandma.`){
   return "I love you, too.";
} else {
    return ("I can't hear you!")
};
}

//     const string = "";

// function sayHiToGrandma(x){
//     if x === x.toUpperCase();
//     return "YES INDEED!";
// } else {
//     "I can't hear you";
// }

// console.log(sayHiToGrandma("I CANT HEAR YOU"));

// function logShout(string){
//     const newWord = "";
//     newWord = string.toUpperCase();
//     console.log(newWord);
    
// }npm t

console.log(shout("Zach"));
console.log(whisper("SKETCH"));
console.log(logShout("Call me when you get lost"));
console.log(logShout2("Call me when you get lost"));
console.log(logWhisper("I'LL CALL YOU IF I GET LOST"));
console.log(sayHiToGrandma('CALL ME IF YOU GET LOST')); 
console.log(sayHiToGrandma('Call me when you get lost')); 
console.log(`I love you, Grandma.`)
// console.log(whisper("HOLY MOLY"));
// console.log('Hello');