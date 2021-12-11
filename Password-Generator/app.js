// DOM element

const resultEL = document.querySelector(".result");
const lengthEL = document.querySelector("#length");
const uppercaseEL = document.querySelector("#uppercase");
const lowercaseEL = document.querySelector("#lowercase");
const numberEL = document.querySelector("#numbers");
const symbolEL = document.querySelector("#symbols");
const generateEL = document.querySelector("#generate");
const clipboardEL = document.querySelector("#clip-board");

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};
// copy  password to clipboard
clipboardEL.addEventListener("click", () => {
  const textarea = document.createElement("textarea");
  const password = resultEL.innerText;
  if (!password) {
    return;
  }
  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
  alert("password copied to clipboard!");
});
// Generate Event
generateEL.addEventListener("click", () => {
  const lenght = parseInt(lengthEL.value);
  const hasLower = lowercaseEL.checked;
  const hasUpper = uppercaseEL.checked;
  const hasNumber = numberEL.checked;
  const hasSymbol = symbolEL.checked;

  resultEL.innerText = generatePassword(
    hasLower,
    hasUpper,
    hasSymbol,
    hasNumber,
    lenght
  );
});

// Generate Password

function generatePassword(lower, upper, symbol, number, length) {
  // 1.Init pw var
  // 2.Filter out unchecked types
  // 3.Loop over length call generator function for each type
  // 4.Add final pw to the pw var and return

  let generatePassword = "";

  const typeCount = lower + upper + symbol + number;
  const typeArr = [{ lower }, { upper }, { symbol }, { number }].filter(
    (item) => Object.values(item)[0]
  );

  if (typeCount === 0) {
    return "";
  }
  for (let i = 0; i < length; i += typeCount) {
    typeArr.forEach((type) => {
      const funcName = Object.keys(type)[0];
      generatePassword += randomFunc[funcName]();
    });
  }

  const finalPassword = generatePassword.slice(0, length);

  return finalPassword;
}

// Generator function

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 49);
}
function getRandomSymbol() {
  const symbol = "!@#$%^&*(){}[]=<>,.";
  return symbol[Math.floor(Math.random() * symbol.length)];
}
