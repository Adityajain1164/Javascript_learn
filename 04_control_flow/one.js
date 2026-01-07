//* if
//* consdition is true to code run hoga and if fasle to if ke andar ka code nhi run hoga
if(true){
    //* code under this scope will execute 
}
if(false){
    //* code under this scope will not execute 
}


const isuserloggedIN=true
if(isuserloggedIN){

}
//* operators of comperison 
//* <,>,>=,<=,==,!=,====(this check datatype also)
if(3!=2){//* it is true so this code will execute 

}
if(2==="2"){//* it is  so false code will not execute 
    console.log("executed");
    
}

 const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);


// const balance = 1000

// if (balance > 500) console.log("test"),console.log("test2");

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 750");
    
// } else {
//     console.log("less than 1200");

// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}