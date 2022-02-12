function scriptTest(){
    alert("Hey my script is running");
}
function greeting(){
    var name = doucment.getElementById("name").value;
    var feeling = document.getElementById("feeling").value;
    var welcome = "White Parrots welcomes you, " + name + ", we're glad/saddened to hear you're doing" + feeling + "!";
    document.getElementById("greetingmessage").innerHTML = welcome;
}