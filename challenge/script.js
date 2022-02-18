var currChoice = -1;
var water = document.getElementById("water");
var fire = document.getElementById("fire");
var tree = document.getElementById("tree");
var player = document.getElementById("player-option");
var computer = document.getElementById("computer-option");
water.addEventListener("click", (e) => {
   e.preventDefault();
   player.innerHTML = `<img src="water.jpg" alt="Water" id="image"></img>`;
   currChoice = 0;
})
fire.addEventListener("click", (e) => {
   e.preventDefault();
   player.innerHTML = `<img src="fire.jpg" alt="Fire" id="image"></img>`;
   currChoice = 1;
})
tree.addEventListener("click", (e) => {
   e.preventDefault();
   player.innerHTML = `<img src="tree.png" style="background-color: white" alt="Tree" id="image"></img>`;
   currChoice = 2;
})
function lastWon () {
   document.getElementById("last-game").innerHTML = `--Won`;
}
function lastLose () {
   document.getElementById("last-game").innerHTML = `--Lost`;
}
function lastTie () {
   document.getElementById("last-game").innerHTML = `--Tie`;
}
var play = document.getElementById("play");
play.addEventListener("click", (e) => {
   e.preventDefault();
   if (currChoice === -1)
   {
      alert("Please choose any option before playing.");
   }
   else
   {
      document.getElementById("4th-last-game").innerHTML = document.getElementById("3rd-last-game").innerHTML;
      document.getElementById("3rd-last-game").innerHTML = document.getElementById("2nd-last-game").innerHTML;
      document.getElementById("2nd-last-game").innerHTML = document.getElementById("last-game").innerHTML;
      var gameRes = Math.floor(Math.random() * 30);
      console.log(gameRes);
      if (gameRes >= 0 && gameRes<=9)
      {  
         computer.innerHTML = `<img src="water.jpg" alt="Water" id="image"></img>
         <div id="smrt-comp">Smart Computer</div>`;
         if (currChoice === 0)
         {
            document.getElementById("this-game").innerHTML = `It's a tie !!`;
            lastTie();
         }
         else if (currChoice === 1)
         {
            document.getElementById("this-game").innerHTML = `You Lose !!`;
            lastLose();
         }
         else if (currChoice === 2)
         {
            document.getElementById("this-game").innerHTML = `You Won !!`;
            lastWon();
         }
      }
      else if (gameRes >= 10 && gameRes<=19)
      {  
         computer.innerHTML = `<img src="fire.jpg" alt="Fire" id="image"></img>
         <div id="smrt-comp">Smart Computer</div>`;
         if (currChoice === 0)
         {
            document.getElementById("this-game").innerHTML = `You Won !!`;
            lastWon();
         }
         else if (currChoice === 1)
         {
            document.getElementById("this-game").innerHTML = `It's a tie !!`;
            lastTie();
         }
         else if (currChoice === 2)
         {
            document.getElementById("this-game").innerHTML = `You Lose !!`;
            lastLose();
         }
      }
      else if (gameRes >= 20 && gameRes<=29)
      {  
         computer.innerHTML = `<img src="tree.png" style="background-color: white" alt="Tree" id="image"></img>
         <div id="smrt-comp">Smart Computer</div>`;
         if (currChoice === 0)
         {
            document.getElementById("this-game").innerHTML = `You Lose !!`;
            lastLose();
         }
         else if (currChoice === 1)
         {
            document.getElementById("this-game").innerHTML = `You Won !!`;
            lastWon();
         }
         else if (currChoice === 2)
         {
            document.getElementById("this-game").innerHTML = `It's a tie !!`;
            lastTie();
         }
      }
      
   }
})

/*
0 - Water
1 - Fire
2 - Tree
*/