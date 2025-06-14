let display = document.getElementById('display');

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculateResult() {
  try {
    let expression = display.value.replace(/\^/g, '**');
    display.value = eval(expression);
  } catch (error) {
    alert('Invalid Expression');
  }
}
