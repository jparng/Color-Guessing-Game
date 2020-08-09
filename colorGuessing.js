let numSquares = 6;
let colors = [];
let pickedColor;

let squares = document.querySelectorAll(".square");
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.querySelector("#result");
let h1 = document.querySelector("h1");
let resetBtn = document.querySelector("#reset");
let modeBtn = document.querySelectorAll(".mode");

init();

function init(){
    setupModeButtons();
    setupSquares();
    reset();
}

function setupModeButtons(){
    for(let i = 0; i < modeBtn.length; i++){
        modeBtn[i].addEventListener("click", function(){
            modeBtn[0].classList.remove("selected");
            modeBtn[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquares = 3: numSquares = 6; //ternary operator version.
            // if(this.textContent == "Easy"){
            //     numSquares = 3;
            // }else{
            //     numSquares = 6;
            // }
            reset();
            //Make the squares show up
            //pick new colors
            //pick a new pickedColor
            //update page to reflect changes
        });
    }
}

function setupSquares(){
    for(let i = 0; i < squares.length; i++){
        //Add click listeners to squares.
        squares[i].addEventListener("click", function(){
            //grabs color of clicked square
        var clickedColor = this.style.backgroundColor;
            //compare color to pickedColor.
        if(clickedColor === pickedColor){
            messageDisplay.textContent = "Correct";
            resetBtn.textContent = "Play Again?";
            changeColors(clickedColor);
            h1.style.backgroundColor = pickedColor;
        }else{
            this.style.backgroundColor ="#232323";
            messageDisplay.textContent = "Try Again";
            }
        });
    }
}

function reset(){
     //generate all new colors
     colors = generaterandomColors(numSquares);
     //pick new random color from array
     pickedColor = pickColor();
     //change colorDisplay to match picked color;
     colorDisplay.textContent = pickedColor;
     resetBtn.textContent = "New Colors";
     //change colors of squares
     for(let i = 0; i < squares.length; i++){
         if(colors[i]){
             squares[i].style.display = "block";
            squares[i].style.background = colors[i];
         }else{
             squares[i].style.display = "none";
         }
     }
     h1.style.backgroundColor = "steelblue";
     messageDisplay.textContent = "";
}

resetBtn.addEventListener("click", function(){
    reset();
});

function changeColors(color){
    //loop through squares
    for(let i = 0; i < squares.length; i++){
         //change to the correct color square
        squares[i].style.backgroundColor = color;
    }
   
}

function pickColor(){
  let random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generaterandomColors(num){
    //make array
    let arr = [];
    //add num random colors to array
    for(let i = 0; i < num; i++){
    //get random color and push into the array
    arr.push(randomColor());
    }
    //return array
    return arr;
}

function randomColor(){
    //pick "red" from 0-255
    var r = Math.floor(Math.random() * 256)
    //pick "green" from 0-255
    var g = Math.floor(Math.random() * 256);
    //pick "blue" from 0-255
    var b = Math.floor(Math.random() * 256);
   return "rgb(" + r  + ", " + g + ", " + b + ")";
}