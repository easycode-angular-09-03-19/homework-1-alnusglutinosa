// ПРЕЗЕНТАЦИЯ №1: Введение в TypeScript. Типы данных. Интерфейсы.
console.log("ПРЕЗЕНТАЦИЯ №1:");
// 1. Создать функцию которая принимает число и считает факториал этого числа.
function getFactorial(numberVariable) {
    let factorial = 1;
    for (var i = 2; i <= numberVariable; i++) {
        factorial *= i;
    }
    return factorial;
}
console.log("1) Факториал 5 =", getFactorial(5));
// 2. Создать функцию multiply, которая будет принимать любое количество чисел и возвращать их произведение: multiply(1,2,3) = 6 (1*2*3)
// Если нет ни одного аргумента, вернуть ноль: multiply() // 0
function multiply(...argumentsArray) {
    if (!argumentsArray.length) {
        return 0;
    }
    let result = 1;
    for (let i = 0; i < argumentsArray.length; i++) {
        result *= argumentsArray[i];
    }
    return result;
}
console.log("2) произведение 1, 2, 3 =", multiply(1, 2, 3));
// 3. Создать функцию, которая принимает строку и возвращает строку-перевертыш: reverseString(‘test’) // “tset”.
function reverseString(stringVariable) {
    return stringVariable
        .split("")
        .reverse()
        .join("");
}
console.log("3)", reverseString("test"));
// ПРЕЗЕНТАЦИЯ №2: Основы TypeScript. Generics. Classes. Abstracts. Interfaces.
console.log("ПРЕЗЕНТАЦИЯ №2:");
// 1. Создайте абстрактный класс Car с двумя методами drive (ехать) и refuel (заправка) а также с двумя свойствами
// mileage (общий пробег машины) и fuel (количество бензина в машине).
// 2. Наследоваться от абстрактного класса Car и реализовать методы абстрактного класса
// drive (ехать) и refuel (заправка).
// Метод drive должен принимать количество километров и обновлять свойство mileage
// и уменьшать значение свойства fuel если бензин закончился то нужно вернуть сообщение о том что нужно заправиться.
// Метод refuel должен увеличивать свойство fuel.
// Обязательно делать проверку переданных данных. Свойства fuel и mileage должны быть protected.
// 3. Создать публичный get для получения свойств fuel и mileage.
class Car {
    constructor(fuel, mileage) {
        this._fuel = fuel;
        this._mileage = mileage;
    }
}
class Bmw extends Car {
    constructor(_mileage = 0, _fuel = 0) {
        if (typeof _mileage !== "number" || isNaN(_mileage)) {
            throw new Error("class Bmw : mileage - not number");
        }
        if (typeof _fuel !== "number" || isNaN(_fuel)) {
            throw new Error("class Bmw : fuel - not number");
        }
        super(_mileage, _fuel);
    }
    drive(quantityKilometers = 1) {
        if (typeof quantityKilometers !== "number" || isNaN(quantityKilometers)) {
            throw new Error("class Bmw : quantityKilometers - not number");
        }
        if (this._fuel - quantityKilometers < 0) {
            this._mileage += this._fuel;
            this._fuel = 0;
            return console.log("Нужно заправиться!");
        }
        this._fuel = this._fuel - quantityKilometers;
        this._mileage += quantityKilometers;
    }
    refuel(quantityFuel = 1) {
        if (typeof quantityFuel !== "number" || isNaN(quantityFuel)) {
            throw new Error("class Bmw : quantityFuel - not number");
        }
        this._fuel += quantityFuel;
    }
    get fuel() {
        return this._fuel;
    }
    get mileage() {
        return this._mileage;
    }
}
const myBmw = new Bmw(1000, 2000);
console.log(myBmw);
myBmw.refuel(500);
myBmw.drive(5500);
console.log('fuel:' + myBmw.fuel + ', mileage:' + myBmw.mileage);
