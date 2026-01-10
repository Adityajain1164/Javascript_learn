// for loop 
//* for selecting duplictes in vs code press ctrl + d 
for (let i = 0; i < 10; i++) {
    const element = i;
    if(element===5){
        console.log("5 is best number");
        
    }
    console.log(element );
    
    
}
//console.log(element); //* error

for (let i = 1; i <= 10; i++) {
    //console.log(`Outer loop value: ${i}`);
   for (let j = 1; j <= 10; j++) {
    //console.log(`Inner loop value ${j} and inner loop ${i}`);
    //console.log(i + '*' + j + ' = ' + i*j );
   }
    
}

let myArray = ["flash", "batman","superman"]
console.log(`lenght of array is ${myArray.length}`);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
    
}
//* if we go more then the bound of array then it will give undefine which is very bad in context of loop
//* break in a loop
for(let i =0; i<=10;i++){
    if(i==5){
        console.log(`we have fond the best number ${i}`);
        break;
        
    }
    console.log(i);
    
}

//* continue in a loop
//* for make a copy shift + alt+ down key
for(let i =0; i<=10;i++){
    if(i==5){
        console.log(`we have fond the best number ${i}`);
        continue;
        
    }
    console.log(i);
    
}
