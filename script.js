document.addEventListener('DOMContentLoaded', () => {
    const questions = [
        { question: "Як називається валюта жителів?", answers: ["Діаманти", "Смарагди", "Золото", "Залізо"], correct: 1 },
        { question: "Який блок вибухає при активації?", answers: ["ТНТ", "Обсидіан", "Камінь", "Земля"], correct: 0 },
        { question: "Хто такий Ендермен?", answers: ["Ворожий моб", "Тварина", "Житель", "Бос"], correct: 0 },
        { question: "Що потрібно для створення порталу в Незер?", answers: ["Вода", "Обсидіан", "Пісок", "Скло"], correct: 1 },
        { question: "Як звати головного персонажа?", answers: ["Алекс", "Стів", "Геробрін", "Нотч"], correct: 1 },
        { question: "Який матеріал найміцніший?", answers: ["Алмаз", "Незерит", "Золото", "Залізо"], correct: 1 },
        { question: "Чого боїться кріпер?", answers: ["Сонця", "Кішок", "Води", "Снігу"], correct: 1 },
        { question: "Як видобути обсидіан?", answers: ["Рукою", "Дерев'яною кіркою", "Алмазною кіркою", "Лопатою"], correct: 2 },
        { question: "Де живе дракон Краю?", answers: ["У Незері", "В Краї", "В океані", "В селі"], correct: 1 },
        { question: "Який предмет дає нічний зір?", answers: ["Зілля", "Факел", "Шолом", "Золоте яблуко"], correct: 0 },
        { question: "Що випадає з Гаста?", answers: ["Порох", "Сльоза Гаста", "Золото", "Шкіра"], correct: 1 },
        { question: "Чим годувати вовків для розмноження?", answers: ["Пшениця", "Сира свинина", "Будь-яке м'ясо", "Кістки"], correct: 2 },
        { question: "Хто з'являється, якщо в жителя влучить блискавка?", answers: ["Відьма", "Зомбі-житель", "Іладжер", "Скелет"], correct: 0 },
        { question: "Як зібрати мед без шкоди для бджіл?", answers: ["Ножиці", "Пляшка + вогонь", "Відро", "Кірка"], correct: 1 },
        { question: "Який блок неможливо зруйнувати в виживанні?", answers: ["Бедрок", "Обсидіан", "Камінь", "Алмазна руда"], correct: 0 },
        { question: "На скільки блоків може стрибнути гравець?", answers: ["1 блок", "2 блоки", "3 блоки", "0.5 блока"], correct: 0 },
        { question: "Що робить зілля невидимості?", answers: ["Проходить крізь стіни", "Робить невидимим", "Робить невразливим", "Дозволяє літати"], correct: 1 },
        { question: "З чого будується основа для Маяка?", answers: ["Дерево", "Метали/мінерали", "Земля", "Скло"], correct: 1 },
        { question: "Як називається рідний світ Ендерменів?", answers: ["Звичайний", "Незер", "Край", "Підземелля"], correct: 2 },
        { question: "Хто перетворюється на 'Скелета-вершника'?", answers: ["Кінь", "Корова", "Свиня", "Вівця"], correct: 0 }
    ];

    const startBtn = document.querySelector('#start-btn');
    const restartBtn = document.querySelector('#restart-btn');
    const quizScreen = document.querySelector('#quiz-screen');
    const startScreen = document.querySelector('#start-screen');
    const resultScreen = document.querySelector('#result-screen');
    const answersContainer = document.querySelector('#answers-container');
    const questionText = document.querySelector('#question-text');
    const scoreDisplay = document.querySelector('#score-display');
    const timerDisplay = document.querySelector('#timer');
    const resultText = document.querySelector('#result-text');

    let questionIndex = 0, score = 0, interval;

    function startGame() {
        startScreen.classList.add('hide');
        resultScreen.classList.add('hide');
        quizScreen.classList.remove('hide');
        questionIndex = 0; score = 0;
        scoreDisplay.textContent = `Бали: ${score}`;
        showQuestion();
    }

    function showQuestion() {
        clearInterval(interval);
        answersContainer.innerHTML = '';
        const q = questions[questionIndex];
        questionText.textContent = q.question;
        q.answers.forEach((ans, i) => {
            const btn = document.createElement('button');
            btn.textContent = ans;
            btn.className = 'answer-btn';
            btn.onclick = () => checkAnswer(btn, i);
            answersContainer.appendChild(btn);
        });
        startTimer();
    }

    function checkAnswer(btn, idx) {
        clearInterval(interval);
        const allBtns = answersContainer.querySelectorAll('.answer-btn');
        allBtns.forEach(b => b.disabled = true);
        
        if (idx === questions[questionIndex].correct) {
            btn.classList.add('correct');
            score++;
            scoreDisplay.textContent = `Бали: ${score}`;
        } else {
            btn.classList.add('wrong');
            allBtns[questions[questionIndex].correct].classList.add('correct');
        }
        setTimeout(() => {
            questionIndex++;
            if (questionIndex < questions.length) showQuestion();
            else showResult();
        }, 1000);
    }

    function showResult() {
        quizScreen.classList.add('hide');
        resultScreen.classList.remove('hide');
        resultText.textContent = `Твій результат: ${score} з ${questions.length}`;
    }                

    function startTimer() {
        let t = 15;
        timerDisplay.textContent = `Час: ${t}`;
        interval = setInterval(() => {
            t--;
            timerDisplay.textContent = `Час: ${t}`;
            if (t <= 0) { 
                clearInterval(interval); 
                questionIndex++; 
                if(questionIndex < questions.length) showQuestion(); 
                else showResult(); 
            }
        }, 1000);
    }

    startBtn.onclick = startGame;
    restartBtn.onclick = startGame;
});
