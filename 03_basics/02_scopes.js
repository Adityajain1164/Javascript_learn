//* scope is game of these 3 only 


//* global scope
//let a=10
//const b=20
//var c=30

//* we can console log it eaisly 

//* {} this is scope of that program(function, if else) , in objects it is object decleration




if(true){//* local scope or block scope
    let a=10
    const b=20
    var c=30
    // c=30  same scope like var
}



//console.log(a); //* error
//console.log(b); //* error
console.log(c); //* 30 and that is the problem 
//* thats why we dont use var as if any other programer writing other function and use var c then it will become problem and the answer will we showne of the last one 

//* initalizing without any let/const also has same problem of scope

//* scope of coding enviornment is different and scope of browser inspect is diifent ******* imp interview question*******




//* Nested scope 
//* child function  can acces the parent function variables 
function one(){
    const username="hitesh"
    function two(){
        const website ="youtube"
        console.log(username);//* no error
        
    }
    //console.log(website)//*error
    two()
}
one()


if(true){
    const username="aditya"
    if (username=="aditya"){
        const website=" youtube"
        console.log(username+website);
        
    }
   //console.log(website);//*error
    
}
//console.log(username)//*error

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++ interesting +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//* if we define function like below type then we can acces them even above its defining 

console.log(addone(5));//* not a error 
function addone(num){
    return num+1
}


//* now this is called as expression 
//* when you define in the expression way then we can not call a function before defining it 

//addTow(5)   //* error 
const addTow=function(num){
    return num+2
}
addTow(5) //* no error