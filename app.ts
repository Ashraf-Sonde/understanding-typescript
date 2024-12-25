function add(num1: number, num2: number, showResult: boolean, phrase: string) {
  const result = num1 + num2;
  if (showResult) {
    console.log(phrase + result);
  } else {
    return result;
  }
}

const a = 5;
const b = 10;
const printResult = true;
const resultPhrase = "Result is: ";

add(a, b, printResult, resultPhrase);
