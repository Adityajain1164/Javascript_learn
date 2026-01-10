const coding = ["js","python","ruby","cpp"]
//* in arrays some loops are added in there properties and we will use these loops more the other like foreach loop is in property of array we can see using inspect and console in browser



//* Higher order function 
// in callback function there is no name in definig function
//* for each loop is smart so we dont need to give perameter also so what ever value we assin in () it will auto take parameter from array
coding.forEach( function (val){
    //console.log(val); //* it will give all values of array
    
})

coding.forEach( (item) => {
    //console.log(item); //* it will give all the values
    
})


function printMe (item){
    //console.log(item);
    
}
//coding.forEach(printMe)     //* it will also give all value
//* very important , we have to give reference of function dont have to execute it 



//* foreach function has acces of multiple parameter 
coding.forEach((item,index,arr) => {
    console.log(item,index,arr);
    
})




//* there is one common senario of objects in array
//* [{},{},{}]  and foreach is heavily used in this senerios
//* very important as database se value arry me ati hai and har ek value ek object hi hota hai 

const myCoding = [
    {
        languageName: "python",
        languageFileName: "py"
    },
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "C++",
        languageFileName: "cpp"
    }
]

myCoding.forEach((item) => {
    console.log(item);//* now item is indivisual object 
    
    //console.log(item.languageName); //* it will gave language name of every object
    
});