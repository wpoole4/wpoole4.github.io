window.onload = function(){
    document.getElementById('employees').focus();
}
const people = [];
const salaries = [];

function addSalary(){
    document.getElementById('employees').focus();
    var selectedEmployee = document.getElementById('employees').value;
    var inputSalary = parseFloat(document.getElementById('salary').value);

    for (i = 0; i < people.length; i++){
        if (selectedEmployee == people[i]){
            alert("Choose a different employee, you've already added this one!");
            return;
        }
    }
    if (inputSalary < 0 || isNaN(inputSalary)){
        alert("Please enter a positive number for a salary.");
        return;
    } else {
        people.push(selectedEmployee);
        salaries.push(inputSalary);
    }
    document.getElementById('employees').focus();
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


for (i = 0; i < salaries.length; i++){
    if (salaries[i] > highestSalary){
        highestSalary = salaries[i];
        employeeHighestSalary = people[i];
    }
}
let headingMessage = "Results"
document.getElementById("resultsHeading").innerHTML = headingMessage;
let message = "The average salary is $" + average + " and the highest salary is " + employeeHighestSalary + " at $" + highestSalary;
document.getElementById("resultMessage").innerHTML = message;
}

function displaySalary(){
    var table;
    table = "<tr><th>Employee</th><th>Salary</th></tr>";
    for (i = 0; i < salaries.length; i++){
        table += "<tr><td>" + people[i] + "</td><td>" + salaries[i] + "</td></tr>";
    }
    document.getElementById("results_table").innerHTML = table;
}