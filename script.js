// function myFunction() {
//   const element = document.getElementById("id01");
//   element.innerHTML = "New Heading";
// }

// function myColorChange() {
//   const element = document.getElementById("id01");
//   element.style.color = "red";
// }

// function mojaFunkcja() {
//   for (let i = 0; i <= 20; i += 2) {
//     console.log(i);
//   }
// }

// function twojaFunkcja() {
//   const target = 4;
//   let sum = 0;

//   for (let i = 0; i < target; i += 1) {
//     console.log("Twoje 'i' wynosi: " + i);
//     console.log("Twoje 'sum' wynosi: " + sum);
//     console.log("Obliczenie: " + sum + " + " + i + " = ");
//     sum += i;
//     console.log("Wynik: " + sum);
//   }
//   console.log("KOŃCOWY WYNIK: " + sum);
// }

// function klienciFunkcja() {
//   const clients = ["Mango", "Poly", "Ajax"];

//   for (let i = 0; i < clients.length; i += 1) {
//     console.log(clients[i]);
//   }
// }

// function znajdzKlienta(imie) {
//   const clients = ["Mango", "Poly", "Ajax"];
//   let message;

//   for (const client of clients) {
//     if (client === imie) {
//       message = "Klient z takim imieniem jest w bazie danych!";
//       break;
//     }

//     message = "Nie znaleźliśmy takiego klient w bazie danych!";
//   }

//   console.log(message);
// }

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// console.log(book.title); // 'The Last Kingdom'

// const bookGenres = book.genres;
// console.log(bookGenres[0]); // ['historical prose', 'adventurs']

// const bookPrice = book.price;
// console.log(bookPrice); // undefined

// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   location: {
//     country: "Jamaica",
//     city: "Ocho Rios",
//   },
//   hobbies: ["swiming", "music", "sci-fi"],

//   getName() {
//     console.log("Witaj użytkowniku: " + this.tag)

//   }
// };

// console.log(user.name);

// const loc = user.location;
// console.log(loc);

// const country = user.location.country;
// console.log(country);

// console.log("Hobbies: " + user.hobbies);

// const user = {
//   name: "",
//   tag: "",
//   location: {
//     country: "Jamaica",
//     city: "Ocho Rios",
//   },
//   hobbies: ["swiming", "music", "sci-fi"],
//   setName(aaa) {
//     this.name = aaa;
//   },
//   getName() {
//     console.log("Witaj uzytkowniku: " + this.name)
//   },
// };

// user.setName("Krzysiu");
// user.getName();

const przesylka = {
  name: "",
  ulica: "",
};

const przesylka2 = {
  name: "",
  ulica: "",
};

przesylka2.waga = 20;
przesylka.name = "List polecony";
przesylka2.name = "Paczka";

// console.log(przesylka.name);
// console.log(przesylka2.name);
// console.log(przesylka.waga);
// console.log(przesylka2.waga);

// function znajdzPrzesylke1() {
//   const element = document.getElementById("id01");
//   informacja = "Typ twojej przesyłki to: " + przesylka.name;
//   element.innerHTML = informacja;
//   element.style.color = "red";

//   const element2 = document.getElementById("id02");
//   informacja = "Masa twojej przesyłki to: " + "niedotyczy";
//   element2.innerHTML = informacja;
//   element2.style.color = "red";
// }

// function znajdzPrzesylke2() {
//   const element = document.getElementById("id01");
//   informacja = "Typ twojej przesyłki to: " + przesylka2.name;
//   element.innerHTML = informacja;
//   element.style.color = "red";

//   const element2 = document.getElementById("id02");
//   informacja = "Masa twojej przesyłki to: " + przesylka2.waga + " kg";
//   element2.innerHTML = informacja;
//   element2.style.color = "red";
// }

function znajdzPrzesylke(id) {
  const element = document.getElementById("id01");
  const element2 = document.getElementById("id02");

  if (id === 1) {
    //instrukcja dla przycisku z informacją o przesyłce 1
    informacja = "Typ twojej przesyłki to: " + przesylka.name;
    element.innerHTML = informacja;
    element.style.color = "red";

    informacja = "Masa twojej przesyłki to: " + "nie dotyczy";
    element2.innerHTML = informacja;
    element2.style.color = "red";
  }

  else if (id === 2) {
    //instrukcja dla przycisku z informacją o przesyłce 2
    informacja = "Typ twojej przesyłki to: " + przesylka2.name;
    element.innerHTML = informacja;
    element.style.color = "red";

    informacja = "Masa twojej przesyłki to: " + przesylka2.waga + " kg";
    element2.innerHTML = informacja;
    element2.style.color = "red";
  }
}
