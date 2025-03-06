// introductions to functions in javascript

// name("john", "peters");

function name(firstname, secondname) {
  console.log(firstname, secondname);
}

// you can return a value using the return keyword

// The operator () calls the function

date = new Date(); // this is used to create a new date object from the date class

userDateOfBirth = new Date('2007-03-29') // it is in the format of year, month and day
// using this is better because it allows us to calculate the exact age of the user

// console.log(userDateOfBirth);


function calculateAge(yearofbirth) {
    var age = date.getFullYear() - yearofbirth.getFullYear();
    var month = date.getMonth() - yearofbirth.getMonth();

    // using this logic calculates the actual age, not just based on the year of birth
    if (month < 0 || (month === 0 && date.getDate() < yearofbirth.getDate())) {
        // the above checks if it is the current month, if it is the current month, it checks the dates to see if the current date is less than the date of the date of birth
        // 
        age--;
    }
    return age;
}

// the list of operations that can be performed are:

// getFullYear, getMonth, getDate, getDay, getHours, getMinutes, getSeconds, getMilliseconds, getTime

// you can also add the date you want to use into the date declaration

function registerUser(name, age) {
    if (calculateAge(age) < 18) {
        console.log('The user must be up to 18 to make use of this platform')
        return
    }
    console.log('The user has been registered successfully')
}

registerUser('Peterson', userDateOfBirth)