//* javascript objects and events are very important concepts to understand in web development. Objects allow us to group related data and functionality together, while events enable us to respond to user interactions and other occurrences in our applications.

//* objects are like real life objects they have properties and behaviour 
//* example a car have properties like color , model , brand etc and behaviour like start , stop , accelerate etc

//* in javascript object is a collection of key value pairs 
//* where key is a string (also called property name) and value can be any data type including another object or function




//* there are two ways of defining an object
//* 1. using object literal syntax 
//* 2. using constructure  , singleton object is formed (one of its type )

//* to define a symbol
const mySym=Symbol("Key1")// we have to initially declear it to use a symbol in a object //* in symbols we dont have to use new 

//* object literal (way of definfing object)
const JsUser={
    name: "aditya" ,//* object contain keys and values (name /keys string ki tarh hi store hota hai )

    "full Name":"aditya jain",//* this can never be acces as JsUser.full name so we have to use the other method

    age :18,

    [mySym]:"mykey1",   //* this is correct way of using a symbol in a object . else it will be treated as a string

    email:"adityajain1164@gmail.com",
    isLoggedIn: false,
    lastLoginDays:["Mon"]
}




console.log(JsUser.email);//* less prefered 
console.log(JsUser["email"]);//* more preferd as always applicable
//console.log(JsUser.fullName) //* it will show a error IF full and name as space in between 
console.log(JsUser["full Name"]) //* now only this is correct 
//* important interview question is take a symbol as key of a object and print it
console.log(JsUser[mySym]);







//* to overwrite a value 
JsUser.email="aditya@chatgpt.com"

// to freez the object 
//*Object.freeze(JsUser)
JsUser.email="aditya@gmail.com"  //* in output email will be aditya@chatgpt.com
console.log(JsUser);



//*  in js function can be treated same as function not much difference between them 
JsUser.greetings=function(){
    //console.log(`hello ${JsUser.name}`);//* string interpolation

    //* if same object ko reference karna hai to ham this ka use bhi kar sakte hai
    console.log(`hello, ${this.name}`);
    
}



//console.log(JsUser.greetings); we have to add a perntesis here as a function will not execute here it reference will return 
console.log(JsUser.greetings());

