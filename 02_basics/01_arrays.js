//* first go and read documentation 
/* some important points from documentation 
1th JavaScript arrays are resizable and can contain a mix of different data types. (When those characteristics are undesirable, use typed arrays instead.)
2nd  JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies). so we get copyes by reference not by values 
*/
const myArr=[0,1,2,3,4,"aditya","jain"]
//console.log(myArr)

//* one more way to define array 
const myArr2= new Array(1,2,3,4)
//console.log(myArr2);

//* Array methods 

myArr.push(6)
myArr.push(7)
//console.log(myArr)

myArr.pop()
//console.log(myArr)

myArr.unshift(9) //* this is use to add element at the front of arry but it take high computational power because we have to chage every element index from one place 
myArr.shift() //* from poping from front
//console.log(myArr)

//* for questions 
//console.log(myArr.includes(9)); //* answer will be in boolean
//console.log(myArr.indexOf(9)) //* if not in the array then it will show -1

const newArr = myArr.join(); //* it join all the element and convert datatype into string 
//console.log(newArr); //* output will be 0,1,2,3,4,aditya,jain,6
//console.log(typeof newArr);


//* slice, splice
//*************very important for interview *****************
//* slice do not include the last number of range and do not manipulate the real array 
//* splice inculde the last of given number and also remove that range from the orignal array

//console.log("A", myArr);
const myn1=myArr.slice(1,3)
//console.log(myn1);
//console.log("B",myArr);


//* for splice 
console.log("A", myArr);
const myn2=myArr.splice(1,3)
console.log(myn2);
console.log("B",myArr);








