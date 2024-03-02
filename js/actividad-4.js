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

    checkAnswer('q1', 'proceso');
    checkAnswer('q2', 'condición de carrera');
    checkAnswer('q3', 'secciones o regiones críticas');
    checkAnswer('q4', 'semáforo');

    const resultMessage = `Respuestas correctas: ${correctCount}\nRespuestas incorrectas: ${incorrectCount}`;
    alert(resultMessage);
}
