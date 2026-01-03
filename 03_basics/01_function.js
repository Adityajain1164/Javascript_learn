//* function ka maltlab hai ki jo bhi apne code likha hai 10 20 line ka use a pakage me pack kar diya hai and is package ki jitni chahe jaha chae uski copies le ja sakte hai 
/*console.log("i");
console.log("h");
console.log("j");
console.log("k");*/


const syaMyName= function(){ //* {} this is scope of function 
    console.log("h");
    console.log("j");
    console.log("i");
    console.log("k");
}
syaMyName //* reference of a function
syaMyName() //* exeicution of function 


//* second way to define a number 
//* when we define a function the values that we pass are called perameters
//* when we call a function and the values that we pass are known as arguments 


function addTwoNumbers(number1,number2){ //* in js we dont have to give datatypes of perameters
    console.log(number1+number2);
    //* very imp , console.log() ka matlab ye nhi ki vo function vo value return bhi kar rha hai 
    
}


addTwoNumbers(2,3) //* 5
///* problem is when we give them arguments which are not of number datatype 
addTwoNumbers(2,"3") //* 23
addTwoNumbers(2,null) //* 2


const resultOfSum = addTwoNumbers(3,5) 
console.log(resultOfSum);//* this will give output undefine as function is not returinig something 




function AddTwoNumbers(number1,number2){ 
    
    //let result = number1+number2
    //return result
    return number1+number2
    //* scope of this return is only inside this fuction
    

    //* so when you return something from a function only then you can store it in a variable 
}
const result = AddTwoNumbers(3,5) // is result ka scope globle hai 
//console.log(result);


function userLoginMessage(username){
    if(username== undefined){
    // if(!username) //* as in js undefine ko apne aap hi false man liya jata hia 

        console.log("please enter a user name ");
        return
    }
    return `${username} just logged in`
}
//console.log(userLoginMessage("aditya"));

console.log(userLoginMessage()); //* answer is undefine so we must use a if else statement in our code  



//* for default value 
function userLoginMessagedefault(username="sam"){
    if(username== undefined){
    // if(!username) //* as in js undefine ko apne aap hi false man liya jata hia 

        console.log("please enter a user name ");
        return
    } //* we never need this statement 
    return `${username} just logged in`
}
console.log(userLoginMessagedefault()) //* sam just logged in
console.log(userLoginMessagedefault("aditya")) //* aditya just logged in





//* lets understand how we can pass different type of parameters

//* whene we are desining a shoping cart we dont know how many arguments are going to come and we have to add them continously 
//* so you have to prepare your parameter without knowing how many argument will come 


//* so for these case we use rest or spread operater which will give you a array of arrguments later you can apply a loop

//function calculateCartPrice(...num1){ 
function calculateCartPrice(val1,val2,...num1){     
    return num1 // we have return the array of arrgument 
    //* in second case it will return [500,800,2000]
}

console.log(calculateCartPrice(100,200,500,800,2000));






//* lets see if object is a parameter 
const user ={
    name : "aditya",
    price: 200
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.name} and price is ${anyobject.price}` )
    //* we can not use 'this' we have to use anyobject because this is when aobject call it self not a function call itself 
}
handleObject(user);

//* second way is that we can directily pass a object without defining it 
handleObject({
    name: "aditya",
    price:233
})






//* let see how can we pass arrays in the function as a parameter 
const myArray =[233,450,236]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myArray));

//* by not defining array priorly 
console.log(returnSecondValue([233,254,69]));



