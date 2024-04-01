const CONTAINER_MAX_WIDTH = 960;

const container = document.querySelector('.container');
const btn = document.querySelector('button');
defaultGrid();

btn.addEventListener('click', () => {
  let userInput = +prompt("How many side do you want?");
  if (userInput === null) {
    defaultGrid(color);
  } else {
    if (userInput > 100) {
      userInput = +prompt("Choose another number no more than 100");
    } else if (isNaN(userInput)) {
      userInput = +prompt("Please enter a digital number:");
    }
    removeDefalutGrid();
    createDiv(userInput);
  }
});  

function createDiv(numberPerSide) {
  for (let i = 1; i <= numberPerSide * numberPerSide; i++) {
    const squareDiv = document.createElement('div');
    squareDiv.className = 'box';
    squareDiv.style.width = squareDiv.style.height = CONTAINER_MAX_WIDTH / numberPerSide + 'px';
    container.appendChild(squareDiv);   
  }
  renderDiv();
}

let opacity = 0; //Note: opacity must be kept out of the renderDiv() or it remains the default value and never increment/reset.

function renderDiv() {
  const divs = document.querySelectorAll('.box');
  for (let i = 0; i < divs.length; i++) {
    divs[i].addEventListener('mouseover', (e) => {
      e.target.style.backgroundColor = randomColor(); //Call randomColor() if you want to generate colorful piexls

    //The code below implements a progressive darkening effect where each interaction darkens the square by 10%.
     /*
     if (opacity <= 1) {
        opacity += 0.1;
        if (opacity > 1) {
          opacity = 0;
        }
        e.target.style.backgroundColor = `rgba(0, 0, 0, ${opacity})`;
        //console.log(opacity);
      }
      */
    });
  }
}

function defaultGrid () {
  createDiv(64);
}

function removeDefalutGrid() {
  const divs = document.querySelectorAll('.box');
  for (i= 0; i < divs.length; i++) {
    divs[i].remove();
  } 
}

function randomColor() {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  let rgbColor = `rgb(${r}, ${g}, ${b})`;
  return rgbColor;
}