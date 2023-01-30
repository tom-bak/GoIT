function myFunction() {
  const element = document.getElementById("id01");
  element.innerHTML = "New Heading";
}

function myColorChange() {
  const element = document.getElementById("id01");
  element.style.color = "red";
}

function mojaFunkcja() {
  for (let i = 0; i <= 20; i += 2) {
    console.log(i);
  }
}

function twojaFunkcja() {
  const target = 4;
  let sum = 0;

  for (let i = 0; i < target; i += 1) {
    console.log("Twoje 'i' wynosi: " + i);
    console.log("Twoje 'sum' wynosi: " + sum);
    console.log("Obliczenie: " + sum + " + " + i + " = ");
    sum += i;
    console.log("Wynik: " + sum);
  }
  console.log("KOŃCOWY WYNIK: " + sum);
}

function klienciFunkcja() {
  const clients = ["Mango", "Poly", "Ajax"];

  for (let i = 0; i < clients.length; i += 1) {
    console.log(clients[i]);
  }
}

function znajdzKlienta(imie) {
  const clients = ["Mango", "Poly", "Ajax"];
  let message;

  for (const client of clients) {
    if (client === imie) {
      message = "Klient z takim imieniem jest w bazie danych!";
      break;
    }

    message = "Nie znaleźliśmy takiego klient w bazie danych!";
  }

  console.log(message);
}