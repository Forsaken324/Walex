// Object Constructor

today = new Date();

function Person(
  firstname,
  secondname,
  dateofbirth,
  age,
  eye,
  hobby,
  skill,
  language,
  country,
  continent
) {
  (this.firstname = firstname),
    (this.secondname = secondname),
    (this.dateofbirth = dateofbirth),
    (this.age = function () {
        age = today.getFullYear() - dateofbirth.getFullYear();
        month = today.getMonth();
        if (
          month < 0 ||
          (month === 0 && today.getDate() < dateofbirth.getDate())
        ) {
          age--;
        }
        return age;
      });
    
    (this.eyeColor = eye),
    (this.hobby = hobby),
    (this.skill = skill),
    (this.language = language),
    (this.country = country),
    (this.continent = continent);
}

const Peter = new Person(
  "Peter",
  "Josias",
  new Date('1974-04-05'),
  "reading",
  "coding",
  "english",
  "Nigeria",
  "Africa"
);
console.log(Peter.secondname);
console.log(Peter.hobby);
console.log(Peter.age());

