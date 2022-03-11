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

// promt передает в качестве значения строки
/* let num = +prompt('Enter a number')

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
} */

/* let a = 82
let b = 32

if (a > b) {
    console.log(a)
} else {
    console.log(b)
} */

/* let monthNumber = +prompt('Enter month number')

switch (monthNumber) {
    case 1:
        console.log('January')
        break
    case 2:
        console.log('February')
        break
    case 3:
        console.log('March')
        break
    case 4:
        console.log('April')
        break

    default: 
        alert('Error')
}  */

/* let circle = 25
let square = 30

if (circle > square) {
    console.log('Yes')
} else {
    console.log('No')
} */

/* let sum = 0
let number = 1

while (number <= 100) {
    sum = sum + number
    number = number + 1
}

console.log(sum) */

/* const input = +prompt('Enter a number')

let fact = 1
for (let number = 1; number <= input; number++) {
    fact = fact * number
}

console.log(fact) */

/* let sum = 0
for (let number = 1; number <= 100; number++) {
    sum = sum + number
}

console.log(sum) */

/* let sum = 0

while(true) {
    const input = prompt('Enter a number or =')

    if (input == '=') {
        break
    } else {
        sum = sum + Number(input)
    }
}

console.log(sum) */

/* let sum = 0

for (let num = 50; num <= 100; num++) {
    sum = sum + num
}

console.log(sum) */

/* let num = 7
let sum

for (let value = 1; value <= 9; value++) {

    switch (value) {
        case 1:
            sum = num * value
            console.log(sum)
            break
        case 2:
            sum = num * value
            console.log(sum)
            break
        case 3:
            sum = num * value
            console.log(sum)
            break
        case 4:
            sum = num * value
            console.log(sum)
            break
        case 5:
            sum = num * value
            console.log(sum)
            break
        case 6:
            sum = num * value
            console.log(sum)
            break
        case 7:
            sum = num * value
            console.log(sum)
            break
        case 8:
            sum = num * value
            console.log(sum)
            break
        case 9:
            sum = num * value
            console.log(sum)
            break
        }
} */

/* const auto = {
    model: 'Mers',
    year: 2012,
    color: 'black'
}

const input = prompt('Enter a property') */
/* const value = auto[input]

if (value) {
    console.log(value)
} else {
    console.log('Not found')
} */

/* let user = {
    age: 30,
    gender: 'Mal'
}

let input = prompt('Enter')
let hasEnter = input in user

if (hasEnter) {
    delete user[input]
} else { 
    user[input] = null
}

console.log(user) */
/* 
const storGood = {
    number: 1001,
    place: 'A101',
    weight: 25
}

const shopGood = Object.assign({}, storGood, {cost: 10})

console.log(storGood, shopGood) */

/* let person = {
    name: 'Sam',
    years: 25
}

let {name, years:age, height=null} = person

console.log(name, age, height) */

/* const user = {
    name: 'John',
}

const input = prompt('Enter your age')
user.age = input

const admin = Object.assign({}, user, {role: 'admin'})
let {name, age, role} = admin

console.log(user, admin, name, age, role) */

/////////////////////////////// МАССИВЫ //////////////////////////////////

let arr = [1, 2, 3, 4, 5]

arr.pop(); //- удалить последений элемент массива
arr.push('5'); // - добавить элемент в конец массива. В данном случае строку
arr.shift(); //- удалить первый элемент массива
arr.unshift('1') // - добавить элемент в начало массива. строку

for (let i = 0; i < arr.lenght; i++) {
    console.log(arr[i])
}

/* const nums = [10, 20, 30, 40, 50]

const input = +prompt('Enter')
const index = nums.indexOf(input)

if (index > -1) {
    console.log(index)
} else {
    console.log('Not found')
} */

/* const arr = []

for (let i = 0; i < 5; i++) {
    let input = prompt('Enter')
    arr.push(input)
}

console.log(arr) */

/* const nums = [2,12,34,23,21]

const input = +prompt('Enter')
const index = nums.indexOf(input)

if (index > -1) {
    nums.splice(index, 1)
} else {
    console.log('Not found')
}

console.log(nums) */

/* const nums = [2, 12, 34, 23, 21];
const input = prompt('Enter');
const userArr = input.split(',');
const newArr = nums.concat(userArr);
console.log(newArr) */

/* let arr = [12,23,34,53,89];
arr = arr.map(function (el) {
    let newValue;

    if (el % 2 ==0) {
        newValue = el/2;
    } else {
        newValue = el;
    }

    return newValue;
});
console.log(arr); */


///////////////////////////////////// ФУНКЦИИ /////////////////////////////

/* function calc(num, exp) {
    let res = 1;

    for (let i = 1; i <= exp; i++) {
        res = res * num;
    }

    return res;
}

const result = calc(2, 10);
console.log(result) */

/* const area = (a, b) => {
    if ((a > 0) && (b > 0)) {
        return a * b;
     } else {
            return null;
        }
    }
const result = area(5, 4);
console.log(result); */

/* function outer() {
    return function () {
        console.log('+');
    }
}

const value = outer();

value(); */

/* function counter(from, to) {
    let number = from;

    const id = setInterval(() => {
        console.log(number)

        if (number == to) {
            clearInterval(id);
        } else {
            number++
        }
    }, 1000);
}

counter(4, 8); */

/* const el = document.querySelector('.last');
console.log(el);
el.style.color = 'red'; */

/* const input = prompt('Enter');
const el = document.querySelector('.title');

el.innerText = input */

/* const input = prompt('Enter');
const el = document.querySelector('.title');

el.innerHTML = `<i>${input}</i>`; */

/* const input = prompt('Enter');
const messageEl = document.createElement('p');
messageEl.innerText = input;

const messageBox = document.querySelector('.messages');
messageBox.append(messageEl); */

