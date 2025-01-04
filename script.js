

let placeholdersum = 0;
const userChoice = (choosed) => {
 
  

  const chosed = document.getElementById('choosed');
  chosed.innerText = "you choose    : " + choosed;
  var choices = ['rock','paper','scissor']
  var computerChoice = choices[Math.floor(Math.random()*choices.length)];
  const compch = document.getElementById('choosedbycomp');
    compch.innerText = "Computer chose : " + computerChoice;
  if (choosed === computerChoice) {
    const tie = document.getElementById('winner');
    tie.innerText = "It's a tie";
  } else if (
    (choosed === 'rock' && computerChoice === 'scissor') ||
    (choosed === 'paper' && computerChoice === 'rock') ||
    (choosed === 'scissor' && computerChoice === 'paper')
  ) {
    var youwin = document.getElementById('winner');
    youwin.innerText = "you win"
    const displayofuser = document.getElementById('userin');
  displayofuser.placeholder++;
  placeholdersum += 1;
  
  } else {
    var compwin = document.getElementById('winner');
    compwin.innerText = "Computer win"
    const displayofcomp = document.getElementById('compin');
  displayofcomp.placeholder++;
  placeholdersum += 1;
  }
/*if( youwin === 4){
  let displayofuser = document.getElementById('userin');
  displayofuser.placeholder = 0;
  let displayofcomp = document.getElementById('compin');
  displayofcomp.placeholder = 0;
} 
else if( compwin === 4){
  let displayofuser = document.getElementById('userin');
  displayofuser.placeholder = 0;
  let displayofcomp = document.getElementById('compin');
  displayofcomp.placeholder = 0;
  
} 
else if( placeholdersum === 5){
  let displayofuser = document.getElementById('userin');
  displayofuser.placeholder = 0;
  let displayofcomp = document.getElementById('compin');
  displayofcomp.placeholder = 0;
  
}*/


};



  

