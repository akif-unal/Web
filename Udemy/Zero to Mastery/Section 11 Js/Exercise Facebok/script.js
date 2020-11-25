const database = [{
    username: "andrei",
    password: "supersecret"
  },
  {
    username: "sally",
    password: "123"
  },
  {
    username: "ingrid",
    password: "777"
  }
];

const newsFeed = [{
    username: "Bobby",
    timeline: "So tired from all that learning!"
  },
  {
    username: "Sally",
    timeline: "Javascript is sooo coool!"
  },
  {
    username: "Mitch",
    timeline: "Javascript is preeetyy coool!"
  }
];

function isUserValid(username, password) {
  for (let i = 0; i < database.length; i++) {
    if (database[i].username === username &&
      database[i].password === password) {
      return true;
    }
  }
  return false;
}

function signIn(username, password) {
  if (isUserValid(username, password)) {
    console.log(newsFeed);
  } else {
    alert("Sorry, wrong username and password!");
  }
}

const usernamePrompt = prompt("What\'s your username?");
const passwordPrompt = prompt("What\'s your password?");

signIn(usernamePrompt, passwordPrompt);