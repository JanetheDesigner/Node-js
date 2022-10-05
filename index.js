// const http = require('http')

// const hostname = '127.0.0.1'
// const port = 3000

// const server = http.createServer((req, res) => {
//   res.statusCode = 200
//   res.setHeader('Content-Type', 'text/plain')
//   res.end('Hello World\n')
// })

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`)
// })


//crreate a function
// function server() {

//     return{
//         status:"UP",
//         code: 200
//     }
// }

// function parent(callback){
//     const obj = {
//         name: "John",
//         gender: "male"
//     }
//     console.log(callback)


// if(callback){
//     callback(obj)
// }else{
//     console.error("A function must be provided as the argument of parent")
// }
// }

// function cb(user){
//     console.log("Running callback function...,user.name")
// }
// parent(cb)

// const serve =server();

// console.log(server)


// function
// function greet(name, callback) {
//     console.log('Hi' + ' ' + name);
//     callback();
// }

// // callback function
// function callMe() {
//     console.log('I am callback function');
// }

// // passing function as an argument
// greet('Jane', callMe);



// const names=["Chukwudi","Chikki","Kwuchu","Ebube"]
// function cb(one,two,three){
// console.log(one,two,three)
// }
// names.map(cb)







// const months=["Jan","Feb","March"]
// function J(one,two,three){
//     console.log(one,two,three)
// }
// months.map(J) 


// const url="https://nba-product-api.herokuapp.com/"

// const onSuccess= function(res){
//     console.log(res)
// }

// function onError(error){
//     console.log(error)
// }

// fetch(url).then(onSuccess).catch(onError)



// try{
//     let name
// }

// catch{

// }

// finally{

// }




// function resolveAfter2Seconds() {
//     return new Promise(resolve => {
//       setTimeout(() => {
//         resolve('resolved');
//       }, 2000);
//     });
//   }
  
//   async function asyncCall() {
//     console.log('calling');
//     const result = await resolveAfter2Seconds();
//     console.log(result);
//     // expected output: "resolved"
//   }
  
//   asyncCall();
    


// const url = "https://nba-product-api.herokuapp.com/"

// async function getProducts(){
//   try{
//   const res=await fetch(url);
//   const data = await res.json();
//   console.log(data);
// }
//   catch(error){
//   console.log(error)
// }
// }

// getProducts();    





const names = {
  i : async function(){
    return [
      {age : 25, gender : 'female'},
      {age :25, gender : 'female'}
    ]
  }
}

names.i().then((result) => (console.log(result))).catch((error) => (console.error('An error occured', error)))

// using async await
async function username(){
  try {
    const result = await names.i()
    console.log(result)
  } catch (error) {
    console.error('An error occured',error)
  }
}

username()