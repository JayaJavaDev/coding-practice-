// 1) Even or Odd

const check = (num) => {
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
};

console.log(check(4));
console.log(check(7));
console.log(check(0));


// 2) Evaluator Pass or Fail

function evaluateResult(marks) {
    if (marks < 0 || marks > 100) {
        console.log("Invalid marks");
        return null;
    } else if (marks >= 50) {
        return "Pass";
    } else {
        return "Fail";
    }
}

console.log(evaluateResult(75));
console.log(evaluateResult(40));
console.log(evaluateResult(120));


// 3) Maximum Finder — Largest of Three Numbers

const findMax = (a, b, c) => {
    if (a >= b && a >= c) {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    } else {
        return c;
    }
};

console.log(findMax(10, 25, 15));
console.log(findMax(5, 3, 8));
console.log(findMax(9, 9, 2));


// 4) Sum from 1 to N

function sumToN(n) {
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        sum = sum + i;
    }

    return sum;
}

console.log(sumToN(5));
console.log(sumToN(10));


// 5) Multiplication Table

function printTable(num) {
    for (let i = 1; i <= 10; i++) {
        console.log(num + " x " + i + " = " + (num * i));
    }
}

printTable(3);


// 6) Digit Counter — Number Length Finder

function countDigits(num) {
    let count = 0;

    while (num > 0) {
        num = Math.floor(num / 10);
        count++;
    }

    return count;
}

console.log(countDigits(1234));
console.log(countDigits(9));
console.log(countDigits(10000));


// 7) Number Reverser

function reverseNumber(num) {
    let rev = 0;

    while (num > 0) {
        let digit = num % 10;
        rev = rev * 10 + digit;
        num = Math.floor(num / 10);
    }

    return rev;
}

console.log(reverseNumber(1234));
console.log(reverseNumber(500));
console.log(reverseNumber(91));


// 8) Factorial

function factorial(n) {
    let result = 1;

    for (let i = n; i >= 1; i--) {
        result = result * i;
    }

    return result;
}

console.log(factorial(5));
console.log(factorial(3));
console.log(factorial(1));


// 9) Prime Validator

function isPrime(num) {
    if (num < 2) {
        return false;
    }

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

console.log(isPrime(7));
console.log(isPrime(10));
console.log(isPrime(2));


// 10) Star Pattern

function printPattern(n) {
    for (let i = 1; i <= n; i++) {
        let row = "";

        for (let j = 1; j <= i; j++) {
            row = row + "*";
        }

        console.log(row);
    }
}

printPattern(4);