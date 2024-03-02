function checkAnswers() {
    let correctCount = 0;
    let incorrectCount = 0;

    function checkAnswer(questionName, correctAnswer) {
        const userInput = document.querySelector(`input[name=${questionName}]`).value.toLowerCase();

        if (userInput === correctAnswer.toLowerCase()) {
            correctCount++;
        } else {
            incorrectCount++;
        }
    }

    checkAnswer('q1', 'round robin');
    checkAnswer('q2', 'srtn');
    checkAnswer('q3', 'planificación a corto plazo');
    checkAnswer('q4', 'criterios de planificación de hilos');

    const resultMessage = `Respuestas correctas: ${correctCount}\nRespuestas incorrectas: ${incorrectCount}`;
    alert(resultMessage);
}
