  let display = document.getElementById("calcDisplay");

  function append(value) {
    display.value += value;
  }

  function clearDisplay() {
    display.value = "";
  }





  function calculate() {
    try {
      display.value = eval(display.value);
    } catch {
      display.value = "Error";
    }
  }

  function backspace() {
  display.value = display.value.slice(0, -1);
    }

    function sqrt() {
    try {
        display.value = Math.sqrt(eval(display.value)).toFixed(5);
    } catch {
        display.value = "Error";
    }
    }


let ms = 0;
let sec = 0;
let min = 0;
let hr = 0;

let interval = null;

function updateTimer() {
  ms += 10;

  if (ms === 1000) {
    ms = 0;
    sec++;
  }

  if (sec === 60) {
    sec = 0;
    min++;
  }

  if (min === 60) {
    min = 0;
    hr++;
  }

  document.getElementById("timer").innerText =
    String(hr).padStart(2, '0') + ":" +
    String(min).padStart(2, '0') + ":" +
    String(sec).padStart(2, '0') + ":" +
    String(ms / 10).padStart(2, '0');
}

function startTimer() {
  if (interval) return;
  interval = setInterval(updateTimer, 10);
}

function pauseTimer() {
  clearInterval(interval);
  interval = null;
}

function resetTimer() {
  clearInterval(interval);
  interval = null;

  ms = 0;
  sec = 0;
  min = 0;
  hr = 0;

  document.getElementById("timer").innerText = "00:00:00:00";
}