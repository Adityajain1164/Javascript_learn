const myNums=[1,2,3,4,5,6,7,8,9,10]

// if i have to add 10 to all the values 

//* we will use map() method and it also return the values
const newNums=myNums.map( (nums) => nums+10)
//console.log(newNums)
//console.log(myNums);//* inital array is not changed

//* if we want to do it from foreach
const newNums1=[]
myNums.forEach( (nums) => {
    newNums1.push(nums+10)
})
//console.log(newNums1); //* same result



//* Chaning
const newNumber=myNums.map( (num) => num*10).map((num) => num+1).filter( (num) => num>=40)  //* 41,51,,61......
console.log(newNumber);


