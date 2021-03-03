// task 1


let incrementSum = ()=> { 
    let sum = 0;
    return (sumPlusNum) =>{
        return (sum += sumPlusNum);
    }
}
 
let counter = incrementSum()

console.log(counter(3)) // 3
console.log(counter(5)) // 8
console.log(counter(228)) // 236
  

// task 2

let arrToUp = () => {
    let arr = [];
    return (smth) => {
        if (!smth) {
       return arr = []
    } else {
            arr.push(smth);
            return arr
    }
    }
}

const getUpdatedArr = arrToUp();


console.log(getUpdatedArr(3)) // [3]
console.log(getUpdatedArr(5)) // [3, 5]
console.log(getUpdatedArr({name: 'Vasya'})) // [3, 5, {name: 'Vasya'}]
console.log(getUpdatedArr()) // []


// task 3






//task 4

const futureDate = new Date("May 08, 2021 12:00:00").getTime();

const x = setInterval(function() {
 
     const now = new Date().getTime();
     
    
     const timer = futureDate - now;
     
     const days = Math.floor(timer / (1000 * 60 * 60 * 24));
     const hours = Math.floor((timer % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
     const minutes = Math.floor((timer % (1000 * 60 * 60)) / (1000 * 60));
     const seconds = Math.floor((timer % (1000 * 60)) / 1000);
     
     document.getElementById("timer").innerHTML = days + "days " + hours + "hours "
     + minutes + "min " + seconds + "ses ";
     
     if (timer < 0) {
         clearInterval(x);
         document.getElementById("timer").innerHTML = "Time is end";
     }
}, 1000);