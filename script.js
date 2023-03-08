const quizData=[
    {
     question: "How old is Florin?",
     a:"10",
     b:"17",
     c:"26",
     d:"110",
     correct:"c",

    },
    {
       question:"What is the most used  programming language in 2019?",
    a:"java",
    b:"c",
    c:"python",
    d:"javascript",
    correct:"d",
    },
    {
       question:"Who is the President of U.S.?",
       a:"Florin pop",
       b:"Donald Trump",
       c:"Ivan Saldano",
       d:"MIhai Andrei",
       correct:"b", 
    },
    {
        question:"What does HTML stand for?",
        a:"hypertext markup language",
        b:"cascading style sheet",
        c:"jason object notation",
        d:"helicopters terminals motorboats lamborginis",
        correct:"a",
    },
    {
        question:"What year was javascript launched",
        a:"1996",
        b:"1995",
        c:"2018",
        d:"none of the above",
        correct:"d",
    },
    {
      question:"how many colours are there in Indian flag?",
      a:"3",
      b:"4",
      c:"5",
      d:"2",
      correct:"b",
  }
  


  ];
const quiz=document.getElementById("quiz");
const answerEls=document.querySelectorAll(".answer");
const questionEl=document.getElementById("question");
const a_text=document.getElementById("a_text");
const b_text=document.getElementById("b_text");
const c_text=document.getElementById("c_text");
const d_text=document.getElementById("d_text");
const submitBtn=document.getElementById("submit");

let currentQuiz=0;
let score=0;

loadQuiz();

function loadQuiz()
{
    deselectAnswers();

    const currentQuizData=quizData[currentQuiz];
    questionEl.innerText=currentQuizData.question;
   
    a_text.innerText=currentQuizData.a;
    b_text.innerText=currentQuizData.b;
    c_text.innerText=currentQuizData.c;
    d_text.innerText=currentQuizData.d;

    

}

function getSelected()
{
    let answer = undefined;
    
    answerEls.forEach((answerEl)=>
      {
        if(answerEl.checked)
        {
           answer=answerEl.id;
        }
      });
      return answer;
}

function deselectAnswers()
{
  answerEls.forEach((answerEl)=>
  {
    answerEl.checked = false;
  });  
}


submitBtn.addEventListener("click",() =>
{
    const answer = getSelected();
    
    if(answer)
    {
        if(answer === quizData[currentQuiz].correct)
          {
            score++;
          }
            currentQuiz++;
    
        if(currentQuiz < quizData.length)
           {
             loadQuiz();
           }
        else
           {
              quiz.innerHTML = `<h2> You answered correctly at ${score}/${quizData.length}questions.</h2>
                                 <button onclick="location.reload()">Reload</button>`;
           }
    }

 
});

























