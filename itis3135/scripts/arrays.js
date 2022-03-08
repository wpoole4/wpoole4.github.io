const people = [];
const salaries = [];

function addSalary(){
    var selectedEmployee = document.getElementById('employees').value;
    var inputSalary = parseFloat(document.getElementById('salary').value);

    for (i = 0; i < people.length; i++){
        if (selectedEmployee == people[i]){
            alert("Choose a different employee, you've already added this one!");
        }
    }
    if (inputSalary < 0 || isNaN(inputSalary)){
        alert("Please enter a positive number for a salary.");
    } else {
        people.push(selectedEmployee);
        salaries.push(inputSalary);
    }
}

function displayResults(){
var sum = 0;
var average;
var highestSalary = 0;
var employeeHighestSalary = "";

for (i = 0;  i < salaries.length; i++){
    sum += salaries[i];
}
average = sum / salaries.length;
}

for (i = 0; i < salaries.length; i++){
    if (salaries[i] > highestSalary){
        highestSalary = salaries[i];
        employeeHighestSalary = people[i];
    }
let headingMessage = "Results"
document.getElementById("resultsHeading").innerHTML = headingMessage;
let message = "The average salary is $" + average + " and the highest salary is " + employeeHighestSalary + " at $" + highestSalary;
document.getElementById("resultMessage").innerHTML = message;
}

function displaySalary(){

}