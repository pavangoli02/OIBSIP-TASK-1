function appendValue(value) {
  document.getElementById("result").value += value;
}

function clearResult() {
  document.getElementById("result").value = "";
}

function calculate() {
  let result = document.getElementById("result").value;
  try {
    let evaluatedResult = eval(result);
    if (isNaN(evaluatedResult) || !isFinite(evaluatedResult)) {
      document.getElementById("result").value = "Error";
    } else {
      document.getElementById("result").value = evaluatedResult;
    }
  } catch (error) {
    document.getElementById("result").value = "Error";
  }
}
