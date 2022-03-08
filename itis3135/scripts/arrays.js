const people = {};
const salaries = {};

function addSalary(){
    var selectedEmployee = document.getElementById("employees").value;
    var inputSalary = parseFloat(document.getElementById("salary").value);

    if (inputSalary < 0){
        alert("Please enter a posiive number for a salary.");
    } else {
        people.push(selectedEmployee);
        salaries.push(inputSalary);
    }
}

function displayResults(){
var sum = 0;
var average;
var highestSalary;
var employeeHighestSalary;

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
let message = "The average salary is $" + average + " and the highest salary is " + employeeHighestSalary + " at $" + highestSalary;
document.getElementById("results").innerHTML = message;
}

function displaySalary(){

}