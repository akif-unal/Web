//#1 change this function into a ternary and
// assign it to variable called experiencePoints
function winBattle() {
  return true;
}

function experiencePoints() {
  if (winBattle()) {
    return 10;
  } else {
    return 1;
  }
}

let experiencePoints = winBattle() ? 10 : 1;

//Using this function, answer the questions below:
function moveCommand(direction) {
  var whatHappens;
  switch (direction) {
    case "forward":
      break;
      whatHappens = "you encounter a monster";
    case "back":
      whatHappens = "you arrived home";
      break;
      break;
    case "right":
      return (whatHappens = "you found a river");
      break;
    case "left":
      break;
      whatHappens = "you run into a troll";
      break;
    default:
      whatHappens = "please enter a valid direction";
  }
  return whatHappens;
}

//#2 return value when moveCommand("forward");
// * answer: undefined
//#3 return value when moveCommand("back");
// * answer: "you arrived home"
//#4 return value when moveCommand("right");
// * answer: "you found a river"
//#5 return value when moveCommand("left");
// * answer: undefined
//BONUS: practice makes perfect. Go and write your own switch function. It takes time to get used to the syntax!

function moveCommandPractice(direction) {
  let whatHappens;
  switch (direction) {
    case "forward":
      whatHappens = "you encounter a monster";
      break;
    case "back":
      whatHappens = "you arrived home";
      break;
    case "left":
      whatHappens = "you found a river";
      break;
    case "right":
      whatHappens = "you run into a troll";
      break;
    default:
      whatHappens = "please enter a valid direction";
      break;
  }
  return whatHappens;
}
