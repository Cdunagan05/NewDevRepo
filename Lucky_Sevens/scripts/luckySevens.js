function askUser() {
  alert ("How much money do you have to bet?  Please enter an amount where it says 'Starting Bet'");
}

function playLuckySevens() {
  var num = document.forms["gameForm"]["bet"].value;
  var i = 0
  if (num == "" || num <= 0) {
    alert ("You must enter a valid number to play.");
    document.forms["gameForm"]["bet"].focus();
    return false;
  } else {
    newNum = num;
    while (newNum > 0) {
      dice = rollDice();
      if (dice == 7) {
        newNum = (newNum + 4);
        i++;
      } else {
        newNum = (newNum - 1);
        i++
      }
    }
  }
  // if (num == 0) {
  //   return false;
  // }

  document.getElementById("results").style.display = "block";
  document.getElementById("startingBet").innerText = "$" + num;
  document.getElementById("totalRolls").innerText = i;
  return false;
};

function rollDice() {
  dice1 = Math.floor(Math.random() * 6) + 1
  dice2 = Math.floor(Math.random() * 6) + 1

  return dice1 + dice2;
}

// function aTurn(newNum) {
//   number = rollDice();
//   debugger;
//   if (number == 7) {
//     newNum = (newNum + 4)
//   } else {
//     newNum = (newNum - 1)
//   }
//   return newNum;
// }
//
// function theGame(num) {
//   newNum = num;
//   do {
//     aTurn(newNum);
//     i++
//   }
//   while (newNum > 0);
// }
