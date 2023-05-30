const players = ["John", "Bob", "Alice", "Poppy"];

const person = {
  name: "John Doe",
  age: 80,
};

// Write your code here, make sure the name of variables is exactly same as mentioned in the problem statement
let players = ["Player1", "Player2", "Player3"];
let person = { name: "John", age: 25 };

// Creating a reference to the players array
let team = players;

// Creating a copy of the players array
let team1 = [...players];

// Creating a copy of the person object
let cap1 = { ...person };

window.players = players;
window.person = person;
window.team = team;
window.team1 = team1;
window.cap1 = cap1;
