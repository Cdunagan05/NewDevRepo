function askUser() {
  alert ("How much money do you have to bet?  Please enter an amount where it says 'Starting Bet'");
}

function playLuckySevens() {
  var stringNumber = document.forms["gameForm"]["bet"].value;
  var num = parseInt(stringNumber, 10);
  var i = 0;
  var highest = [num];
  var count = 0
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
        highest.push(newNum);
        i++;
      } else {
        newNum = (newNum - 1);
        highest.push(newNum);
        i++
      }
    }
  }

  var highestNumber = Math.max.apply(Math, highest);

  for (var j=0; j<=highest.length; j++) {
    if (highest[j] == highestNumber) {
      break;
    } else {
      count++;
    }
  }

  document.getElementById("results").style.display = "block";
  document.getElementById("startingBet").innerText = "$" + num;
  document.getElementById("totalRolls").innerText = i;
  document.getElementById("highestAmount").innerText = "$" + highestNumber;
  document.getElementById("rollCountAtHighest").innerText = count;
  return false;
};

function rollDice() {
  dice1 = Math.floor(Math.random() * 6) + 1
  dice2 = Math.floor(Math.random() * 6) + 1

  return dice1 + dice2;
}
