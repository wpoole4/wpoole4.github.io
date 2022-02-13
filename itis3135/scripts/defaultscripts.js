function scriptTest(){
    alert("Hey my script is running");
}
function greeting(){
    let name = document.getElementById('name').value;
    let feeling = document.getElementById('feeling').value;
    let welcome = "White Parrots welcomes you, " + name + ", we're glad/saddened to hear you're doing " + feeling + "!";
    document.getElementById("greetingmessage").innerHTML = welcome;
}

function parrotWord(){
    let uInput = prompt("Type a word for a parrot to say");
    alert("Parrot says: " + uInput);
}

function addParrots(){
    let uInput1 = prompt("How many parrots do you have?")
    uInput1 = parseInt(uInput1);
    let uInput2 = prompt("How many parrots do you want?");
    uInput2 = parseInt(uInput2);
    var sum = uInput1 + uInput2;
    alert("You could potentially have " + sum + " parrots!");
}
function birdCageFunction(){
    let uInput3 = prompt("3 parrots can safely fit in a cage, how many parrots do you have?");
    uInput3 = parseInt(uInput3);
    var cages =  uInput3 / 3;
    cages = Math.ceil(cages);
    alert("You, at minimum, can have " + cages + " cages!");
}
function calcParrotPrice(){
    let uInput4 = prompt("Parrots cost around 150 dollars, how many parrots would you like to purchase?");
    uInput4 = parseInt(uInput4);
    var total = uInput4 * 150;
    alert("The total cost of " + uInput4 + " parrots will be " + total + "!");
}
function averageParrotSize(){
    let uInput5 = prompt("Weigh your parrots, we're going to average their size, how many parrots do you have?");
    uInput5 = parseInt(uInput5);
    const parrotWeight = [];
    for (var i = 0; i < uInput5; i++){
        parrotWeight[i] = prompt("Weigh your parrot");
        parrotWeight[i] = parseFloat(parrotWeight[i]);
    }
    var total = 0;
    for (var j = 0; i < parrotWeight.length; j++){
        total += parrotWeight[j];
    }
    var average = total / parrotWeight.length;
    alert("Your parrots weigh an average of: " + average);
}