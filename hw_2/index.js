// task 1

const citiesAndCountries = {
	'Киев': 'Украина',
	'Нью-Йорк': 'США',
	'Амстердам': 'Нидерланды',
	'Берлин': 'Германия',
	'Париж': 'Франция',
	'Лиссабон': 'Португалия',
	'Вена': 'Австрия',
};

let result = function (obj) {
let citiesArr = [];
  for (let key in obj) citiesArr.push(`${key} — это ${obj[key]}`);
  return citiesArr;
};
console.log(result(citiesAndCountries));


//task 2

function getArray() {
  const finishArr = [];
  const amount = 12;

  for (let i = 1; i<=amount;) {
    for (let j = 0; j < 3; j++) {
      finishArr[j] = i;
      i++;
    }
    console.log(finishArr)
  }
}
getArray();

  
// task 3

const namesOfDays = {
  ru: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
  en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
}

function getNameOfDay(lang, day){
   
    
  if (lang === 'en') {
    console.log(namesOfDays[lang][day -1])
  } else if (lang === 'ru') {
    console.log(namesOfDays[lang][day -1])
  } else {
    console.log('Incorrect lang')
  }
  
}

getNameOfDay('ru', 3)


// task 4

let sumOfArr = function (arr) {
  let sortingArr = arr.sort((num1, num2) => {
    return num1 - num2
  });
  return (sortingArr[0] + sortingArr[1])
}
console.log(sumOfArr([19, 5, 42, 2, 77]))  
