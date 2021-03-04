// task 1
const Emploee = function (person) {
    this.id = person.id;
    this.name = person.name;
    this.surname = person.surname;
    this.salary = person.salary;
    this.workExperience = person.workExperience;
    this.isPrivileges = person.isPrivileges;
    this.gender = person.gender
}

const employeeObj = new Emploee(emplyeeArr[6]);

console.log(employeeObj)

//task 2

Emploee.prototype.getFullName = function () {
    return this.name + ' ' + this.surname;
}
console.log(employeeObj.getFullName())

// task 3 

let createEmployesFromArr = (arr) => {
    let oneMoreEmployee = [];
    for (let key of arr) {
        oneMoreEmployee.push(new Emploee(key))
    }
    return oneMoreEmployee;

};
const emplyeeConstructArr = createEmployesFromArr(emplyeeArr)
console.log (emplyeeConstructArr)


//task 4

const getFullNamesFromArr = (arr) => {
    let namesOfEmploee = [];
    for (let listNames of arr) {
        namesOfEmploee.push(listNames.name + ' ' + listNames.surname)
    }
    return namesOfEmploee
}
       
console.log(getFullNamesFromArr(emplyeeConstructArr))

// task 5

const getMiddleSalary = (arr) => {
    let sizeSalary = 0;
    for (let sumSalary of arr) {
        sizeSalary += sumSalary.salary
    }
    return sizeSalary / arr.length;
}

console.log(getMiddleSalary(emplyeeConstructArr))
