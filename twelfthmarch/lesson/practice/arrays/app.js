const developerObj = {
    name: "Nduonofit DavidFortune",
    isDeveloper: true
};

const {name, isDeveloper} = developerObj; // object destructuring

console.log(name);
console.log(isDeveloper);

// When working with drop down lists, if we want to create add an event listener to it, we often use the "change" event type

// playersDropdownList.addEventListener("change", (e) => {
 // This is an example, the empty parenthesis and the directional arrow is called a callback function.
 // the "e" argument is an object that contains information about the selection made in the dropdown
 // we can get the value of the dropdown using the command e.target.value, and then we can operate on it using switch statements if needed.
// });

// in javascript, => is known as implicit return.

// switch (e.target.value) {
//     case "nickname":
//       setPlayerCards(players.filter((player) => player.nickname !== null));

//   }
