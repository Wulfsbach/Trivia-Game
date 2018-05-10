

//variables delcaration

var time = 15;
var correctAns = 0;
var IncorrectAns=0;
var current=0; // holds the current question





$(document).ready(function(){








var questions =[
    
    {
    question: "Which House Does not Belong?",
    answer:{
        
        a:"Gryfindor",
        b: "Slytherin", 
        c:"Hufflepuff",
        d:"Eagleclaw",
    },
correct: "d",
},
{
    question: "Who is the headmaster at Hogwarts?" ,    
    answer: { 
        a:"Dusseldorf",
        b: "Gandalf", 
        c:"Dumbledore",
        d:"Hodor",
    
},
correct: "c",
},
{
question: "Who is the main villain in the Series?",
answer:{
    a:"Draco Malfoy",
    b: "Snape",
    c: "Voldemort",
    d:"Stalin",
correct: 3,
},
correct: "c",
},
{
question:"What was Harry Potter's owl named?",
answer: {
    a:"Hedwig",
    b: "Melvin",
    c: "Fluffy",
    d: "Owl"
},

correct: "a",
},
];




function render(QuestionSelector){
$("#Trivia").text(questions[QuestionSelector].question);
$("#answers").html("<label><input type='radio' name='questions' id='A'><span>" + questions[QuestionSelector].answer.a + "</span></label> <br>");
$("#answers").append("<label><input type='radio' name='questions' id='B'><span>" + questions[QuestionSelector].answer.b + "</span></label> <br>");
$("#answers").append("<label><input type='radio' name='questions id='C'><span>" + questions[QuestionSelector].answer.c + "</span></label><br>");
$("#answers").append("<label><input type='radio' name='questions'id='D'><span>" + questions[QuestionSelector].answer.d + "</span></label><br>");
console.log(questions[QuestionSelector].answer.a);

}


function next(){
    $('#submit').on('click',function (){
        console.log(current);
        current++;
        console.log(current);
        render(current);


        // if( current === 3) {
        //     alert("GAME IS OVER!");
        }
    )};

console.log(current);

next();

});
