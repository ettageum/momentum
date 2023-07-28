console.log("Hello" + " stranger");
const a = 10;
const b = "2";
let myName = "Allen";
const thisIsHowNamingVariablesInJs = "camelCase";

console.log(a + b);
console.log(a * b);
console.log(a / b);

//? +는 텍스트 간에 결합에서도 쓰이지만 *이나 /는 그대로의 의미로만 사용하니 이런 차이가 발생하나 봐.

console.log("hello " + myName);

myName = "Azur";
console.log("Your nnew name is " + myName);

const amIFat = null;
let something;
console.log(amIFat);
console.log(something);

//* always const, sometimes let, never var.

//* #2.5 Array

const mon = "mon";
const tue = "tue";
const wed = "wed";
const thu = "thr";
const fri = "fri";
const sat = "sat";
const sun = "sun";

const daysOfWeek = [mon, tue, wed, thu, fri, sat];
const nonsense = [1, 2, "hello", false, null, true, undefined, "Allen"];

console.log(nonsense);

nonsense[2] = "buy";

console.log(daysOfWeek, nonsense);

//* Get Item from Array
console.log(daysOfWeek[5]);
console.log(daysOfWeek[10]);
console.log(nonsense[4]);

//* Add noe more item to the array
daysOfWeek.push(sun);
console.log(daysOfWeek);

const toBuy = ["tomato", "potato", "cheeze"];
toBuy.push("ponds");
console.log(toBuy);

// Objects

//? player 에 대한 데이터를 만들기 위해 중복된 것들이 많이 나온다. 더 나은 방법은 없을까?
const playerNmae = "Allen";
const playerPoints = 256;
const playerHandsome = true;
const playerFat = "little";

//* Array does'nt say what this item means.
// const player = ["Allen", "256", true, "little"];
// plyer[0] == name
// player[1] == points
// ..

const player = {
  name: "allen",
  points: 256,
  fat: true,
};
console.log(player);
console.log(player.name);
console.log(player["name"]);

//* There is no problem to update inside of const;object item.
player.name = "ettageum";
player.points = 512;
console.log(player);

player.lastName = "Ye";
player.points = player.points + 10;
console.log(player);

// #2.7 function; 계속 반복해서 사용할 수 있도록 설정하는 코드 조각; capsulate some codes to use repeatably.

// alert("Hello");

console.log("Hello my name is Allen");
console.log("Hello my name is Harry");
console.log("Hello my name is James");
console.log("Hello my name is Yuhta");

function sayHello(nameOfPerson, age) {
  console.log(
    "Hi! my name is " + nameOfPerson + ". I'm " + age + " years old."
  );
}

sayHello();
sayHello("nico", 23);
sayHello("Allen", 35);
sayHello("Yuhta", 25);

function plus(a, b) {
  console.log(a + b);
}

plus();
plus(3, 4);

function devide(a, b) {
  console.log(a / b);
}
plus(20, 5);
devide(20, 5);

//* 내가 원하는 형태로 function을 만들기 위한 방법.

const playerRe = {
  name: "Allen",
  sayHelloRe: function (ohterPersonsName) {
    console.log("Hello! " + ohterPersonsName + ". Nice to meet you.");
  },
};

console.log(playerRe.name);
playerRe.sayHelloRe("Lynn");
playerRe.sayHelloRe("Allen");

// #2.10 recap II

const playyyer = {
  name: "nico",
  age: 27,
};

console.log(playyyer.name);
console.log(playyyer, console);
playyyer.name = "Allen";
console.log(playyyer);
playyyer.sexy = "soon";
console.log(playyyer);

const calculator = {
  add: function (a, b) {
    console.log(a + b);
  },
  mie: function (a, b) {
    console.log(a - b);
  },
  divide: function (a, b) {
    console.log(a / b);
  },
  times: function (a, b) {
    console.log(a * b);
  },
  powerof: function (a, b) {
    console.log(a ** b);
  },
};
calculator.add(4, 5);
calculator.mie(9, 4);
calculator.divide(10, 5);
calculator.times(4, 6);
calculator.powerof(2, 5);

// console.log를 사용하지 않고 function을 사용하는 게 좋다.

// #2.11 Returns
console.log("-----#2.11 Returns-----");

const age = 96;
function calculateKrAge(ageOfForeigner) {
  return ageOfForeigner + 2;
}

const krAge = calculateKrAge(age);
// 변수 krAge의 값을 함수 calculateKrAge의 return 값으로 대체한다.

console.log(krAge);

// 한 번 return을 하면 거기서 function의 기능은 마무리된다.

const callculator = {
  plus: function (c, d) {
    return c + d;
  },
  minus: function (c, d) {
    return c - d;
  },
  devide: function (c, d) {
    return c / d;
  },
  times: function (c, d) {
    return c * d;
  },
  powerof: function (c, d) {
    return c ** d;
  },
};

const plusResult = callculator.plus(9, 3);
const minusResult = callculator.minus(plusResult, 10);
const devideResult = callculator.devide(10, minusResult);
const timesResult = callculator.times(devideResult, 10);
const powerofResult = callculator.powerof(2, 4);

console.log(plusResult);
console.log(minusResult);
console.log(devideResult);
console.log(timesResult);
console.log(powerofResult);

//* #2.13 Conditions
console.log("#-----2.13 Conditions-----");

//! [prompt] no more uses today. because this is ugly, and some of browser blocks pop-up window.
//todo const ifAge = prompt("How old are you?");
const ifAge = parseInt(prompt("How old are you?"));

//todo console.log(ifAge, parseInt(ifAge));
// console.log(ifAge);
//? whatever you typing, result of upon log's type will be string. why? don't know. but we can change the type of value.
//* So Now we can check which one is bigger than other one. and if someone type NaN, we know about it.

// console.log(isNaN(ifAge));

//* Want to more than 1 conditions to make
if (isNaN(ifAge) || ifAge < 0) {
  console.log("Please write a real positive number");
} else if (ifAge < 18) {
  console.log("You are too young.");
} else if (ifAge >= 18 && ifAge <= 50) {
  //* [&&] is AND operator; means need to both side ture, otherwise false.
  //* [||] is OR operator; it needs only one side be true.
  console.log("You can drink!");
} else {
  console.log("You should worry to drink");
}
