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