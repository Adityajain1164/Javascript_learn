//* Object defining by constructure (singleton)
const tinderUser = new Object()
console.log(tinderUser);

tinderUser.id = "1234abc" // here '=' not ':'
tinderUser.name = "aditya"
tinderUser.isLoggedIn = false

const mysym=Symbol("key1")
tinderUser[mysym]="mykey1"

console.log(tinderUser); 

//* now lets understand how to use a object in a object
const regularUser={
    fullName : {
        userfullname:{
            firstName:"aditya",
            middleName : "kumar",
            lastName:"jain"
        }
    }
}
console.log(regularUser.fullName?.userfullname.lastName);// ? is kind of protection that if fullName exist then impliment this 


//* lets understand how to combine the objects
//* first way same as string  using the concept of spread
const obj1={1:"a",2:"b",3:"c"}
const obj2={4:"d",5:"e",6:"f"}
//const obj3={...obj1,...obj2}
//console.log(obj3);

//* second is use of assign function

const obj3= Object.assign({},obj1,obj2) // do not use 'new' because object.assign is not a constructure 
//* if we dont use {} then also answer will be same but object 2 will go in obj1 in memory but when we use it, they both will go in a empty object
console.log(obj3);


//* when data come from database it will come as a array of objects 
const userData =[
    {
        id:1 ,
        email:"a@gmail.com"
    },
    {
        id:2 ,
        email:"b@gmail.com"
    }
    
]
//* if we want to access them we have use indexes 
console.log(userData[0].email);



//* lets learn methods on objects 
console.log(Object.keys(tinderUser)); 
//* ***** very important points ******* 
//* these are methods on object not on tinderUser that why we have to mention tinderuser in perentisis 
//* its result carry keys in array so we can apply loops and all , it will be very benificial while working on backend 
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser)); //* it will give arrays in arrays as all the key value pair are in indivial array and group is also in a array first element of a array is key and second is value



//* sometimes we are looping through object to get some values but that value does not exist 
console.log(tinderUser.hasOwnProperty('isLoggedIn')) //* ture
console.log(tinderUser.hasOwnProperty('isLogged')) //* false



//* other important method we can learn from browser console