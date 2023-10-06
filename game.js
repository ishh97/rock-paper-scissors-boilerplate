const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const you = document.getElementById('you');
const comp = document.getElementById('comp');
const icons = document.getElementById('icons');
const pHand = document.getElementById('pHand');
const logo = document.querySelectorAll(".logo")
const choices = [
    './assets/rock-hand.png', 
    './assets/paper-hand.png',
    './assets/scissors-hand.png'
];

const score = document.getElementById('score');
const ScorePl1 = document.getElementById('pl1');
// console.log(ScorePl1);
const ScorePl2 = document.getElementById('pl2');


var gameOverText = document.getElementById('game-over'); 
var playAgain = document.getElementById('play-again');

var compscore =0;
var yourscore =0;
var compChoice=""
function compChoices () {
    operator = Math.round(Math.floor(Math.random()*3));
    if(operator===0){
        compChoice="rock"
    }else if (operator === 1) {
        compChoice = "paper"
    }
    else if (operator === 2) {
        compChoice = "scissors"
    } 
    comp.innerHTML=`<img src="${choices[operator]}" alt="">`
}
operator = Math.round(Math.floor(Math.random()*3));
comp.innerHTML=`<img src="${choices[operator]}" alt="">`

var pChoice =""
logo.forEach((logo) => {
    logo.onclick=(i)=> {
        if(i.target.matches("img")) {
            console.log(i.target.id)
            pHand.src= "./assets/"+(i.target.id)+"-hand.png";
            if(i.target.id === "rock") {
                pChoice="rock";
            }
            else if (i.target.id === "paper") {
                pChoice="paper";
            }
            else if (i.target.id === "scissors") {
                pChoice= "scissors";
            }
            
        }
        compChoices()
        if (pChoice==="paper"){
            // console.log(pChoice)
            if (compChoice==="rock"){
                yourscore++;
                console.log(yourscore)
                ScorePl1.innerText=yourscore;
            }
            else if (compChoice === "scissors") {
                compscore++
                console.log(compscore)
                ScorePl2.innerText=compscore
            }
    
        } else if (pChoice==="rock"){
            // console.log(pChoice)
            if (compChoice === "scissors"){
                yourscore++
                console.log(yourscore)
                ScorePl1.innerText=yourscore;
            }
            else if (compChoice === "paper") {
                compscore++
                console.log(compscore)
                ScorePl2.innerText=compscore
            }
        } else if (pChoice==="scissors") {
            // console.log(pChoice)
            if (compChoice === "paper") {
                yourscore++
                console.log(yourscore)
                ScorePl1.innerText=yourscore;
            }
            else if (compChoice==="rock") {
                compscore++
                console.log(compscore)
                ScorePl2.innerText=compscore
            }
        }
        if (yourscore === 5 || compscore === 5) {
            var winner = yourscore === 5 ? 'You won the game!' : 'Computer won the game!';
            
            gameOverText.style.visibility= "visible" ;
            rock.style.visibility = 'hidden';
            paper.style.visibility = 'hidden';
            scissors.style.visibility = 'hidden';
        
            gameOverText.innerHTML = winner;
            console.log(winner);
            playAgain.style.visibility = 'visible';
            playAgain.onclick = function () {
                location.reload();
            };
            console.log("gfdju");
        }
        
    
    }
})
    



  

