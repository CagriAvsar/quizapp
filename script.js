let questions = [{
        "question": "Wer hat HTML erfunden?",
        "answer_1": "Christiano Ronaldo",
        "answer_2": "Mike Thyson",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "2 Pac",
        "right_answer": 3
    },
    {
        "question_1": "Was ist das?",
        "answer_1": "Christiano Ronaldo",
        "answer_2": "Mike Thyson",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "2 Pac",
        "right_answer": 3
    },
    {
        "question_1": "Wo ist das?",
        "answer_1": "Christiano Ronaldo",
        "answer_2": "Mike Thyson",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "2 Pac",
        "right_answer": 3
    },
    {
        "question_1": "Warum machen wir?",
        "answer_1": "Christiano Ronaldo",
        "answer_2": "Mike Thyson",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "2 Pac",
        "right_answer": 3
    },
    {
        "question_1": "Alles was geht?",
        "answer_1": "Christiano Ronaldo",
        "answer_2": "Mike Thyson",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "2 Pac",
        "right_answer": 3
    }

];

let currentQuestion = 0;


function init() {
    document.getElementById('questpages').innerHTML = questions.length;
    document.getElementById('questionnumber').innerHTML = questions.length;

    showQuestion();
}



function showQuestion() {

    // Erstellen eine Variable und diese hat den Wert von dem ARRAY QUESTIONS die 0. STELLE, die wir ebnenfalls
    // mit der Variable CURRENTQUESTION = 0; ermittelt haben. 
    let question = questions[currentQuestion];

    // Holen die jeweiligen id`s aus den HTML Tags und fügen die jeweiligen Stellen aus dem 
    // Array Questions hinzu.
    document.getElementById('questionbox').innerHTML = question['question'];
    document.getElementById('answer1').innerHTML = question['answer_1'];
    document.getElementById('answer2').innerHTML = question['answer_2'];
    document.getElementById('answer3').innerHTML = question['answer_3'];
    document.getElementById('answer4').innerHTML = question['answer_4'];
}


function answers(selectedanswer) {
    document.getElementById('answer1').className('background-color: red');
}