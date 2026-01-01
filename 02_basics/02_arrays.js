const marvelHeroes = ["thor", "ironman","spiderman"]
const dcHeroes=["superman","flash","batman"]
//* now if i want to merge them into one 
//marvelHeroes.push(dcHeroes) //* it change the marvel array and add dc array as a single element not complete merge them 
//console.log(marvelHeroes);

//* we can use concatinate 
const newArr = marvelHeroes.concat(dcHeroes) //* as this give a new array do not chage in marvel and also merge them in correct way
console.log(newArr);

//* second way is use of spread
//* its like when a glass glass fell so it spread 
//* so element of array behave as indivisual element not as a array 
const allNewHeroes = [...marvelHeroes,...dcHeroes]
console.log(allNewHeroes); //* sme result as concat

const anotherArr=[1,2,3,[4,5,[6,7]]]
//* if we want to flat it 
const realarr= anotherArr.flat(Infinity) //* you have to mention degree till you want to flat the array
console.log(realarr);

//* when ever we are scraping the data the there format are different different so we have to convert them into arr because array is very benificial for looping 
console.log(Array.isArray("aditya")); //*false
console.log(Array.from("aditya")); //* it will make a array like 'a','b' 
console.log(Array.from({name:"aditya "})); //* so now it will return a empty array as we have to define that we need arry of key or a value //*********intresting */

const score1=100
const score2=200
const score3=300
console.log(Array.of(score1,score2,score3)); /* here we use of not from */

