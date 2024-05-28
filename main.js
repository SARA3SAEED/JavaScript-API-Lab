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




 /*----------------------------------------------------------------*/

 let url1 = "https://coffee.alexflipnote.dev/random.json";

  
   fetch(url1 , {method: "GET"})
    .then(response => response.json())
    // .then(data => console.log(data))

    .then(data => {
           let GET2 = document.querySelector(".img1");
           let img = document.createElement("img");
           img.src = data.file;
           GET2.append(img);
           console.log(data);
    })
