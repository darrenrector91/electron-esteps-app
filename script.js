$(document).ready(function () {
  document.getElementById("current-esteps-input").focus();
});

function calculateEsteps() {
  let currentEsteps = document.getElementById("current-esteps-input").value;
  let measuredAmt = document.getElementById("measured-amount-input").value;
  let actualAmt = document.getElementById("actual-amount-input").value;

  let newEsteps = (currentEsteps * measuredAmt) / actualAmt;

  if (newEsteps > 0) {
    var roundedAmt = newEsteps.toFixed(1);
    document.getElementById("new-esteps-amount-input").value = roundedAmt;
  }
}
