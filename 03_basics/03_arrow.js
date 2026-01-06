//* this tell us about the current context  of a object 
const user ={
    username:"aditya",
    price: 599,

    welcomemessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);//* this will give as the current context (current values of all varible in this scope)
        
    }

}
console.log(user.welcomemessage());
user.username="Neha"
console.log(user.welcomemessage());


//* now let see what happen when we do this in global scope
console.log(this); //* output will be {}
//* because we are in node enviornment so this is pointing a empty object because there is no context in global 


//* ******************* important for interview ***************
//* the global object in browser is window 
//* so when we do console.log(this) in browser it will give window



function chai(){
    //console.log(this);//* boutkuch aa jayega 
    let username = "aditya"
    console.log(this.username);//* undifine ayega because this only object the current context bata hai 
    

    
}
//chai()


//* Arrow function 
const chaiarrow=() => {
    let username = "aditya"
    //console.log(this.username);//* undefine
    console.log(this); //* it will gave {}, empty object 
    
}
chaiarrow()
//*********************imp interview question  ******************************************
//* what is difference between arrow function and normal function 
//* arrow function dont have there own context or this the take it from  their parent scope 

const addtwo= (num1 , num2 ) => {
    return num1+num2
}
console.log(addtwo(3,5));
 
//* implicit return as no need for return and {}, use use () insted
const addthree=(num1,num2,num3) => (num1+num2+num3)
//* very important in react 
console.log(addthree(20,30,40));
 
//*if we want to return a object then use () rapp karna hi hoga 

const namesame=() =>{username:"aditya"} //* it will give undefine 
const namesame1=() =>({username:"aditya"}) //* correct way









































//* ************************************************* important understaning ***********************************************************************

/*We write code to instruct hardware indirectly through software layers.
A code editor like VS Code is used only to write and edit code; it does not execute it.
Code execution is done by interpreters or compilers. JavaScript uses a hybrid model with interpretation and JIT compilation via the V8 engine.
Interpreters and compilers alone are not sufficient; they need a runtime environment, which provides memory management, libraries, APIs, and OS access.
Node.js is the runtime environment for backend JavaScript, while Python code runs on the Python runtime environment.
In the browser, the browser itself is the runtime environment, and window is the global object provided by it.
Finally, the runtime environment communicates with the operating system, which uses hardware to execute the program.*/

