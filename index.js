let userInputEl = document.getElementById("userInput");
let factEl = document.getElementById("fact");
let spinnerEl = document.getElementById("spinner");

function appendAndChat(event) {
  if (event.key === "Enter") {
    let userInputVal = userInputEl.value;
    let url = "https://apis.ccbp.in/numbers-fact?number=" + userInputVal;

    let options = {
      method: "GET",
    };

    spinnerEl.classList.remove("d-none");
    factEl.classList.add("d-none");

    fetch(url, options)
      .then(function (resposnse) {
        return resposnse.json();
      })
      .then(function (jsonData) {
        // console.log(jsonData)
        let { fact } = jsonData;
        spinnerEl.classList.add("d-none");
        factEl.classList.remove("d-none");
        factEl.textContent = fact;
      });
  }
}

userInputEl.addEventListener("keydown", appendAndChat);
