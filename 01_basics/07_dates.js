// dates
let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
//console.table([myDate.toDateString(), myDate.toISOString(), myDate.toJSON(), myDate.toLocaleDateString(), myDate.toLocaleString(), myDate.toTimeString()])
// **i think myDate.toLocaleDateString() and myDate.toLocaleString() give good result 

console.log(typeof myDate); // object

// * if you want to declare date of your choise 
//let mychoiseDate= new Date(2026,0,24,5,3) //* month start from zero ** thing to remember 
//console.log(mychoiseDate.toLocaleString());

//let mychoiseDate= new Date("2025-12-30") // * yy-mm-dd it will always have out put as (the given method it will understand)  start with 1 not 0
//console.log(mychoiseDate.toLocaleString());

let mychoiseDate= new Date("12-30-2025") //* mm-dd-yy (more prefer in india)
//console.log(mychoiseDate.toLocaleString());

//* **************** Time stamps **************
let mytimeStamp = Date.now()
console.log(mytimeStamp); //* it will give you the million second from that January 1, 1970, UTC (the epoch).   output is 1767100252332

//* if you want to comapre it other 
console.log(mychoiseDate.getTime()); //* it will also give you million second from the reference date and now you can easily compare the above two 
//* these type of comparision is very important for quizes and all poll and etc

//****  comman interview question is how to convert these mili seconds into second 
console.log(Math.floor(Date.now()/10000)) //* if we dont do floor then there will be decimals 

//* how to fetch important only information from a date object 

let newDate = new Date();
console.log(newDate.getMonth()); //* starting from 0 not 1
console.log(newDate.getDay()); //* it will give monday tuesday as number (sun =0 , mon =1, tue=2)

//* so when we have to write in a certain manner then we can use backtricks
// `${newDate.getDay()} and the time `


//*************** important *****************

//* the most important we can coustmize the toLocaleString  differnt operation according to our need 

console.log(newDate.toLocaleString('default',{
    weekday:"long",
}))

