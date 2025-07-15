/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in you program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:


planned steps to add
-you come to a fork on the mountain path, do you go left or right?
 if left, and has sword, you get attacked by a wolf and barely fight it off.  IF you don't have a sword, you die.
 if right, no issues

 -you make it to the village, what do you do next?
   -find a place to stay (pay 5 gold for a room)
   -go to the local watering hole (pay 2 gold for a pint)
*/

const readline = require('readline-sync');

const hasTorch = true;
const hasMap = false;
let goldStock = 10;
const hasWeapon = true;

console.log("You see two paths: one leads to the mountains, the other to the village.");
const choice = readline.question("Do you go to the 'mountains' or the 'village'?");

if (choice === "mountains" && hasTorch) {
  console.log("You safely navigate through the dark mountains.");
  const mountainPath = readline.question("You make your way to a fork in the dimly lit path, and you can see a path to the 'left' or the 'right'.  Which way do you go?");
  if(mountainPath === "left" && hasWeapon) {
    console.log("A wolf springs out of the dark woods and attacks you, but you are able to fight it off with your weapon.");
  } else if (mountainPath === "right" && hasWeapon) {
    console.log("You continue down the path into the safety of a cave to bed down for the night.")
  } else if (mountainPath === "left" && !hasWeapon) {
    console.log(`A wolf springs out of the dark woods and attacks you. Without a weapon to defend yourself you are unable to survive.
      Game Over`);
  } else {console.log("You get lost and wander aimlessly.");
  }
} else if (choice === "mountains" && !hasTorch) {
  console.log(`It's too dark to proceed. You decide to turn back.
    You find your way back to the outskirts of the village`);
    const villageChoice = readline.question("You make your way back to the safety of the village. You see people gathering at a local watering hole on one side, and a quiet inn on the other.  Do you go to the 'inn' or the 'bar'?");
    if(villageChoice === "bar" && goldStock >= 2) {
      console.log(`You make your way in to the bustling inn and order a pint while you talk to the locals.  After purchasing your ale you have ${goldStock - 2} gold remaining.`);
      goldStock = goldStock - 2;
    } else if (villageChoice ===  "inn" && goldStock >= 5) {
      console.log(`You make your way into the inn and rent a room for the evening to get some sleep.  After renting your room you have ${goldStock - 5} gold remaining.`);
      goldStock = goldStock - 5;
    } else if (villageChoice === "inn" && goldStock < 5 || villageChoice === "bar" && goldStock < 2) {
      console.log("You don't have enough gold for that action, a helpful stranger pays for you.");
    } else {console.log(`Input not recognized.
      You wander the village until the sun rises, feeling restless.`);}
} else if (choice === "village" || hasMap) {
  console.log("You find your way to the village.");
  const villageChoice = readline.question("You make your way back to the safety of the village. You see people gathering at a local watering hole on one side, and a quiet inn on the other.  Do you go to the 'inn' or the 'bar'?");
    if(villageChoice === "bar" && goldStock >= 2) {
      console.log(`You make your way in to the bustling bar and order a pint while you talk to the locals.  After purchasing your ale you have ${goldStock - 2} gold remaining.`);
      goldStock = goldStock - 2;
    } else if (villageChoice ===  "inn" && goldStock >= 5) {
      console.log(`You make your way into the inn and rent a room for the evening to get some sleep.  After renting your room you have ${goldStock} gold remaining.`);
      goldStock = goldStock - 5;
    } else if (villageChoice === "Iinn" && goldStock < 5 || villageChoice === "bar" && goldStock < 2) {
      console.log("You don't have enough gold for that action, a helpful stranger pays for you.");
    } else {console.log(`Input not recognized.
      You wander the village until the sun rises, feeling restless.`);}
} else {
  console.log("You get lost and wander aimlessly.");
}

/* 

Add Customization and expand the game:
  - Add more choices and scenarios.
  - Include additional items (e.g., a sword, a compass).
  - Use nested conditionals and logical operators to create complex outcomes.

*/