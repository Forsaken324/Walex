// Introduction to Javascript Objects

const building = {
  name: "JR Nsikak Tower",
  address: "15 Creg Avenue Off 35th Street Wuye",
  officeOrRooms: 50,
  numberOfFloors: 20,
  country: "Nigeria",
  state: "FCT",
};

console.log(building["country"]);

building["owner"] = "JR Nsikak";

GetLength(building);

function GetLength(input) {
  count = 0;
  for (item in input) {
    count += 1;
  }
  console.log(count); // this is the length of the object
}

// for (let i = 0; i < 10; i++){
//     console.log(i);
// }

// you can also create an object using the new keyword

const television = new Object();

television["brand"] = "LG";
television["sizeInInches"] = 72;
television["ports"] = {
  hdmi: 2,
  usb: 4,
};

console.log(television);

// primitive values

// A primitive value is a vlue that has no properties or methods

// they include strings, numbers, boolean, null, undefined, symbol, bigint

// you can delete the property of an object by specifying it

// e.g
building["deleteme"] = "This property will be deleted";

delete building["deleteme"];

// the this keyword is just like the self keyword in python, it refers to the person or object

const today = new Date();

const user = {
  firstname: "Josiah",
  secondname: "Omotayo",
  email: "josiahomotayo@gmail.com",
  dateofbirth: new Date("2004-01-02"),
  age: function () {
    var age = today.getFullYear() - this.dateofbirth.getFullYear();
    var month = today.getMonth();

    if (
      month < 0 ||
      (month === 0 && today.getDate() < this.dateofbirth.getDate())
    ) {
      age--;
    }
    return age;
  },
  name: function () {
    console.log(`${this.firstname} ${this.secondname}`);
  },
};

console.log(user.age());
user.name();

// Object.values creates an array from an objects property

const BuildingArray = Object.values(building);
console.log(BuildingArray);

// Object.entries makes it simple to use objects in loops

for (let [fruit, value] of Object.entries(building)) {
  console.log(fruit, value);
}

let mystring = JSON.stringify(building);
console.log(mystring);
