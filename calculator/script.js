const num1 = document.querySelector('#num1');
const num2 = document.querySelector('#num2');

const addBtn = document.querySelector('#add');
const subBtn = document.querySelector('#subtract');
const mulBtn = document.querySelector('#multiply');
const divBtn = document.querySelector('#divide');

const result = document.querySelector('#result');

addBtn.addEventListener('click', function() {
  let x = Number(num1.value);
  let y = Number(num2.value);

  if (num1.value === ' ' || num2.value === ' ') {
    result.innerText = "Please enter both numbers!";
  } else {
    result.innerText = "Result: " + (x + y);
  }
});

subBtn.addEventListener('click', function() {
  let x = Number(num1.value);
  let y = Number(num2.value);

  if (num1.value === ' ' || num2.value === ' ') {
    result.innerText = "Please enter both numbers!";
  } else {
    result.innerText = "Result: " + (x - y);
  }
});

mulBtn.addEventListener('click', function() {
  let x = Number(num1.value);
  let y = Number(num2.value);

  if (num1.value === ' ' || num2.value === ' ') {
    result.innerText = "Please enter both numbers!";
  } else {
    result.innerText = "Result: " + (x * y);
  }
});

divBtn.addEventListener('click', function() {
  let x = Number(num1.value);
  let y = Number(num2.value);

  if (num1.value === ' ' || num2.value === ' ') {
    result.innerText = "Please enter both numbers!";
  } else if (y === 0) {
    result.innerText = "Cannot divide by zero!";
  } else {
    result.innerText = "Result: " + (x / y);
  }
});
