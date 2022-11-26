const quizData = [
    {
        question: 'Which is the Capital of the Republic of Turkey?',
        a: 'İstanbul',
        b: 'Bursa',
        c: 'Ankara',
        d: 'İzmir',
        correct: 'c'
    }, {
        question: 'What is the most used programming language in 2022?',
        a: 'Python',
        b: 'JavaScript',
        c: 'C++',
        d: 'Go',
        correct: 'a'
    },{
        question: 'How many planets in the solar system?',
        a: '7',
        b: '8',
        c: '6',
        d: '9',
        correct: 'b'
    },{
        question: 'What does HTML stand for?',
        a: 'HyperText Markup Language',
        b: 'Cascading Style Sheets',
        c: 'Helicopters Terminals Motorboats Lamborginis',
        d: 'Application Programming Interface',
        correct: 'a'
    },{
        question: 'What year was JavaScript launched?',
        a: '2015',
        b: '1975',
        c: '2022',
        d: '1995',
        correct: 'd'
    }
];

const quiz = document.getElementById('quiz');
const answersEls = document.querySelectorAll('.answer');
const questionEl =document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;


}

function getSelected() {
    

    let answer = undefined;

    answersEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;

}

function deselectAnswers() {
    answersEls.forEach((answerEl) => {
       answerEl.checked = false;
    });
}

submitBtn.addEventListener('click', ()=> {
    // check to see the answer
    const answer = getSelected();
    
    if (answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if(currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
            <button onclick="location.reload()">Try Again</button>`;
        }

    }


});