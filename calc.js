let string = "";
let outputStr = "";

const keys = document.querySelectorAll('.keys');

let output = document.querySelector(".screen").children[0];

Array.from(keys).forEach((key) => {
  key.addEventListener("click", (e) => {
    if (e.target.value == "AC") {
      string = "";
      outputStr = "";
    } else if (e.target.value == "x") {
      string = string + "*";
      outputStr = outputStr + "x";
    } else if (e.target.value == "=") {
      try {
        string = eval(string);
      } catch (e) {
        string = "invalid input";
      }
      outputStr = string;
    } else {
      string = string + e.target.value;
      outputStr = outputStr + e.target.value;
    }
    // making output string
    output.innerHTML = outputStr;
  });
});