// openTaskFormBtn.addEventListener("click", () => {
//     taskForm.classList.toggle('hidden');
//   }) This toggles the class of an html element and changes it to something else.

// taskForm.addEventListener("submit", (e) => {
//     e.preventDefault();
    // this prevents the browser from loading when the form is submitted.
// })

const numbers = [3, 1, 5, 6];
const firstNumberLargerThanFive = numbers.findIndex((num) => num > 5) // this makes use of implicit return
console.log(firstNumberLargerThanFive);

// the unshift method is used to add one or more elements to the beginning of an array
// inline foreach statement taskData.forEach(({id, title, date, description}) => {})

// the "this" keyword refers to the current context. 

// splice() is an array method that modifies arrays by removing, replacing or adding elements at a specified index, while also returing the removed elements.

// what local storage does is that it stores the data in a javascript object, in order for us to keep that objects in that state, we have to prevent default of the browser reloading the tab after some operations

// const formInputValuesUpdated = titleInput.value !== currentTask.title || dateInput.value !== currentTask.date || descriptionInput.value !== currentTask.description; 

// the above does conditionals without using if statements, it does does it in one line.

// the localStorage object offes methods for saving retrieving, and deleting items. The items you save can be of any javascript data type. This is useful because even if the browser is exited or refreshed, the localstorage object still holds the values.

// e.g

const myTaskArr = [
    { task: "Walk the Dog", date: "22-04-2022" },
    { task: "Read some books", date: "02-11-2023" },
    { task: "Watch football", date: "10-08-2021" },
  ];
  
  localStorage.setItem("data", JSON.stringify(myTaskArr));
  
  localStorage.clear();
  
  const getTaskArr = localStorage.getItem("data")
  console.log(getTaskArr)
  
  const getTaskArrObj = JSON.parse(localStorage.getItem("data"));
  console.log(getTaskArrObj);

localStorage.setItem("user", peter);

// to view items in the local storage, open your browser and go to the applications tab and select local storage

// everything you store should be in string format so always call JSON.stringify on your objects
localStorage.setItem("data", JSON.stringify(myTaskArr));

// in order to view the original form of a stringified object, use the JSON.parse method.