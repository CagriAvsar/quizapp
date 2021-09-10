let questions = [{
        "question": "Wer hat HTML erfunden?",
        "answer_1": "Christiano Ronaldo",
        "answer_2": "Mike Thyson",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "2 Pac",
        "right_answer": 3
    },
    {
        "question": "Was wird in dieser Funktion ausgeführt?",
        "image": "imgs/for.png",
        "answer_1": "Eine for-Schleife",
        "answer_2": "Eine if-Abfrage",
        "answer_3": "Eine Lösch-Funktion",
        "answer_4": "Diese Funktion ist ungültig",
        "right_answer": 1
    },
    {
        "question": "Wähle die richtige Schreibweise einer Funktion",
        "answer_1": "funtion{}",
        "answer_2": "function()",
        "answer_3": "function[]",
        "answer_4": "function${}",
        "right_answer": 2
    },
    {
        "question": "Weise die Variable richtig an die Parameter zu?",
        "answer_1": "function()i",
        "answer_2": "function{i}",
        "answer_3": "function_i()",
        "answer_4": "function(i)",
        "right_answer": 4
    },
    {
        "question": "Wie schreibt man bei JavaScript einen string?",
        "answer_1": "$string$",
        "answer_2": "sting",
        "answer_3": "`string`",
        "answer_4": "string&&",
        "right_answer": 3
    },


];

let currentQuestion = 0; // Globale Variable mit dem Wert = 0;
let rightQuestions = 0;
let Audio_Correct = new Audio('audio/correct.mp3');
let Audio_Wrong = new Audio('audio/wrong.mp3');




function init() {
    document.getElementById('maxquestpages').innerHTML = questions.length;
    showQuestion();
}



function showQuestion() {

    if (gameIsOver()) { // is currentQuestion bigger or equal the max questions?
        schowEndScreen(); // if its true, then go showEndScreen function;
    } else { // is currentQuestion not bigger or equal the all questions?
        updateNextQuestion(); //Then go updateNextQuestion function;   
        updateProgressBar(); // and updateProgressBar function;
    }
}


function gameIsOver() {
    return currentQuestion >= questions.length; // currentQuestion bigger or equal the array; 
}


function schowEndScreen() {
    document.getElementById('mainCardContainer').classList.add('d-none');
    document.getElementById('seccondCardContainer').classList.remove('d-none');

    document.getElementById('maxScore').innerHTML = questions.length; // Am Ende der Fragen steht die max-Anzahl der Fragen;
    document.getElementById('minScore').innerHTML = rightQuestions;
}


function updateNextQuestion() {

    // Erstellen eine Variable und diese hat den Wert von dem "JSON ARRAY QUESTIONS" die 0. STELLE, die wir ebnenfalls
    // mit der Variable "CURRENTQUESTION = 0;"" ermittelt haben. 
    let question = questions[currentQuestion];
    // Aktuelle Seitenanzahl je nach auf welche Seite, anzeigen;
    document.getElementById('questpage').innerHTML = currentQuestion + 1; // 0. Stelle + immer 1 drauf:
    document.getElementById('minScore').innerHTML = currentQuestion + 1;
    document.getElementById('amountOfQuestion').innerHTML = currentQuestion + 1;

    // Holen die jeweiligen id`s aus den HTML Tags und fügen die jeweiligen Stellen aus dem 
    // Array "questions" und "answers" hinzu.
    document.getElementById('questionbox').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];

     if(question[`image`]) {
        document.getElementById('forImg').classList.remove('d-none');
        document.getElementById('forImg').src = question[`image`];
        document.getElementById('headerImg').classList.add('d-none');
    }else {
        document.getElementById('forImg').src = ``;
        document.getElementById('forImg').classList.add('d-none');
    }
}

function updateProgressBar() {

    let percent = (currentQuestion + 1) / questions.length; // Variable percent hat den Wert= aktuelle Seitenanzahl
    // durch die max Anzahl der Fragen (z.B 1/5, 2/5, 3/5 usw);
    percent = percent * 100; // Variable "percent" hat jetzt den Wert= aktuelle Seitenzahl durch 
    // die max Anzahl der Fragen MAL 100 (z.B 1/5*100, 2/5*100, 3/5*100 usw);
    document.getElementById('progressNumber').innerHTML = `${percent} %`; // Holen die id aus dem progress
    // div container und setzen das Ergebnis der Variable "percent" ein;
    document.getElementById('progressNumber').style = `width: ${percent}%`;
}


function answers(selection) {
    // Erstellen wieder die Variable 0. Stelle aus dem JSON-Array;
    let question = questions[currentQuestion];
    // Geben der Variable "SELECTEDANSWER" den Wert = Der letzte Buchstabe aus 
    // answer_1, answer_2, answer_3, answer_4, Also entweder 1 ,2, 3 oder 4;
    let selectedAnswer = selection.slice(-1);
    // Die Variable "idOfRightanswer" hat den Wert = an der jeweiligen Stelle im JSON der Variable 
    // right_answer 1, 2, 3 oder 4;
    let idOfRightanswer = `answer_${question['right_answer']}`;
    // Wenn der letzte Buchstabe aus der Variable "SELECTION" = die letzte Stelle aus dem JSON 
    // "right-answer" hat, dann Grün , ansonsten Rot;
    if (rightAnswerSelected(selectedAnswer)) {
        document.getElementById(selection).classList.add("bg-success");
        Audio_Correct.play(); // Wenn richtige Antwort dann die Variable "Audio_Correct" abspielen;
        rightQuestions++;
    } else {
        Audio_Wrong.play(); // Wenn falsche Antwort dann die Variable "Audio_Wrong" abspielen;
        document.getElementById(selection).classList.add("bg-danger");
        document.getElementById(idOfRightanswer).classList.add("bg-success");
    }
    document.getElementById('next-btn').disabled = false; // button wird anklickbar gemacht;
}




function rightAnswerSelected(selectedAnswer) {
    let question = questions[currentQuestion];
    return selectedAnswer == question['right_answer'];
}


function nextQuestion() {
    currentQuestion++; // die Variable mit dem Wert= 0 wird um 1 erhöht und somit nexte Frage abgefragt;
    document.getElementById('next-btn').disabled = true; // button wird wieder unanklickbar;

    document.getElementById('forImg').src = questions[currentQuestion[`for.png`]];
    resetAnswerButtons(); // die Farben der Antworten werden entfernt;
    showQuestion(); // Die nexte Frage wird angezeigt;      
}


function resetAnswerButtons() {

    document.getElementById('answer_1').classList.remove('bg-danger');
    document.getElementById('answer_1').classList.remove('bg-success');
    document.getElementById('answer_2').classList.remove('bg-danger');
    document.getElementById('answer_2').classList.remove('bg-success');
    document.getElementById('answer_3').classList.remove('bg-danger');
    document.getElementById('answer_3').classList.remove('bg-success');
    document.getElementById('answer_4').classList.remove('bg-danger');
    document.getElementById('answer_4').classList.remove('bg-success');
}


function restartGame() {
    currentQuestion = 0; // aktuelle Frage wieder auf 0 setzen also Erneut starten;
    rightQuestions = 0; // richtige Fragen wieder auf 0 setzen also Erneut starten;

    init();
    document.getElementById('mainCardContainer').classList.remove('d-none'); // endscreen ausblenden;
    document.getElementById('seccondCardContainer').classList.add('d-none');
}