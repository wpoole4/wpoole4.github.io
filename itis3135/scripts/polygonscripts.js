function getNumSides(){ //Function to take user input, ensure it's valid, and return it
    let userInput = prompt("The White Parrots would like your number... must be between 1-10, we will name your polygon");
    userInput = parseInt(userInput); //Prompt user and take input

    while (userInput > 10 || userInput < -10 || isNaN(userInput)){ //If input isn't a number or out of range, produce error until correct
        userInput = prompt("The White Parrots demand your number is real and between 0-10");
        userInput = parseInt(userInput);
    }
    //Round the number and make the number positive if it isn't
    userInput = Math.round(userInput);
    userInput = Math.abs(userInput);

    return userInput;
}