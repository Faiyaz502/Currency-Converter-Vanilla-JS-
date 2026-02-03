const BASE_URL =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

const apiKey = "e18f186fc44c200eff7c5ada";


const dropdowns = document.querySelectorAll(".dropdown select");

const btn = document.querySelector("form button");

const finalResult = document.querySelector(".detail p");





const changeFlag = (element) => {

  console.log(element);


  let currCode = element.value;

  let countryCode = countryList[currCode];

  console.log(countryCode);


  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;



  let img = element.parentElement.querySelector("img");


  img.src = newSrc;


}




for (let select of dropdowns) {




  for (let countryCode in countryList) {




    let newOption = document.createElement("option");
    newOption.innerHTML = countryCode;
    newOption.value = countryCode;

    select.append(newOption);

    if (select.name === "From" && countryCode === "USD") {

      newOption.selected = "selected";

    } else if (select.name === "To" && countryCode === "BDT") {
      newOption.selected = "selected"

    }





  }



  select.addEventListener("change", (evt) => {

    
      
    changeFlag(evt.target);

  });

}

btn.addEventListener("click", async (evt) => {

  evt.preventDefault(); // refresh or other default settings off after submit of form
  let amount = document.querySelector(".amount input");
  console.log(amount);

  let amountVal = amount.value;
  if (amountVal === "" || amountVal < 1) {
    amountVal = 1;
    amount.value = "1";


  }


  let fromCurr = document.querySelector("#from").value;
  let toCurr = document.querySelector("#to").value;


  console.log(fromCurr, toCurr);

  const URL = `https://v6.exchangerate-api.com/v6/${apiKey}/pair/${fromCurr}/${toCurr}`
  let response = await fetch(URL);

  if (!response.ok) {
    console.log("Error in fetching");
  }

  //   console.log(response);



  let data = await response.json();


  let rate = data.conversion_rate;

  console.log(rate);


  let finalAmount = amountVal * rate;

  finalResult.innerHTML = `${amountVal} ${fromCurr} = ${finalAmount} ${toCurr}`;




})

