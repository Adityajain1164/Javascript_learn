# Projects related to DOM

## project link
[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## project 1

```javascript
console.log("aditya")
// first task is to select all the button and then we have to select the body because we have to change the color of the body and that is the whole aim 
const buttons=document.querySelectorAll('.button')
const body= document.querySelector("body")

buttons.forEach((button) => {
  console.log(button)
  button.addEventListener('click',(e)=>{
    console.log(e)
    console.log(e.target)
    if(e.target.id=="grey"){
      body.style.backgroundColor='grey'
    }else if(e.target.id=="white"){
      body.style.backgroundColor='white'
    }else if (e.target.id=="blue"){
      body.style.backgroundColor='blue'
    }else{
      body.style.backgroundColor='yellow'
    }
    
  })
})
```


## project 2

``` javascript
console.log("aditya")
// WE can not select the value of input hight and weight outside the event because when page is loded script will be run the it will collect the empty values so it is better to get the input values inside a event

// this use case will give you empty values
// const height = parseInt(document.querySelector('#height'))
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    result.innerHTML = `please provid a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = `please provid a valid height ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    if(bmi<18.6){
      result.innerHTML = `<span>Under weight, ${bmi}</span>`;
    }else if(bmi>= 18.6 && bmi<24.9){
      result.innerHTML = `<span>Normal Range, ${bmi}</span>`;
    }else{
      result.innerHTML = `<span>Overweight, ${bmi}</span>`;
    }

    
  }
});
```