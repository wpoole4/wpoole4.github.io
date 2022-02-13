function scriptTest(){
    alert("Hey my script is running");
}
function greeting(){
    let name = document.getElementById('name').value;
    let feeling = document.getElementById('feeling').value;
    let welcome = "White Parrots welcomes you, " + name + ", we're glad/saddened to hear you're doing " + feeling + "!";
    document.getElementById("greetingmessage").innerHTML = welcome;
}

function outputParrot(){
    let uInput = prompt("Type a word for a parrot to say");
    uInput = uInput.toString;
    alert(`Parrot says ${uInput}`);
}