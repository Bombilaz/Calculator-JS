let result = document.querySelector('body > div.all > div > div > div.input > div');
let isClikedOperator = true;
let arr = [0];
let firstNumber;
let secondNumber;
let whichOperand;
let memory = null;
let total;


// Selectors of number buttons
let numberZero = document.querySelector('body > div.all > div > div > div.buttons > button:nth-child(14)');
let numberOne = document.querySelector('body > div.all > div > div > div.buttons > button:nth-child(9)');
let numberTwo = document.querySelector('body > div.all > div > div > div.buttons > button:nth-child(10)');
let numberThree = document.querySelector('body > div.all > div > div > div.buttons > button:nth-child(11)');
let numberFour = document.querySelector('body > div.all > div > div > div.buttons > button:nth-child(5)');
let numberFive = document.querySelector('body > div.all > div > div > div.buttons > button:nth-child(6)');
let numberSix = document.querySelector('body > div.all > div > div > div.buttons > button:nth-child(7)');
let numberSeven = document.querySelector('body > div.all > div > div > div.buttons > button:nth-child(1)');
let numberEight = document.querySelector('body > div.all > div > div > div.buttons > button:nth-child(2)');
let numberNine = document.querySelector('body > div.all > div > div > div.buttons > button:nth-child(3)');
// Operations
let ravno = document.querySelector('body > div.all > div > div > div.buttons > button:nth-child(15)');
let umnojenie = document.querySelector('body > div.all > div > div > div.buttons > button:nth-child(12)');
let addition = document.querySelector('body > div.all > div > div > div.buttons > button:nth-child(4)');
let division = document.querySelector('body > div.all > div > div > div.buttons > button:nth-child(16)');
let deleteNumbers = document.querySelector('body > div.all > div > div > div.buttons > button:nth-child(13)');
let substraction = document.querySelector('body > div.all > div > div > div.buttons > button:nth-child(8)');
result.innerHTML = arr;

//Функция добавления числа в окно вывода по клику
function addNumber(numb) {

  if (!isClikedOperator) {
    arr = [0];
    isClikedOperator = true;
  }
  if (arr[0] == 0) {
    arr.shift();
  }

  arr.push(numb)

  if (arr.length <= 16) {
    return result.innerHTML = arr.join('');
  }
}

// Возвращаем все данные по умолчанию
function deleteAll() {
  arr = [0];
  isClikedOperator = true;
  memory = null;
  firstNumber = undefined;
  secondNumber = undefined;
  whichOperand = undefined;
  total = undefined;
  return result.innerHTML = arr;
}

// Функция сложения чисел
function additionNumbers() {
  if (firstNumber == undefined) {
    firstNumber = arr.join('');
  }
  if (whichOperand !== undefined) {
    getResult();
  }

  if (isClikedOperator) {
    isClikedOperator = false;
  }
  else {
    isClikedOperator = true;
  }
  whichOperand = '+';

}



// Функция умножения чисел
function umnojenieNumbers() {
  if (firstNumber == undefined) {
    firstNumber = arr.join('');
  }

  if (whichOperand !== undefined) {
    getResult();
  }

  if (isClikedOperator) {
    isClikedOperator = false;
  }
  else {
    isClikedOperator = true;
  }
  whichOperand = '*';

}

// Функция вычитания
function substractNumbers() {
  if (firstNumber == undefined) {
    firstNumber = arr.join('');
  }

  if (whichOperand !== undefined) {
    getResult();
  }

  if (isClikedOperator) {
    isClikedOperator = false;
  }
  else {
    isClikedOperator = true;
  }
  whichOperand = '-';

}

// Функция разделения
function divideNumbers() {
  if (firstNumber == undefined) {
    firstNumber = arr.join('');
  }

  if (whichOperand !== undefined) {
    getResult();
  }

  if (isClikedOperator) {
    isClikedOperator = false;
  }
  else {
    isClikedOperator = true;
  }
  whichOperand = '/';

}

// Функция получения результата
function getResult() {
  secondNumber = arr.join('');
  switch (whichOperand) {
    case '+':
      total = Number(firstNumber) + Number(secondNumber);
      result.innerHTML = total;
      break;
    case '-':
      total = Number(firstNumber) - Number(secondNumber);
      result.innerHTML = total;
      break;
    case '*':
      total = Number(firstNumber) * Number(secondNumber);
      result.innerHTML = total;
      break;
    case '/':
      total = Number(firstNumber) / Number(secondNumber);
      result.innerHTML = total;
      break;
    default:
      break;

  }
  whichOperand = undefined;
  arr = [0];
  firstNumber = total;
}

numberZero.addEventListener('click', ()=> addNumber(0));
numberOne.addEventListener('click', () => addNumber(1));
numberTwo.addEventListener('click', () => addNumber(2));
numberThree.addEventListener('click', () => addNumber(3));
numberFour.addEventListener('click', () => addNumber(4));
numberFive.addEventListener('click', () => addNumber(5));
numberSix.addEventListener('click', () => addNumber(6));
numberSeven.addEventListener('click', () => addNumber(7));
numberEight.addEventListener('click', () => addNumber(8));
numberNine.addEventListener('click', () => addNumber(9));

division.addEventListener('click', divideNumbers);
ravno.addEventListener('click', getResult);
substraction.addEventListener('click', substractNumbers);
deleteNumbers.addEventListener('click', deleteAll);
addition.addEventListener('click', additionNumbers);
umnojenie.addEventListener('click', umnojenieNumbers);