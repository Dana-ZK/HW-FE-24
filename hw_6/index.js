// task 1
const arr = ['Vasya', 'Petya', 'Alexey']

removeUser = (arr, index) => arr.splice(index,1)

removeUser(arr, 1)

console.log(arr)

// task 2

const obj = { name: 'Vasya', age: 1, surname: 'Krylov' }

let getAllKeys = (obj) => {
    return (Object.keys(obj))
}

getAllKeys(obj) 

// task 3

const objVal = { name: 'Vasya', age: 1, surname: 'Krylov' }

let getAllVal = (obj) => {
    return (Object.values(obj))
}

getAllVal(objVal) 

// task 4
const objA = {
    id: 3,
    name: 'Vasya'
}

const secondObj = {
    id: 4,
    name: 'Katya'
}

const arrA = [
    {
        id: 1,
        name: 'Kolya'
    },
    {
        id: 2,
        name: 'Petya'
    },
];


const insertIntoArr = (user, searchId) => {
  arrA.splice(
    arrA.findIndex((user) => user.id === searchId),
    0,
    user
  );
};

insertIntoArr(objA, 2);
console.log(arrA);
insertIntoArr(secondObj, 1);
console.log(arrA);


//task 5

class Condidate {
    constructor(obj) {
        Object.assign(this, obj)
    }
    get state  () { 
        const adresState = this.address.split(', ');
        return adresState[2];
    }
}
const condidate = new Condidate(condidateArr[1])
console.log(condidate.state)


//task 6

const getCompanyNames = () => {
    let arrOfCompanes = [];
    for (let nameOfCompany of condidateArr) {
        if (arrOfCompanes.includes(nameOfCompany.company)) {
            continue;
        }
        arrOfCompanes.push(nameOfCompany.company);
    }
    return arrOfCompanes
}


console.log(getCompanyNames()) /// [""EZENT, "JASPER" ... ]


//task 7

const getUsersByYear = (year) => {
    let arrOfUsers = [];
    for (let yearOfStart of condidateArr) {
        if (Number(yearOfStart.registered.split('-', 1)) === year) {
            arrOfUsers.push(yearOfStart._id);
        }
    }
    return arrOfUsers
}
console.log(getUsersByYear(2017))

//task 8

function getCondidatesByUnreadMsg(num) {
    return condidateArr
        .filter(item => item.greeting.match(/\d+/) == num);
}

console.log(getCondidatesByUnreadMsg(6))


// task 9

function getCondidatesByGender(gender) {
    return condidateArr
        .filter(item => item.gender == gender);
}

console.log(getCondidatesByGender('male'))