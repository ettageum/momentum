console.log("Hello" + " stranger");
const a = 10;
const b = "2";
let myName = "Allen";
const thisIsHowNamingVariablesInJs = "camelCase";

console.log(a + b);
console.log(a * b);
console.log(a / b);
// +는 텍스트 간에 결합에서도 쓰이지만 *이나 /는 그대로의 의미로만 사용하니 이런 차이가 발생하나 봐.
console.log("hello " + myName);

myName = "Azur";
console.log("Your nnew name is " + myName);

const amIFat = null;
let something;
console.log(amIFat);
console.log(something);

//Array

const mon = "mon";
const tue = "tue";
const wed = "wed";
const thu = "thr";
const fri = "fri";
const sat = "sat";
const sun = "sun";

const daysOfWeek = [mon, tue, wed, thu, fri, sat];
const nonsense = [1, 2, "hello", false, null, true, undefined, "Allen"];

console.log(daysOfWeek, nonsense);

// Get Item from Array
console.log(daysOfWeek[5]);
console.log(daysOfWeek[10]);
console.log(nonsense[4]);

// Add noe more item to the array
daysOfWeek.push(sun);
console.log(daysOfWeek);

const toBuy = ["tomato", "potato", "cheeze"];
toBuy.push("ponds");
console.log(toBuy);

// Objects

// player 에 대한 데이터를 만들기 위해 중복된 것들이 많이 나온다.
const playerNmae = "Allen";
const playerPoints = 256;
const playerHandsome = true;
const playerFat = "little";

// Array does'nt say what is item means.
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

// There is no problem to update inside of const;object item.
player.name = "ettageum";
player.points = 512;
console.log(player);

player.lastName = "Ye";
player.points = player.points + 10;
console.log(player);
