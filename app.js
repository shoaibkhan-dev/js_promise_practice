fetch("https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1")
.then((data) => {
  console.log(data)
})
.catch((error) => {
  console.log(error)
})


new Promise (function(resolve, reject){
  setTimeout(function(){
    console.log("promise resolved")
    resolve()
  }, 3000)
})


const promiseTwo = new Promise(function(resolve,reject){
  setTimeout(function(){
     resolve({userName: "shoaib", email: "abc.example@gmail.com"})
  },2000)
});

promiseTwo.then(function(user){
   console.log(user)
})

const promiseThree = new Promise(function(resolve,reject){
  setTimeout(function(){
    let error = false;
    if(!error){
      resolve({name: "shoaib", password: "12345"})
    } else {
      reject("something went wrong")
    }
  } ,3000)
});

promiseThree.then((user) =>{
 console.log(user)
 return user.userName
})
.then((userName) =>{
  console.log(userName)
})
.catch((error) =>{
  console.log(error)
})
.finally(() =>{
  console.log("the promise is either resolved or rejected")
})


const promiseFive = new Promise(function(resolve, reject){
  setTimeout(function(){
    let error = true
    if(!error){
      resolve({name: "javascript", password: "12345"})
    }else{
      reject("something went wrong")
    }

  } ,4000)
});

async function consumePromiseFive(){
  const response = await promiseFive
  console.log(response)
}

consumePromiseFive()


const promiseSix = new Promise(function(resolve,reject){
  setTimeout(function(){
    let error = true;
    if(!error){
      resolve({name: "ahmad", age: 23, location: "peshawar"})
    } else{
      reject("something went wrong")
    }
  },2000)
});

promiseSix.then((name)=>{
  console.log(user)
  return name.userName
})
.then((userName)=>{
  console.log(userName)
})
.catch((error)=>{
  console.log(error)
})
.finally(()=>{
  console.log("the promise is either resolved or rejected")
})



const promiseOne = new Promise(function(resolve,reject){
  setTimeout(function(){
    let error = true;
    if(!error){
      resolve({name: "shoaib", rollNo: 25})
    } else{
      reject("something went wrong")
    }
  },2000)
});

async function consumePromiseone() {
  try {
    const response = await promiseOne
    console.log(response)
  } catch (error) {
    console.log(error)
  }
}

consumePromiseone()


async function  consumePsromiseOne() {
  try{
    const resolve = await promiseOne
    console.log(response)
  } catch (error){
    console.log(error)
  }
}


async function consumePromiseFive(){
  try{
    const resolve = await promiseFive
    
    console.log(response)
  }
}