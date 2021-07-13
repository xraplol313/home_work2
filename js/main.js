let name = 'Дима';
let age = 28;
let city = 'Москва';
let phone = 375256666666;
let email = 'sammerkarma@gmail.com';
let company = 'aplle';

console.log('Меня звать ' + name + '. Мне ' + age + ' лет. ' + 'Я живу в городе ' + city + ' и работаю в компании ' + company + '. Мои контактные данные, телефон - ' + phone + ' email - ' + email);

//======================== 2

let yearOfBirth = 2021 - age;
console.log(name + ' родился в ' + yearOfBirth + ' году');


//========================3

let x = '123456';
let a = 1 + 2 + 3;
let b = 4 + 5 + 6;
if (a == b) {
    console.log('Да');
} else {
    console.log('Нет');
}

//=====================4

let a1 = 3;
if (a1 > 0) {
    console.log('Верно');
} else {
    console.log('Не верно');
}

let a2 = 1;
if (a2 > 0) {
    console.log('Верно');
} else {
    console.log('Не верно');
}

let a3 = 0;
if (a3 > 0) {
    console.log('Верно');
} else {
    console.log('Не верно');
}

let a4 = -3;
if (a4 > 0) {
    console.log('Верно');
} else {
    console.log('Не верно');
}


//=======================5

let q = 10;
let w = 2;

let summ = q + w;
let raznost = q - w;
let proizvodnoe = q * w;
let chastnoe = q / w;

console.log(summ, raznost, proizvodnoe, chastnoe);

if (summ > 1) {
    console.log(summ ** 2);
}

//======================6

if (q > 2 || q < 11 && w >= 6 || w < 14) {
    console.log('Верно');
} else {
    console.log('Не верно');
}

//=======================7

let rand = Math.floor(Math.random() * 59);
if (rand < 15) {
    console.log('Первая часть');
} else if (rand < 30 && rand > 15) {
    console.log('Часть два');
} else if (rand < 45 && rand > 30) {
    console.log('Часть три');
} else if (rand < 59 && rand > 45) {
    console.log('Часть четыре');
}
console.log(rand)

//=======================8

let dec = Math.floor(Math.random() * 30);
if (dec < 10) {
    console.log('Первая декада');
} else if (rand < 20 && rand > 10) {
    console.log('Вторая декада');
} else if (rand < 30 && rand > 20) {
    console.log('Третья декада');
}
console.log(dec)


//=======================9 
let year = 365;
let month = 365 / 30;
let week = 365 / 7;
let hour = 24;
let minuts = 60 * 24;
let second = 60 * 60 * 24;

if (year < 365) {
    console.log('Меньше года')
}

if (month < 365) {
    console.log('Меньше месяца')
}

if (week < 365) {
    console.log('Меньше недели')
} 




//======================10

let data = Math.floor(Math.random() * 365);
if (data < 30) {
    console.log('январь');
} else if (data < 60 && data > 30) {
    console.log('февраль');
} else if (data < 90 && data > 60) {
    console.log('март');
} else if (data < 120 && data > 90) {
    console.log('апрель');
} else if (data < 150 && data > 120) {
    console.log('май');
} else if (data < 180 && data > 150) {
    console.log('июнь');
} else if (data < 210 && data > 180) {
    console.log('июль');
} else if (data < 240 && data > 210) {
    console.log('август');
} else if (data < 270 && data > 240) {
    console.log('сентябрь');
} else if (data < 300 && data > 270) {
    console.log('октябрь');
} else if (data < 330 && data > 300) {
    console.log('ноябрь');
} else if (data < 365 && data > 330) {
    console.log('декабрь');
}

if (data < 90) {
    console.log('зима');
} else if (data < 180 && data > 90) {
    console.log('весна');
} else if (data < 270 && data > 180) {
    console.log('лето');
} else if (data < 365 && data > 270) {
    console.log('осень');
}