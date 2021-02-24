// task 1
for (let i = 1; i <= 10; i++)
    { if (i%3 == 0) {
    console.log (i, 'FizBuz')
    } else if (i%2 == 0) {
    console.log (i, 'Fiz')
    } else {
    console.log (i, 'Buz')
    }}
  
    // task 2

function factorial(n) { 
    if (n == 0) {
        return 1
    } else if (n == 1) {
        return 1
    } else {
        return n * factorial(n-1)}
    }

console.log(factorial(10))

    //task 3

const sheetsInReamPaper = 500;
const consumptionPerWeek = 1200;
const weeksAmount = 8;

let paperAmount = consumptionPerWeek * weeksAmount;

if( paperAmount %sheetsInReamPaper == 0) {
    reamAmount = (paperAmount / sheetsInReamPaper)
} else {
    reamAmount = (paperAmount / sheetsInReamPaper) - paperAmount %sheetsInReamPaper/ sheetsInReamPaper + 1 }
console.log(reamAmount)



const roomsOnFloor = 3;
const floors = 9;
const roomNumber = 794 //или любое другое число, но минимум трехзначное

const roomsInPorch = roomsOnFloor * floors

    if( roomNumber%roomsInPorch == 0){
        porch = roomNumber / roomsInPorch
    } else {
        porch = (roomNumber / roomsInPorch) - roomNumber%roomsInPorch / roomsInPorch + 1
    }

    console.log('Porch #', porch)

    if (roomNumber%roomsInPorch%roomsOnFloor == 0) {
        floor = roomNumber%roomsInPorch / roomsOnFloor
    } else {
        floor = (roomNumber%roomsInPorch / roomsOnFloor) - roomNumber%roomsInPorch%roomsOnFloor / roomsOnFloor + 1
    }

    console.log('You need ',  floor, ' floor')



// task 5

