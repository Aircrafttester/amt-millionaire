function shuffleAnswers(question) {
    const entries = Object.entries(question.answers);
    const correctLetter = question.correct;

    // Find the correct answer text
    const correctText = question.answers[correctLetter];

    // Shuffle the answer entries
    for (let i = entries.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [entries[i], entries[j]] = [entries[j], entries[i]];
    }

    // Rebuild answers object with new A/B/C/D order
    const newAnswers = {};
    const letters = ["A", "B", "C", "D"];

    entries.forEach((entry, index) => {
        newAnswers[letters[index]] = entry[1];
    });

    // Find new correct letter
    let newCorrect = "";
    for (const [letter, text] of Object.entries(newAnswers)) {
        if (text === correctText) {
            newCorrect = letter;
            break;
        }
    }

    return {
        ...question,
        answers: newAnswers,
        correct: newCorrect
    };
}
let currentIndex = 0;
let gameOver = false;
let used5050 = false;
let usedAudience = false;
let usedFriend = false;

const moneyLevels = [
    "$1,000,000",
    "$500,000",
    "$250,000",
    "$125,000",
    "$64,000",
    "$32,000",
    "$16,000",
    "$8,000",
    "$4,000",
    "$2,000",
    "$1,000",
    "$500",
    "$300",
    "$200",
    "$100"
];

// We’ll map question index to ladder from bottom up
function getLevelIndexFromQuestion(qIndex) {
    // 30 questions, 15 levels → every 2 questions is one level
    const level = Math.min(moneyLevels.length - 1, Math.floor(qIndex / 2));
    return level;
}

function initLadder() {
    const ladder = document.getElementById("money-ladder");
    ladder.innerHTML = "";
    for (let i = 0; i < moneyLevels.length; i++) {
        const li = document.createElement("li");
        const levelNumber = moneyLevels.length - i; // 15 at top, 1 at bottom
        li.dataset.levelIndex = i;
        li.innerHTML = `<span class="level">${levelNumber}</span><span>${moneyLevels[i]}</span>`;
        ladder.appendChild(li);
    }
    updateLadder();
}

function updateLadder() {
    const ladderItems = document.querySelectorAll("#money-ladder li");
    ladderItems.forEach(li => {
        li.classList.remove("current", "past");
    });

    const levelIndex = getLevelIndexFromQuestion(currentIndex);
    ladderItems.forEach(li => {
        const idx = parseInt(li.dataset.levelIndex, 10);
        if (idx > levelIndex) return;
        if (idx === levelIndex) {
            li.classList.add("current");
        } else {
            li.classList.add("past");
        }
    });
}

function loadQuestion() {
    const q = questions[currentIndex];
    const qText = document.getElementById("question-text");
    const status = document.getElementById("status");
    const lifelineResult = document.getElementById("lifeline-result");

    if (!q) {
        qText.textContent = "No more questions.";
        status.textContent = "You’ve completed the game!";
        endGame(true);
        return;
    }

    qText.textContent = q.question;
    document.getElementById("A").textContent = "A: " + q.answers.A;
    document.getElementById("B").textContent = "B: " + q.answers.B;
    document.getElementById("C").textContent = "C: " + q.answers.C;
    document.getElementById("D").textContent = "D: " + q.answers.D;

    document.querySelectorAll(".answer-btn").forEach(btn => {
        btn.classList.remove("correct", "wrong");
        btn.disabled = false;
        btn.style.visibility = "visible";
    });

    status.textContent = "";
    lifelineResult.textContent = "";
    gameOver = false;
    updateLadder();
}

function disableButtons() {
    document.querySelectorAll(".answer-btn").forEach(btn => btn.disabled = true);
}

function playSound(id) {
    const el = document.getElementById(id);
    if (el) {
        el.currentTime = 0;
        el.play().catch(() => {});
    }
}

