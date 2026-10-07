//1Create an array and print all values using four different loops:

const numbers = [10, 20, 30, 40];
//for loop
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);  
}

//for each loop

numbers.forEach(num=>{
    console.log(num);
})

// for of loop

for (let num of numbers) {
    console.log(num);
}

// for in loop

for (let j in numbers) {
    console.log(j);
}
for(let j in numbers){
    console.log(numbers[j]);
}

//2)Loop Through an Object

const student = {
  name: "Bala",
  age: 21,
  grade: "A"
};

//for in loop

for (let key in student) {
    console.log(key, student[key]);
}

//Create a new array where each number is reduced by 10.3)Using map()

const marks = [50, 60, 70, 80];
const newMarks = marks.map(num => num - 10);
console.log(newMarks);


//4 — Using filter()

const values = [5, 12, 8, 25, 3, 15];
const result = values.filter(num => num > 10);
console.log(result);


//5)Using reduce()

const nums = [5, 10, 15, 20];
const total = nums.reduce((sum, num) => sum + num, 0);
console.log(total);