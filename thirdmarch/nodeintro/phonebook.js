// this is going to be an application that a user can enter contacts and it will be saved to an object in the application
const readline = require('node:readline');
const {stdin: input, stdout: output} = require('node:process')


function Contact(firstname, lastname, email, phonenumber, address) {
    this.firstname = firstname,
    this.lastname = lastname,
    this.email = email,
    this.phonenumber = phonenumber,
    this.address = address
    
}

// The idea is the prompt the user for the details, and the user enters them in a straight line, then we can then split it.

function PrintMenu () {
    console.log('\n');
    console.log('Welcome to phonebook 1.0, follow the menu to perform operations')
    console.log('1. Add a new contact');
    console.log('2. Edit existing contact');
    console.log('3. View all contacts');
    console.log('4. View a single contact');
    console.log('5. Delete an existing contact');
    console.log('6. Exit the application');
}

const phoneBook = [];

// let userInput;

// while (userInput != 5){
//     userInput = Number(prompt('Enter a number: '))
//     if(userInput == 1){
//         contactDetails = prompt('Enter the contact details in a straight line seperated by a whitespace \n')
//         console.log('You entered the contact details')
//     }
//     else if(userInput == 2){
//         contactToSearch = prompt('Enter the contact you want to search for')
//     }
//     else if(userInput !== 5){
//         console.log('This is not a valid option')
//     }
// } the prompt method is synchronous, so it keeps updating us anytime a character is entered into the console.

const r1 = readline.createInterface({input, output});

MainMenu()

function MainMenu(){
    PrintMenu();
    r1.question('Enter any of the available options to continue: ', (userInput) => {
        if (Number(userInput) == 1){
            r1.question('Enter the details of the contact you want to create seperated by a whitespace \nEnter fields in this specific order firstname, lastname, email, phone number and address: ', (contactDetails) => {
                const contactArray = contactDetails.split(' ');
                if(contactArray.length < 5 || contactArray.length > 5){
                    console.log('\nError the details you entered is either incomplete or too much, 5 details are required\n')
                    return MainMenu();
                }
                // what I want to do now is to create a new object of type phonenumber and then append it to an array
                const contact = new Contact() 
                contact['firstname'] = contactArray[0];
                contact['lastname'] = contactArray[1];
                contact['email'] = contactArray[2];
                if(contactArray[3].length < 11 || contactArray[3].length > 11){
                    console.log('Invalid phone number, phone number must be 11 in length')
                    return MainMenu();
                }
                
                contact['phonenumber'] = contactArray[3];
                contact['address'] = contactArray[4];
        
                phoneBook.push(contact)

                console.log('Your contact has been saved successfully');


                return MainMenu();
            })
        }

        

        else if(Number(userInput) == 3){
            console.log(phoneBook);
            return MainMenu();
        }
        else if(Number(userInput) == 4){
            r1.question('Enter the firstname or surname of the contact you want to search for: ', (contactName) => {
                for(let i = 0; i < phoneBook.length; i++){
                    if(phoneBook[i].firstname === contactName || phoneBook[i].lastname === contactName){
                        console.log(phoneBook[i])
                        return MainMenu();
                    }
                    else{
                        console.log('The contact you searched for was not found.')
                        return MainMenu();
                    }
                }
            })
        }
        else if(Number(userInput) == 6){
            r1.close();
        }
        else if(Number(userInput) == 7){
            console.log(phoneBook[0].firstname);
        }
        else{
            console.log('\nInvalid input, your input must be among the options displayed above')
            return MainMenu();
        }
    })
}
