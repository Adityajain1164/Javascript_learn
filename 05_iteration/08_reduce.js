const myNums=[1,2,3]

const myTotal = myNums.reduce( function (acc,curval) {
    console.log(` acc:${acc} and curval: ${curval}`);
    return acc+curval
},0)
console.log(myTotal);

//* lets write it in arrow function
const myTotal2=myNums.reduce( (acc,curval) => {
    console.log(` acc:${acc} and curval: ${curval}`);
    return acc+curval
},0)
console.log(myTotal2); 


//* smart code as reduce return also like filter and map
const myTotal3=myNums.reduce( (acc,curval) => (acc+curval) ,0)
console.log(myTotal3);

const shopingCart=[
    {
        itemName:"js course",
        price: 2999
    },
    {
        itemName:"python course",
        price: 299
    },
    {
        itemName:"c++ course",
        price: 5999
    },
    {
        itemName:"data scince  course",
        price: 12999
    },
]

//* add a functiality add all the item of shoping cart

const totalsum= shopingCart.reduce( (acc, currval) => (acc+currval.price),0)
console.log(totalsum);
