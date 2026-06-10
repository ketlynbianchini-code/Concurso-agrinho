function mostrarDica() {
    const dicas = [
        "O plantio direto evita a erosão do solo.",
        "A rotação de culturas mantém os nutrientes da terra.",
        "O uso de drones ajuda a economizar água e defensivos.",
        "Preservar as APPs garante água para as próximas gerações."
    ];
    
    // Sorteia uma dica do array
    const indice = Math.floor(Math.random() * dicas.length);
    document.getElementById("resultado").innerText = dicas[indice];
}
const quizData = [
    {
        question: "Qual organela celular é responsável pela respiração celular (Biologia)?",
        image: "https://images.unsplash.com/photo-1530026405186-ed1ea0ac7a63?w=500", // Exemplo de imagem da internet
        options: ["Complexo de Golgi", "Mitocôndria", "Ribossomo", "Cloroplasto"],
        correct: 1
    },
    {
        question: "De acordo com a Primeira Lei de Newton, um corpo em repouso tende a permanecer em repouso a menos que uma força externa atue sobre ele. Qual o nome desse princípio (Física)?",
        image: "", // Deixe em branco se a pergunta não precisar de imagem
        options: ["Ação e Reação", "Gravidade", "Inércia", "Aceleração"],
        correct: 2
    },
    {
        question: "Quem é o autor do poema 'I-Juca-Pirama', marco do Romantismo no Brasil (Literatura)?",
        image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500",
        options: ["Machado de Assis", "Gonçalves Dias", "Castro Alves", "Alvares de Azevedo"],
        correct: 1
    }
];

const questionEl = document.getElementById("question");
const optionsContainer = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const resultEl = document.getElementById("result");
const quizImage = document.getElementById("quiz-image");

let currentQuiz = 0;
let score = 0;

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];

    // Controla a exibição da imagem
    if (currentQuizData.image) {
        quizImage.src = currentQuizData.image;
        quizImage.style.display = "block";
    } else {
        quizImage.style.display = "none";
    }

    questionEl.innerText = currentQuizData.question;
    optionsContainer.innerHTML = "";

    currentQuizData.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.innerText = option;
        button.classList.add("option-btn");
        button.addEventListener("click", () => selectAnswer(index, button));
        optionsContainer.appendChild(button);
    });

    nextBtn.style.display = "none";
}

function deselectAnswers() {
    nextBtn.style.display = "none";
}

function selectAnswer(selectedIndex, clickedButton) {
    const currentQuizData = quizData[currentQuiz];
    const buttons = optionsContainer.querySelectorAll(".option-btn");

    // Desabilita os botões após a escolha
    buttons.forEach(btn => btn.disabled = true);

    if (selectedIndex === currentQuizData.correct) {
        clickedButton.style.backgroundColor = "#8ced8c"; // Verde para correto
        score++;
    } else {
        clickedButton.style.backgroundColor = "#ff9e9e"; // Vermelho para errado
        buttons[currentQuizData.correct].style.backgroundColor = "#8ced8c"; // Mostra o correto
    }

    nextBtn.style.display = "block";
}

nextBtn.addEventListener("click", () => {
    currentQuiz++;

    if (currentQuiz < quizData.length) {
        loadQuiz();
    } else {
        document.getElementById("quiz").style.display = "none";
        nextBtn.style.display = "none";
        resultEl.innerText = `Você acertou ${score} de ${quizData.length} perguntas!`;
        resultEl.style.display = "block";
    }
});

// Inicializa o Quiz
loadQuiz();
