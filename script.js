const quizDB = [
  {
    question: "Q1: What is the Full Form of HTML?",
    a: "Hello To My Land",
    b: "Hey Text Markup Language",
    c: "Hyper Text Markup Language",
    d: "HyperText Maker Language",
    ans: "ans3"
  },
  {
    question: "Q2: What is the Full Form of CSS?",
    a: "Cat Style System",
    b: "Cascading Style Sheet",
    c: "Create Style Sheet",
    d: "Copy Style System",
    ans: "ans2"
  },
  {
    question: "Q3: What is the Full Form of HTTP?",
    a: "Hello To Top Product",
    b: "Hey Text To Ping",
    c: "Hyper Text To Programming",
    d: "HyperText Transfer Protocol",
    ans: "ans4"
  },
  {
    question: "Q4: What is the Full Form of JS?",
    a: "JavaScript",
    b: "JavaScheme",
    c: "JavaShake",
    d: "JumpSuit",
    ans: "ans1"
  }
];


const question = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const submit = document.querySelector("#submit");

const answers = document.querySelectorAll(".answer");
const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score = 0;

const loadQuestion = () => {
  
  question.innerText = quizDB[questionCount].question;
  option1.innerText = quizDB[questionCount].a;
  option2.innerText = quizDB[questionCount].b;
  option3.innerText = quizDB[questionCount].c;
  option4.innerText = quizDB[questionCount].d;

}

loadQuestion();

const getCheckAnswer = () => {
  let answer;
  answers.forEach( (curAnsElem) => {
    if(curAnsElem.checked){
      answer = curAnsElem.id;
    }
  });
  return answer;
}

deselectAll = () => {
  answers.forEach((curAnsElem) => {
    curAnsElem.checked = false
  });
}

submit.addEventListener('click', () => {
  const checkedAnswer = getCheckAnswer();
  
  if(checkedAnswer == quizDB[questionCount].ans){
    score++;
  };

  questionCount++;
  deselectAll();

  if(questionCount < quizDB.length){
    loadQuestion();
  }
  else{
    showScore.innerHTML = `
      <h3> You Scored ${score}/${quizDB.length} </h3>
      <button class="btn" onclick="location.reload()"> Play Again </button>
    `;
    showScore.classList.remove('scoreArea');
  }
});