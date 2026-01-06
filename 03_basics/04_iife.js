// Immediately invoked function expression(IIFE)


(function chai(){
    //* named iife
    console.log("Db is connected");
    
})();
//* its very imp to use this ';' as iife function did not know ki context kha rokna hai so if we want to use another iife them we have to end one by using ; at the end

( (name)=>{
    //* unnamed iife
    console.log(`hi ${name}`)
}

)("aditya"); //* we can also have arrow function 


//* so mow we dont have to call it, it will be directly conected 

//* *******************interview question ***************
//*iife are function which execute immidetly itself and it is also use to remove globle scope polution

//* global pollution occur when we have to many variable and functions globally as they have shared memory , some they overright each other and confution in name 
//* iife creat its own scope so varibale and funtion define in it can not pollute global variable 
