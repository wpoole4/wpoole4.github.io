function scriptTest(){
    alert("Hey my script is running");
}
function greeting(){
    let name = doucment.getElementById("name").value;
    let feeling = document.getElementById("feeling").value;
    let welcome = "White Parrots welcomes you, " + name + ", we're glad/saddened to hear you're doing" + feeling + "!";
    document.getElementById("greetingmessage").innerHTML = welcome.value;
}