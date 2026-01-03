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