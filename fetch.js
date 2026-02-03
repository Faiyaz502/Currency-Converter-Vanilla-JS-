//--------------------Fetch API(application programming interface)-
//API-------- like send reqst to others websites
//in respose they send us some data 

// let promise = fetch(url,[option]) ; [get request default]





const URL = "https://api.thecatapi.com/v1/images/search"

//fetching(sending,receving)


const img = document.querySelector("#img") ;


const btn = document.querySelector("#btn") ;












// const getPic = async () => {

//     console.log("Getting Data.......");
    

//   let response = await fetch(URL) ;

//   console.log(response);

// console.log(response.status);//it request and response objects 

// let data = await response.json(); // transfered json formate to object formate
// console.log(data[0].url);

// img.src = data[0].url


// }

// getPic();

// btn.addEventListener("click" , getPic) ;



//JSON --- javascript object notation

//API response come in JSON format and we have to change it into Js object(usable)
// for this we use json() method = 




///with promise chain


// function getImg2 () {

//         fetch(URL) 
//         .then((respond) => {

//             return respond.json();


//         })
//         .then((data)=> {
//             console.log(data);


//         img.src = data[0].url
            
//         })







// }

// btn.addEventListener("click" , getImg2) ;


///nooo need this method

















