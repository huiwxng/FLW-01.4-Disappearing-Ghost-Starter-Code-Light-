//html element and selector variables
let p = document.createElement("p");
let h1 = document.querySelector(".header");
let input = document.querySelector(".input");
let userInput;

//declare variable for ghost image
let ghost = document.querySelector("img");

//declare variables for all of the buttons
let hideBtn = document.querySelector(".hide-button");
let showBtn = document.querySelector(".show-button");
let updateBtn = document.querySelector(".update-img-button");
let nameBtn = document.querySelector(".name-button");
let msgBtn = document.querySelector(".message-button");

//create an onclick event for the Hide Me button
hideBtn.onclick = (function (){  
    ghost.style.visibility = "hidden";
});

//create an onclick event for the Show Me button
showBtn.onclick = (function (){  
    ghost.style.visibility = "visible";
});

//create an onclick event for the Update Img button
updateBtn.onclick = (function (){
    console.log(ghost.getAttribute("src"));
  if (ghost.getAttribute("src") == "images/pngfind.com-snapchat-logo-png-transparent-522479.png") {
    ghost.setAttribute("src", "images/update_ghost.gif");
  }
  else {
    ghost.setAttribute("src", "images/pngfind.com-snapchat-logo-png-transparent-522479.png");
  }
});

//create an onclick event for the Send Message button
//update the userInput variable by saving the value of the input
//use the insertAdjacentHTML method to append the userInput in a <p> tag
msgBtn.onclick = (function (){
  userInput = input.value;
  let messages = document.querySelector(".message");
  let message = document.createElement("p");
  messages.appendChild(message);
  message.insertAdjacentHTML("beforeend", userInput)
})

//create an onclick event for the Name Me button
//update the userInput variable by saving the value of the input
//use the innerHTML method to update the h1 tag
nameBtn.onclick = (function (){
  userInput = input.value;
  h1.innerHTML = "My name is " + userInput;
})