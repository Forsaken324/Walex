const textContent = document.getElementById("content")
console.log(textContent.textContent);

//  playButton.setAttribute("aria-label", song?.title ? `Play ${song.title}` : "Play") // setting attribute

// the createElement() is a DOM method used to dynamically create an element using javascript

// e.g
const resetButton = document.createElement('button');

// the create text node is used to create a node.

const myText = document.createTextNode("This is a text");

 // resetButton.innerText = myText; // this is not going to work, lets do it the proper way now

resetButton.appendChild(myText);
resetButton.id = 'myid';
resetButton.style.display = 'block';

console.log(resetButton.innerText); // now if we check the console, we see that it works

// the ... operator is also known as spread operator, it is similar to the unpacking operator in python

// ended this event listener is fired when the playback of a media reaches its end.

// Object.freeze -> This method prevents you from being able to modify an object, i.e adding or removing properties

// Object destructuring allows you to unpack values from arrays and objects.

const developerObj = {
    name: "Nduonofit DavidFortune",
    isDeveloper: true
};

const {name, isDeveloper} = developerObj;

console.log(name);
console.log(isDeveloper);