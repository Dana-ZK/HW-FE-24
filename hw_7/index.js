//task 1

const searchCandidatesByPhoneNumber = (phone) => {
    let arrOfNumbers = [];
    const byPhoneArr = condidateArr.filter(item => {
        arrOfNumbers = item.phone
            .match(/\d/g)
            .join('')
            .includes(phone.match(/\d/g).join(''))
        return arrOfNumbers
    })
    return byPhoneArr
}
    
console.log(searchCandidatesByPhoneNumber("43"));
console.log(searchCandidatesByPhoneNumber("+1 (869) 40"));
console.log(searchCandidatesByPhoneNumber("33"));
console.log(searchCandidatesByPhoneNumber("+1(869)408-39-82"));


// task 2

let getCandidateById = (id) => {
    let personArr =  condidateArr.find(item =>item._id == id);
    
    let registretedDate = personArr.registered.split('').splice(0, 10).join('').split('-').reverse().join('');
    personArr.registered = registretedDate;
    return personArr
}

console.log(getCandidateById('5e216bc9a6059760578aefa4'))

// task 3

const sortCandidatesArr = sortBy => {
    if (!sortBy) {
       return [...condidateArr]
    } else if (sortBy === 'asc') {
        return condidateArr.sort((a,b) =>a.balance.match(/\d/g).join('') - b.balance.match(/\d/g).join('')) 
    } else if (sortBy === 'desc') {
        return condidateArr.sort((a,b) => b.balance.match(/\d/g).join('') - a.balance.match(/\d/g).join(''))
   }
}

console.log(sortCandidatesArr('asc')) 
console.log(sortCandidatesArr()) 
console.log(sortCandidatesArr('desc')) 