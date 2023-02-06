// "Normalna" deklaracja funkcji
function classicAdd(a, b, c) {
  return a + b + c;
}

// To samo w postaci arrow function
const arrowAdd1 = (a, b, c) => {
  return a + b + c;
};

// To samo w postaci arrow function
const arrowAdd2 = (a, b, c) => a + b + c;

function planetsMap() {
  const planets = ["Ziemia", "Mars", "Wenus", "Jowisz"];

  const planetsInUpperCase = planets.map((planet) => planet.toUpperCase());
  console.log(planetsInUpperCase);

  const planetsInLowerCase = planets.map((planet) => planet.toLowerCase());
  console.log(planetsInLowerCase);

  // Oryginalna tablica się nie zmieniła
  console.log(planets);
}

function studentsMap() {
  const students = [
    { name: "Mango", score: 83 },
    { name: "Poly", score: 59 },
    { name: "Ajax", score: 37 },
    { name: "Kiwi", score: 94 },
    { name: "Houston", score: 64 },
  ];

  const names = students.map((student) => student.name);
  //console.log(names);
  return names;
}

function studentsFlatMap() {
  const students = [
    { name: "Mango", courses: ["matematyka", "fizyka"] },
    { name: "Poly", courses: ["informatyka", "matematyka"] },
    { name: "Kiwi", courses: ["fizyka", "biologia"] },
  ];

  const allCourses = students.flatMap((student) => student.courses);

  const uniqueCourses = allCourses.filter(
    (course, index, array) => array.indexOf(course) === index
  );

  return uniqueCourses;
}

function maciej() {
  const maciej = {
    username: "Maciej",
    showThis() {
      console.log(this);
    },
    showName() {
      console.log(this.username);
    },
  };

  maciej.showThis();
  maciej.showName();
}

class Car {
  name = "";
  year = 2011;
}

let myCar1 = new Car();
myCar1.name = "Ford";
myCar1.year = 2012;

//console.log(myCar1);

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  // Metoda getEmail
  getEmail() {
    return this.email;
  }

  // Metoda changeEmail
  changeEmail(newEmail) {
    this.email = newEmail;
  }
}

let user = new User("Mango", "mango@gmail.com");

console.log(user.getEmail()); // stary mail

user.changeEmail("new@gmail.com");
console.log(user.getEmail()); // nowy mail


