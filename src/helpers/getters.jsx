import { UPPERLETTERS, LOWERLETTERS, NUMBERS, SYMBOLS } from "../constants";

export const getUppercase = () => {
  const uppercase = UPPERLETTERS[Math.floor(Math.random() * UPPERLETTERS.length)];

  return uppercase;
}

export const getLowercase = () => {
  const lowercase = LOWERLETTERS[Math.floor(Math.random() * LOWERLETTERS.length)];

  return lowercase;
}

export const getNumber = () => {
  const number = NUMBERS[Math.floor(Math.random() * NUMBERS.length)];

  return number;
}

export const getSymbol = () => {
  const symbol = SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)];

  return symbol;
}