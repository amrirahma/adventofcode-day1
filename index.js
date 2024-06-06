const fs = require("fs");
const path = require("path");
import "./styles.css";

const filePath = path.join(__dirname, "file.txt");

function extractAndConcatenateNumbers(strings) {
  let result = [];

  for (const str of strings) {
    const digits = str.match(/\d/g);
    if (digits) {
      const firstDigit = digits[0];
      const lastDigit = digits[digits.length - 1];
      if (firstDigit && lastDigit) {
        result.push(parseInt(firstDigit + lastDigit));
      } else if (firstDigit) {
        result.push(parseInt(firstDigit + firstDigit));
      }
    }
  }

  return result;
}
const sumAll = (arr) => arr.reduce((a, b) => a + b, 0);

function test() {
  const data = fs.readFileSync(filePath, "utf8");
  const strings = data
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.length > 0);
  console.log("strings", strings);
  const result = extractAndConcatenateNumbers(strings);
  console.log("res", sumAll(result));
}
test();
