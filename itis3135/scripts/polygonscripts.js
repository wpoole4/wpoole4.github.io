function getSides(){ //Function to take user input, ensure it's valid, and give a polygon
    var polygonSides = prompt("The White Parrots would like your number... must be between 1-10, we will name your polygon");
    polygonSides = parseInt(userInput); //Prompt user and take input
    var validSides = validateEntry(polygonSides); //Validae the user input
    var polygonName = getShape(validSides); //Get the polygon based off of the valid sides
    alert(polygonName); //Put polygon in alert box
}

function getShape(side){ //Function tot get the polygon name 
    var polygon;
    //10 if statements to get the polygon
    if (side == 0){
        polygon = "Doesn't exist";
    }
    if (side == 1){
        polygon = "Henagon";
    }
    if (side == 2){
        polygon = "Digon";
    }
    if (side == 3){
        polygon = "Trigon";
    }
    if (side == 4){
        polygon = "Tetragon";
    }
    if (side == 5){
        polygon = "Pentagon";
    }
    if (side == 6){
        polygon = "Hexagon";
    }
    if (side == 7){
        polygon = "Heptagon";
    }
    if (side == 8){
        polygon = "Octagon";
    }
    if (side == 9){
        polygon = "Enneagon";
    }
    if (side == 10){
        polygon = "Decagon";
    }
    if (side < -10 || side > 10){
        getSides();
    }
    return polygon;
}
function validateEntry(userInput){ //Function to ensure that the user input is valid
    while (userInput > 10 || userInput < -10 || isNaN(userInput)){ //If input isn't a number or out of range, produce error until correct
        userInput = prompt("The White Parrots demand your number is real and between 0-10");
        userInput = parseInt(userInput);
    }
    //Round the number and make the number positive if it isn't
    userInput = Math.round(userInput);
    userInput = Math.abs(userInput);

    return userInput;
}