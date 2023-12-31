
function displayOutputBox() {
  var x = document.getElementById("output-div");
  x.style.display = "block";
//   if (x.style.display === "none") {
//   } else {
//     x.style.display = "none";
//   }
}

function getTextFromInputBox() {
  var x = document.getElementById("input-box");
  let input_value = x.value;

  return input_value;
}

function insertInOutputBox(input_text) {
  var x = document.getElementById("output-box");
  x.value = input_text;
}

function summarizeButtonClicked() {
  input_value = getTextFromInputBox();
  insertInOutputBox(input_value);
  displayOutputBox();
}
