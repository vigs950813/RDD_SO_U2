const quizData = [
    {
        question: "1.- La capa de intérprete de mandatos (instrucciones) o Shell es aquella que se encarga de: Forma de una interfaz de programación o API y donde el sistema operativo puede disponer de una máquina virtual.",
        a: "Verdadero",
        b: "Falso",
        correct: "b",
    },

    {
        question: "2.- La capa de gestión de recursos kernel o núcleo que es la que se encarga de: Dialogar en forma interactiva con el usuario, donde el Shell recibe las instrucciones u órdenes del usuario, los interpreta y si son instrucciones entendibles las ejecuta.",
        a: "Falso",
        b: "Verdadero",
        correct: "a",
    },

    {
        question: "3.- ¿Cuáles son los modos de operación de un sistema operativo?.",
        a: "Usuario sin protección, protegido y real",
        b: "Ejecución, manejador de archivos y gestión de memoria",
        correct: "a",
    },

    {
        question: "4.- La capa de servicio o llamadas al sistema ofrece a los programas ss la que se encarga de gestionar los recursos de hardware en el sistema.",
        a: "Verdadero",
        b: "Falso",
        correct: "b",
    },

    {
        question: "5.- Los recursos que son manejados por el sistema operativo son: Físicos (Procesador, memoria principal y los periféricos) y Lógicos (Archivos y puertos de comunicación).",
        a: "Verdadero",
        b: "Falso",
        correct: "a",
    },

    {
        question: "6.- El sistema operativo debe de garantizar la protección de la información y confidencialización del usuario para que nadie interfiera con el trabajo de este.",
        a: "Verdadero",
        b: "Falso",
        correct: "a",
    },

    {
        question: "7.- Cuales son las funciones de los contadores en el sistema operativo.",
        a: "Política de prioridades, identificación de módulos, reconocimiento de interrupción",
        b: "Incremento de valor en tabla de procesos, detección de pulsos, manejo de instrucciones.",
        correct: "a",
    },

    {
        question: "8.- La memoria permite medir la cantidad de recursos que durante su ejecución utiliza cada programa (monitoreo de aplicaciones).",
        a: "Falso",
        b: "Verdadero",
        correct: "a",
    },

    {
        question: "9.- El sistema operativo ofrece a los programas un conjunto de servicios o conocidos como llamadas al sistema y manipulación de archivos.",
        a: "Falso",
        b: "Verdadero",
        correct: "a",
    },

    {
        question: "10.- El procesador se encarga de realizar la ejecución de un programa, en donde su función principal es la de crear, ejecutar y destruir procesos.",
        a: "Verdadero",
        b: "Falso",
        correct: "b",
    },

    {
        question: "11.- Los métodos que utiliza el sistema operativo para administrar las operaciones de E/S son.",
        a: "Interrupciones y polling",
        b: "Detección de módulos E/s, redirecciones y control de flujo",
        correct: "a",
    },

    {
        question: "12.- Los sistemas operativos monousuarios son aquellos que están conformados por máquina como conjunto procesadores que comparten el acceso a una memoria principal común.",
        a: "Verdadero",
        b: "Falso",
        correct: "b",
    },

    {
        question: "13.- Los sistemas operativos embebidos son útiles en aplicaciones de mediana a gran escala con una mayor cantidad de tareas a planificar.",
        a: "Verdadero",
        b: "Falso",
        correct: "a",
    },


    {
        question: "14.- Todos los sistemas operativos de tiempo real son embebidos.",
        a: "Verdadero",
        b: "Falso",
        correct: "b",
    },

    {
        question: "15.- Un sistema operativo de tiempo real es un programa que presenta: Planifica la ejecución de tareas teniendo en cuenta restricciones de tiempo y administra los recursos del sistema.",
        a: "Verdadero",
        b: "Falso",
        correct: "a",
    },


    {
        question: "16.- Las peticiones se procesan de forma estructurada en las siguientes capas: Manejadores de interrupción y manejadores de dispositivos o drivers.",
        a: "Verdadero",
        b: "Falso",
        correct: "a",
    },

    {
        question: "17.- Los archivos ofrecen un nivel de abstracción mayor que el de las órdenes de E/S, permitiendo operaciones tales como creación, borrado, renombrado, apertura, escritura y lectura de archivos.",
        a: "Verdadero",
        b: "Falso",
        correct: "a",
    },

    {
        question: "18.- Los archivos ofrecen un nivel de abstracción mayor que el de las órdenes de E/S, permitiendo operaciones tales como creación, borrado, renombrado, apertura, escritura y lectura de archivos.",
        a: "Verdadero",
        b: "Falso",
        correct: "a",
    },

    {
        question: "19.- Detección y tratamiento de errores se encarga de tratar todas las condiciones de error que detecte el hardware: Errores en las operaciones de E/S y Errores de paridad en los accesos a memoria o en los buses.",
        a: "Verdadero",
        b: "Falso",
        correct: "a",
    },


    {
        question: "20.- Las cuatro funciones del kernel pueden derivarse de sus componentes.",
        a: "Gestión de procesos, memoria, E/S y sistema de archivos.",
        b: "Administración, comunicación, controlar y acceder a dispositivos de E/S",
        correct: "a",
    },



    
   
];
//const nombre=document.getElementById('nombreAlumno')
const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
//const c_text = document.getElementById('c_text')
//const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score = 0
loadQuiz()
function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    //c_text.innerText = currentQuizData.c
    //d_text.innerText = currentQuizData.d
}
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }
       currentQuiz++
       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>Haz respondido ${score}/${quizData.length} preguntas correctamente</h2>
           <a  href="../index.html">Regresar</a>
           `
           //<button onclick="location.reload()" href="../index.html">Regresar</button>
       }
    }
})