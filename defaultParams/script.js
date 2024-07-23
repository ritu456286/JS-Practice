// earlier with no default params, we used to do this   
// function rollDie(numSides){
//     
//     if(numSides == undefined){
//         numSides = 6;
//     } 
//     console.log(Math.floor(Math.random() * numSides) + 1);
// }

function rollDie(numSides = 6){
    
    console.log(Math.floor(Math.random() * numSides) + 1);
}

// cannot have default parameters before non-default paramenters
function greet(msg, person, punc="!"){
    console.log(`${msg}, ${person}${punc}`);
}