// Task-1
function square(n) {
  return 4 * n;
}
console.log(square(7));

// Task-2
function s(n) {
  return n * n;
}
console.log(s(8));

// Task-3
function average(num1, num2) {
  let sum = (num1 + num2) / 2;
  return sum;
}
console.log(average(10, 30));

// Task-4
function evenORodd(num) {
  return num % 2 == 0 ? 3 : 4;
}
console.log(evenORodd(12));

// Task-5
function functions(x) {
  let y = 17 * x * x - 6 * x + 13;
  return y;
}
console.log(functions(10));

// Task-6
function time(h, m, s) {
  let hour = h * 3600;
  let minute = m * 60;
  if (hour >= minute && hour >= s) return h;
  else if (minute >= hour && hour >= s) return m;
  else return s;
}
console.log(time(1, 59, 3598));

// Task-7
function same(num) {
  let n1 = Math.floor((num / 100) % 10);
  let n2 = Math.floor((num / 10) % 10);
  let n3 = Math.floor(num % 10);
  if (n1 == n2 || n1 == n3) return "true";
  else if (n2 == n1 || n2 == n3) return "true";
  else if (n3 == n1 || n3 == n2) return "true";
  else return "false";
}
console.log(same(212));

// Task-8
function largest(num1, num2) {
  return num1 >= num2 ? "true" : "false";
}
console.log(largest(73, 43));

// Task-9
function sum(num) {
  let cnt = 0;
  for (let i = 1; i <= num; i++) {
    cnt += i;
  }
  return cnt;
}
console.log(sum(13));

// Task-10
function different(num1, num2, num3) {
  if (num1 != num2 && num1 != num3) return 1;
  else if (num2 != num1 && num2 != num3) return 2;
  else return 3;
}
console.log(different(5, 10, 10));

// Task-11
function sumofeven(num1, num2) {
  if (num1 <= num2) {
    let cnt = 0;
    for (let i = num1; i <= num2; i++) {
      if (i % 2 == 0) cnt += i;
    }
    return cnt;
  } else if (num1 >= num2) {
    let cnt = 0;
    for (let i = num1; i >= num2; i--) {
      if (i % 2 == 0) cnt += i;
    }
    return cnt;
  }
}
console.log(sumofeven(-1, -1));

// Task-12
function formul(num, deg) {
  let cnt = 0;
  for (let i = 1; i <= num; i++) {
    cnt += i ** deg;
  }
  return cnt;
}
console.log(formul(5, 3));

// Task-13
function biger(num) {
  let mx = num % 10;
  let last;
  for (let i = num; i > 0; i /= 10) {
    last = i % 10;
    if (mx < last) mx = last;
  }
  return Math.floor(mx);
}
console.log(biger(811));

// Task-14
// function symmetrical(num)
// {
//     for(let i = )
// }

// Task-15
function digits(num) {
  let last = 0;
  let cnt = 0;
  for (let i = num; i > 0; i /= 10) 
  {
    last += Math.floor(i % 10);
  }
  for (let j = last; j > 0; j /= 10) 
  {
    cnt += Math.floor(j % 10);
  }
  return cnt;
}
console.log(digits(46));
