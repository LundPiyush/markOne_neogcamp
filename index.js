var readlinesync = require("readline-sync");
var userName = readlinesync.question("What is your name? ");
console.log("Welcome "+userName+"! Let's check how well do you know Piyush!");

var score = 0;

var questionAnswerList = [{
  question : "How old am I? ",
  answer : "24"
},
{
  question : "Which company do I work in? ",
  answer : "Paytm"
},
{
  question : "Where do I live? ",
  answer : "Mumbai"
},
{
  question : "Which is my favorite drink? ",
  answer : "Coffee"
},
{
  question : "Which is my favorite sport? ",
  answer : "Cricket"
}]

for(var i=0; i<questionAnswerList.length; i++){

  var userAnswer = readlinesync.question(questionAnswerList[i].question);
  if(userAnswer.toUpperCase() === questionAnswerList[i].answer.toUpperCase()){
    score+=1;
    console.log("Correct Answer!\nCurrent Score : " + score);
    console.log("-------------------------");
  }
  else{
    console.log("Oops,Inorrect Answer!\nCurrent Score : " + score);
    console.log("-------------------------");
  }
}
var highestScorers = [{
  name : "Harvey",
  score : "5"
},
{
  name : "Mike",
  score : "4"
}];

console.log("Your Total Score : " + score);
console.log("You can also see the Highest Scorers : ");
for(i=0; i<highestScorers.length; i++)
  console.log(highestScorers[i].name + ":" + highestScorers[i].score );
console.log("If you have scored higher score than these, send screenshot I'll update");