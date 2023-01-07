let calculator = document.getElementById('calcModal');
let button = document.getElementById("calcBtn");
let div = document.getElementsByClassName("calc-close")[0];
  
button.onclick = function() {
calculator.style.display = "block";
    }
div.onclick = function() {
    calculator.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == calculator) {
        calculator.style.display = "none";
    }
}


