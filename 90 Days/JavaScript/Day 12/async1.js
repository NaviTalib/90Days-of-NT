// // normal (synchronous)

// console.log("A");
// console.log("B");
// console.log("C");

// // async example

// console.log("start");

// setTimeout(() =>{
//     console.log("inside timeout.")
// },2000);

// console.log("end");

// // old way c(callback functions)

// function getData(callback){
//     setTimeout(() =>{
//         callback("Data Loded");
//     },2000);
// };

// getData((data) =>{
//     console.log(data);
// })


// promise

let promise = new Promise((resolve,reject) =>{
    setTimeout(() =>{
        resolve("success");
    },2000);
});

promise.then(result => console.log(result)).catch(error => console.log(error));
