let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');
let botDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg';
let beachDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg';
let spaceDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg';
let closedDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg';
let numClosedDoors = 3;
let openDoor1, openDoor2, openDoor3;
let startButton = document.getElementById('start');
let currentlyPlaying = true;

let isBot = (door) => {
  if(door.src === botDoorPath) {
     return true;
     }else {
    return false;
  }
};

let isClicked = (door) => {
  if(door.src === closedDoorPath) {
     return false;
  }else {
    return true;
  }
}

let playDoor = (door) => {
  numClosedDoors --;
  
  if(numClosedDoors === 0) {
     return gameOver('win');
     }else if(isBot(door) === true) {
       return gameOver();
      }
  else{
              
   }
};

let randomChoreDoorGenerator = () => {
  	let choreDoor = Math.floor(Math.random() * numClosedDoors);
   if(choreDoor === 0) {
      openDoor1 = botDoorPath;
      openDoor2 = beachDoorPath;
      openDoor3 = spaceDoorPath;
   }
  	else if (choreDoor === 1) {
      openDoor1 = spaceDoorPath;
      openDoor2 = botDoorPath;
      openDoor3 = beachDoorPath;
    } else {
      openDoor1 = beachDoorPath;
      openDoor2 = spaceDoorPath;
      openDoor3 = botDoorPath;
    }
};


doorImage1.onclick = () => {
  if(!isClicked(door1) && currentlyPlaying) {
    doorImage1.src = openDoor1;
  	playDoor(door1);
  }
};

doorImage2.onclick = () => {
  if(!isClicked(door2) && currentlyPlaying) {
    doorImage2.src = openDoor2;
  	playDoor(door2);
  }
}

doorImage3.onclick = () => {
  if(!isClicked(door3) && currentlyPlaying) {
    doorImage3.src = openDoor3;
  	playDoor(door3);
  }
}

startButton.onclick = () => {
  if(currentlyPlaying === false) {
      return startRound();
     }
 
};

const startRound = () => {
  doorImage1.src = closedDoorPath;
  doorImage2.src = closedDoorPath;
  doorImage3.src = closedDoorPath;
  numClosedDoors = 3;
  startButton.innerHTML = 'Good Luck!';
  currentlyPlaying = true;
  randomChoreDoorGenerator();
}

const gameOver = (status) => {
  if(status === 'win') {
    startButton.innerHTML = 'You win! Play again?';
  }
  else {
    startButton.innerHTML = 'Game over! Play again?';
  }
  currentlyPlaying = false;
}

startRound();


