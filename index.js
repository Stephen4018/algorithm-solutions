const colorChange = [
  "red",
  "blue",
  "green",
  "rgb(128,128,128)",
  "rgb(0,100,0)",
  "rgb(20,128,0)",
  "rgb(10,128,100)",
  "rgb(20,128,100)",
];

const btn = document.getElementById("btn-click");

const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  const getrandomNumber = randomNumber();
  //   console.log(getrandomNumber);

  document.body.style.backgroundColor = colorChange[getrandomNumber * 0.01];
  color.textContent = colorChange[getrandomNumber];
});

const randomNumber = () => {
  return Math.floor(Math.random() * colorChange.length);
};

const myColor = [
  "red",
  "white",
  "yellow",
  "blue",
  "green",
  "purple",
  "grey",
  "pink",
];

const btn2 = document.querySelector("#btn-2");
const main = document.querySelector("main");

const change = () => {
  const num = randomNumber();
  confirm(`are you sure you want to change this to ${myColor[num]}?`);
  main.style.backgroundColor = myColor[num];
  if (main.style.backgroundColor == myColor[num]) {
    alert(`ayou have succesfully changed this to ${myColor[num]}?`);
  }
};

btn2.addEventListener("mouseover", change);

const div = document.querySelector(".navbar");
const p = document.createElement("p");

p.innerHTML = "for all the times";

div.append(p);

btn2.setAttribute("class", "btn");

const data = (e) => {
  const my = e.target.value;
  console.log(my);
};
const input = document.querySelector(".input");

input.addEventListener("keydown", data);
