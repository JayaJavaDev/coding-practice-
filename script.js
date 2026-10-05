// 1) Even or Odd

function checkEvenOdd(num) {
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

console.log(checkEvenOdd(4));
console.log(checkEvenOdd(7));


// 2) Pass or Fail

function checkResult(marks) {
    if (marks >= 50) {
        return "Pass";
    } else {
        return "Fail";
    }
}

console.log(checkResult(75));
console.log(checkResult(40));


// 3) Find Maximum

function findMax(a, b, c) {
    if (a >= b && a >= c) {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    } else {
        return c;
    }
}

console.log(findMax(10, 25, 15));


// 4) Sum from 1 to N

function sumToN(n) {
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        sum = sum + i;
    }

    return sum;
}

console.log(sumToN(5));


// 5) Multiplication Table

function printTable(num) {
    for (let i = 1; i <= 10; i++) {
        console.log(num + " x " + i + " = " + (num * i));
    }
}

printTable(3);


// 6) Count Digits

function countDigits(num) {
    let count = 0;

    while (num > 0) {
        num = Math.floor(num / 10);
        count++;
    }

    return count;
}

console.log(countDigits(1234));


// 7) Reverse Number

function reverseNumber(num) {
    let reverse = 0;

    while (num > 0) {
        let digit = num % 10;
        reverse = reverse * 10 + digit;
        num = Math.floor(num / 10);
    }

    return reverse;
}

console.log(reverseNumber(1234));


// 8) Factorial

function factorial(n) {
    let result = 1;

    for (let i = n; i >= 1; i--) {
        result = result * i;
    }

    return result;
}

console.log(factorial(5));


// 9) Prime Number

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