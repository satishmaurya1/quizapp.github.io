const chalk = require('chalk');
 
 console.log(chalk.yellow('Hello and  welcome to the quiz'));

var readlineSync = require('readline-sync');

var score=0
var username = readlineSync.question("what is your name?");
console.log("welcome", username)
var username = readlineSync.question("do you know satish? if you know type 'yes' to start the quiz?");

if(username==="yes"){

function quiz(question , answer){
      var userAns = readlineSync.question(question);
      console.log("you entered ",userAns)
      if(answer===userAns){
        console.log("you are right")
        score=score+2
        console.log(chalk.green("your score increased by 2 : and now it becomes"),score)
      }
      else{
        console.log("you are wrong")
        score=score-1
        console.log(chalk.red("your score is decreased by 1 : and now it becomes"),score)
      }
}


var quescontainer=[
  {ques:"where satish live?", ans:"varanasi"},
  {ques:"satish native language?", ans:"hindi"},
  {ques:"satish nationality?",ans:"indian"},
  {ques:"satish programming language?", ans:"javascript"},
  {ques:"satish best javascript framework?",ans:"react"},
  {ques:"satish programming teacher?",ans:"tanay pratap"}

]

for( var i=0;i<quescontainer.length;i++){
  quiz(quescontainer[i].ques,quescontainer[i].ans)
}



console.log(chalk.green("your total score",score))

var highscorer = readlineSync.question("do you want to see highest scorer list? type 'yes' ");

if(highscorer==="yes"){
  var highscorecondidates=[
    {name:"sailesh",score:"11"},
    {name:"saurabh",score:"9"},
    {name:'aman',score:"8"},
    {name:"rahul",score:"7"}
  ]
  var yourscore=[
    {name:"you",yourscore: score}
  ]


  if(yourscore[0].yourscore>highscorecondidates[0].score){
    highscorecondidates[0].name="you"
    highscorecondidates[0].score=yourscore[0].yourscore
   }

  else if(yourscore[0].yourscore>highscorecondidates[1].score){
    highscorecondidates[1].name="you"
    highscorecondidates[1].score=yourscore[0].yourscore
   }

  else if(yourscore[0].yourscore>highscorecondidates[2].score){
    highscorecondidates[2].name="you"
    highscorecondidates[2].score=yourscore[0].yourscore
   }

   else if(yourscore[0].yourscore>highscorecondidates[3].score){
    highscorecondidates[3].name="you"
    highscorecondidates[3].score=yourscore[0].yourscore
   }
 
  for(let j=0;j<highscorecondidates.length;j++){
    console.log("name:",highscorecondidates[j].name)
    console.log("score:",highscorecondidates[j].score)
  }

}else{
  console.log("------------------------")
}





}else{

  console.log("you dont know satish so you cant play this game because this game is about satish so learn about satish before playing this quiz game")
}

