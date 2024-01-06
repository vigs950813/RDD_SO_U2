function checkAnswers() {
    checkAnswer('q1', 'a');
    checkAnswer('q2', 'c');
    checkAnswer('q3', 'b');
    checkAnswer('q4', 'c');
    checkAnswer('q5', 'c');
    checkAnswer('q6', 'b');
    checkAnswer('q7', 'c');
    checkAnswer('q8', 'c');
    checkAnswer('q9', 'c');
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
