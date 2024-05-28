// let url = "https://jsonplaceholder.typicode.com/posts";

// fetch(url , {method: "GET"})
//  .then(response => response.json())

//  .then(data =>console.log(data))

//  .then(data => {
//     title = data;
//     let GET1 = document.querySelector(".GET1");
//     title.forEach(element => {
//         let list = document.createElement("li");
//         list.innerText = element.title;
//         console.log(element);

//         GET1.append(list);
//     });
//     console.log(data);
//  })
//  .catch(error => console.log(error));





//     let url = "https://jsonplaceholder.typicode.com/posts";
    
//     console.log(url);

//     async function fetchData(){
//         try{
//             let response = await fetch(url);
//             let data = await response.json();
//             console.log(response);
//             console.log(data);
       
//             let GET1 = document.querySelector(".GET1");
//             data.forEach(element => {
//                 let list = document.createElement("li");
//                 list.innerText = element.title;
//                 console.log(element);
//                 GET1.append(list);
       
       
//            })
//         } catch(error){
//             console.log(error);
//         }

// };


//   fetchData();






 /*------------------------------LAB1----------------------------------*/

//  let url1 = "https://coffee.alexflipnote.dev/random.json";

  
//    fetch(url1 , {method: "GET"})
//     .then(response => response.json())
//     // .then(data => console.log(data))

//     .then(data => {
//            let GET2 = document.querySelector(".img1");
//            let img = document.createElement("img");
//            img.src = data.file;
//            GET2.append(img);
//            console.log(data);
//     })



 /*------------------------------LAB2----------------------------------*/

 let url2 = "https://rickandmortyapi.com/api/character";

 async function DataFetch(){
     try{
         let response = await fetch(url2);
         let data = await response.json();
         console.log(response);
         console.log(data);

        //  let Chacters = document.querySelector(".Chacters");
        //  let Chacter1 = document.querySelector(".name");
        //  let characterimg = document.querySelector(".img");

        //  console.log(Chacters);
     
        // Chacter1.innerHTML = data.results[0].name;
        // characterimg.src = data.results[0].image;


        for (let i = 0; i < data.results.length; i++) {
             
            
         let Chacters = document.querySelector(".Chacters");
         let div1 = document.createElement("div");
         let Chacter1 = document.createElement("h4");
         let characterimg = document.createElement("img");

         console.log(Chacters);
     
        Chacter1.innerHTML = data.results[i].name;
        characterimg.src = data.results[i].image;
        Chacters.append(div1);
        div1.append(Chacter1);
        div1.append(characterimg);
        }



        }catch(error){
            console.log(error);
        }
    
    };


    DataFetch();