function checkAnswer(letter) {
    if (gameOver) return;

    const q = questions[currentIndex];
    const btn = document.getElementById(letter);
    const status = document.getElementById("status");

    disableButtons();

    if (letter === q.correct) {
        btn.classList.add("correct");
        status.textContent = "Correct!";
        playSound("sound-correct");

        currentIndex++;

        setTimeout(() => {
            if (currentIndex < questions.length) {
                loadQuestion();
            } else {
                status.textContent = "You won the top prize!";
                playSound("sound-final");
                endGame(true);
            }
        }, 1200);
    } else {
        btn.classList.add("wrong");
        status.textContent = "Wrong answer. Game over.";
        playSound("sound-wrong");
        endGame(false);
    }
}

function endGame(won) {
    gameOver = true;
    disableButtons();
    document.getElementById("restart-btn").classList.remove("hidden");
}

function use5050() {
    if (used5050 || gameOver) return;
    used5050 = true;
    document.getElementById("lifeline-5050").disabled = true;

    const q = questions[currentIndex];
    const correct = q.correct;
    const letters = ["A", "B", "C", "D"];
    const wrongLetters = letters.filter(l => l !== correct);

    // Remove two random wrong answers
    shuffleArray(wrongLetters);
    const toHide = wrongLetters.slice(0, 2);

    toHide.forEach(letter => {
        const btn = document.getElementById(letter);
        btn.style.visibility = "hidden";
    });

    document.getElementById("lifeline-result").textContent = "50/50 used: two wrong answers removed.";
}

function useAudience() {
    if (usedAudience || gameOver) return;
    usedAudience = true;
    document.getElementById("lifeline-audience").disabled = true;

    const q = questions[currentIndex];
    const correct = q.correct;
    const letters = ["A", "B", "C", "D"];

    // Simple fake poll: correct gets 50–80%, others share the rest
    const correctPercent = randomInt(50, 80);
    let remaining = 100 - correctPercent;
    const others = letters.filter(l => l !== correct);
    const poll = {};
    others.forEach((l, idx) => {
        if (idx === others.length - 1) {
            poll[l] = remaining;
        } else {
            const p = randomInt(0, remaining);
            poll[l] = p;
            remaining -= p;
        }
    });
    poll[correct] = correctPercent;

    const msg = `Audience poll → A: ${poll.A || 0}%  B: ${poll.B || 0}%  C: ${poll.C || 0}%  D: ${poll.D || 0}%`;
    document.getElementById("lifeline-result").textContent = msg;
}

function useFriend() {
    if (usedFriend || gameOver) return;
    usedFriend = true;
    document.getElementById("lifeline-friend").disabled = true;

    const q = questions[currentIndex];
    const correct = q.correct;
    const letters = ["A", "B", "C", "D"];

    // Friend is right 70% of the time
    const friendIsRight = Math.random() < 0.7;
    let suggestion;
    if (friendIsRight) {
        suggestion = correct;
    } else {
        const wrong = letters.filter(l => l !== correct);
        suggestion = wrong[randomInt(0, wrong.length - 1)];
    }

    const msg = `Your friend says: "I think the answer is ${suggestion}."`;
    document.getElementById("lifeline-result").textContent = msg;
}

function restartGame() {
    currentIndex = 0;
    gameOver = false;
    used5050 = false;
    usedAudience = false;
    usedFriend = false;

    document.getElementById("lifeline-5050").disabled = false;
    document.getElementById("lifeline-audience").disabled = false;
    document.getElementById("lifeline-friend").disabled = false;

    document.querySelectorAll(".answer-btn").forEach(btn => {
        btn.style.visibility = "visible";
    });

    document.getElementById("restart-btn").classList.add("hidden");
    document.getElementById("status").textContent = "";
    document.getElementById("lifeline-result").textContent = "";

    initLadder();
    loadQuestion();
}

// Helpers

function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Event wiring

document.querySelectorAll(".answer-btn").forEach(btn => {
    btn.addEventListener("click", () => checkAnswer(btn.dataset.letter));
});

document.getElementById("lifeline-5050").addEventListener("click", use5050);
document.getElementById("lifeline-audience").addEventListener("click", useAudience);
document.getElementById("lifeline-friend").addEventListener("click", useFriend);
document.getElementById("restart-btn").addEventListener("click", restartGame);

// Init
initLadder();
loadQuestion();
