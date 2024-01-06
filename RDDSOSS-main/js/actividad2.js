function checkAnswers() {
    checkAnswer('q1', 'c');
    checkAnswer('q2', 'd');
    checkAnswer('q3', 'd');
    checkAnswer('q4', 'd');
    checkAnswer('q5', 'c');
    checkAnswer('q6', 'b');
    checkAnswer('q7', 'd');
    checkAnswer('q8', 'b');
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

$(function() {
    $("#sortable-options").sortable();
    $("#sortable-options").disableSelection();
});

function checkSorting() {
    const options = document.querySelectorAll('#sortable-options li');
    const feedbackElement = document.getElementById('feedback-q6');
    const correctOrder = ['a', 'b', 'f', 'e', 'd','c'];

    let userOrder = [];
    options.forEach(option => {
        userOrder.push(option.getAttribute('data-value'));
    });

    let isCorrect = true;
    for (let i = 0; i < correctOrder.length; i++) {
        if (correctOrder[i] !== userOrder[i]) {
            isCorrect = false;
            break;
        }
    }

    if (isCorrect) {
        feedbackElement.textContent = '¡Respuesta correcta!';
        feedbackElement.style.color = 'green';
    } else {
        feedbackElement.textContent = 'Respuesta incorrecta.';
        feedbackElement.style.color = 'red';
    }
}