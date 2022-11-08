const colorChange = ["red", "blue", "green", "rgb(128,128,128)", "rgb(0,100,0)", "rgb(20,128,0)", "rgb(10,128,100)"];

const btn = document.getElementById("btn-click");

const color = document.querySelector(".color");


btn.addEventListener("click", function (){

const  getrandomNumber = randomNumber();
console.log(getrandomNumber);
    
document.body.style.backgroundColor = colorChange[getrandomNumber];
color.textContent = colorChange[getrandomNumber];
})  

const randomNumber = () => { 
    return Math.floor(Math.random() * colorChange.length);
}





