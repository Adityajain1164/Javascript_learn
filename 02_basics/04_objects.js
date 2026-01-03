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






//* lets understand the destructuring of objects 
const course={
    coursename:"js in hindi",
    price:"999",
    courseInstructure:"hitesh"
}
//course.courseInstructure
//* jab hame ek do baar chizo ka use karna pade 
const {courseInstructure}=course
// so from now we dont need to always mention course.blhablablah
console.log(courseInstructure);
//* if courseInstructure is a big name then we can use a nickname 
const {courseInstructure:cI}=course
console.log(cI);



//* how we use this in react 
const navbar =({company}) => { // insted of props.company
    //* when ever you see this {} understand that is concept of dstructuring 


}
navbar(company="nehaorganics")








//* lets learn something about api 
//* when ever you put your work on someone else headache that is api
//* apke backend se value ati hai aap un values ko kis tarah likhte hai 
//* in past time these values come in the xml structure and that is very complex 
//* in present time values come in json form 


//* a json is nothing but a object jiska koi naam nhi hai 

//{
//    "name" : "aditya",
//    "Id" : "a@gmail.com",
//    "price":"free" 

//}

// we can also get the data in aaray

[
    {},
    {},
]

//* randomuser me api example
//* we have different tools to understand this data jason formatter

{
  "results": [
    {
      "gender": "female",
      "name": {
        "title": "Miss",
        "first": "Jennie",
        "last": "Nichols"
      },
      "location": {
        "street": {
          "number": 8929,
          "name": "Valwood Pkwy",
        },
        "city": "Billings",
        "state": "Michigan",
        "country": "United States",
        "postcode": "63104",
        "coordinates": {
          "latitude": "-69.8246",
          "longitude": "134.8719"
        },
        "timezone": {
          "offset": "+9:30",
          "description": "Adelaide, Darwin"
        }
      },
      "email": "jennie.nichols@example.com",
      "login": {
        "uuid": "7a0eed16-9430-4d68-901f-c0d4c1c3bf00",
        "username": "yellowpeacock117",
        "password": "addison",
        "salt": "sld1yGtd",
        "md5": "ab54ac4c0be9480ae8fa5e9e2a5196a3",
        "sha1": "edcf2ce613cbdea349133c52dc2f3b83168dc51b",
        "sha256": "48df5229235ada28389b91e60a935e4f9b73eb4bdb855ef9258a1751f10bdc5d"
      },
      "dob": {
        "date": "1992-03-08T15:13:16.688Z",
        "age": 30
      },
      "registered": {
        "date": "2007-07-09T05:51:59.390Z",
        "age": 14
      },
      "phone": "(272) 790-0888",
      "cell": "(489) 330-2385",
      "id": {
        "name": "SSN",
        "value": "405-88-3636"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/75.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
      },
      "nat": "US"
    }
  ],
  "info": {
    "seed": "56d27f4a53bd5441",
    "results": 1,
    "page": 1,
    "version": "1.4"
  }
}