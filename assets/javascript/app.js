

//variables delcaration

var time = 15;
var correctAns = 0;
var IncorrectAns=0;
var current=0;





$(document).ready(function(){
var questions =[{
    q: "Which House Does not Belong?",
    ans:["Gryfindor", "Slytherin", "Hufflepuff","Eagleclaw"],
corrrect: 4,
},{
    q: "Who is the headmaster at Hogwarts?" ,    
    ans2: ["Dusseldorf", "Gandalf", "Dumbledore","Hodor"],
    correct: 3,
},{
q: "Who is the main villain in the Series?",
ans:["Draco Malfoy", "Snape", "Voldemort","Stalin"],
correct: 3,
},{
    q:"What was Harry Potter's owl named?",
   ans: ["Hedwig", "Melvin", "Fluffy", "Owl"],
correct: 1,
}];

console.log(questions[0]);


function renderQuestion(){
var quiz= questions[current].q;

};


})
