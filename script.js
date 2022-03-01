/* const firstName = 'Alex'
const secondName = 'Boyko'

console.log(`Hello, ${firstName} ${secondName}`)

console.log(firstName.length)

const userName = prompt('Enter your name') 
console.log(userName.length) */

// const Kb = 15
/* const bit = 15 * 1024 * 8
console.log(bit) */

// const miles = prompt('Enter miles')
// const kilometers = miles * 1.6
/* console.log(+kilometers.toFixed(2)) */

// console.log(typeof Kb)

/* const value1 = 'mor'
const value2 = 'morth'
const value1Sum = value1.length
const value2Sum = value2.length
console.log(value1Sum + value2Sum) */

// const number = prompt('Enter a number')
// const compare = (number >= 10) && /* И */(number <= 99) || /* ИЛИ */ (number <= -10)
// console.log(compare) 

/* const age = prompt('Enter yur age')

if (age >= 18 && age <= 75) {
    alert('Welcome!')
} else if (age < 18) {
    alert('Too Young!')
} else if (age > 75) {
    alert('Too Old!')
} */

/* const gender = prompt('Enter your gender')

let userGender

if (gender == 'M') {
    userGender = 'Male'
} else if (gender == 'F') {
    userGender = 'Female'
} else {
    alert('Error!!!!!!')
}

console.log(userGender) */

// promt передает вкачестве значения строки
let num = +prompt('Enter a number')

switch (num) {
    case 0:
        alert(0)
        break
    case 1:
        alert(1)
        break
    case 2:
    case 3:
        alert('2,3')
        break

    default: 
        alert('Error')
}