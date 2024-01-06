function checkAnswers() {
    checkAnswer('q1', 'b');
    checkAnswer('q2', 'a');
    checkAnswer('q3', 'a');
    checkAnswer('q4', 'b');
    checkAnswer('q5', 'a');
    checkAnswer('q6', 'a');
    checkAnswer('q7', 'a');
    checkAnswer('q8', 'a');
    checkAnswer('q9', 'a');
    checkAnswer('q10', 'b');
    checkAnswer('q11', 'a');
    checkAnswer('q12', 'a');
    checkAnswer('q13', 'b');
    checkAnswer('q14', 'a');
    checkAnswer('q15', 'b');
    checkAnswer('q16', 'b');
    checkAnswer('q17', 'b');
    checkAnswer('q18', 'b');
    checkAnswer('q19', 'a');
    checkAnswer('q20', '');
}

function checkAnswer(questionName, correctAnswer) {
    const selectedAnswer = document.querySelector(`input[name=${questionName}]:checked`);
    const feedbackElement = document.getElementById(`feedback-${questionName}`);

    if (selectedAnswer) {
        if (selectedAnswer.value === correctAnswer) {
            feedbackElement.textContent = '¡Respuesta correcta!';
            feedbackElement.style.color = 'green';
        } else {
            feedbackElement.textContent = 'Respuesta incorrecta.';
            feedbackElement.style.color = 'red';
        }
    } else {
        feedbackElement.textContent = 'Por favor, selecciona una respuesta.';
        feedbackElement.style.color = 'blue';
    }
}
