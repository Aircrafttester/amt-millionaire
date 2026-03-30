let current = 0;

function loadQuestion() {
    const q = questions[current];
    document.getElementById("question-text").textContent = q.question;

    document.getElementById("A").textContent = "A: " + q.answers.A;
    document.getElementById("B").textContent = "B: " + q.answers.B;
    document.getElementById("C").textContent = "C: " + q.answers.C;
    document.getElementById("D").textContent = "D: " + q.answers.D;

    document.querySelectorAll(".answer-btn").forEach(btn => {
        btn.classList.remove("correct", "wrong");
        btn.disabled = false;
    });
}

function checkAnswer(letter) {
    const q = questions[current];
    const btn = document.getElementById(letter);

    if (letter === q.correct) {
        btn.classList.add("correct");
        document.getElementById("status").textContent = "Correct!";
        current++;

        setTimeout(() => {
            if (current < questions.length) {
                loadQuestion();
            } else {
                document.getElementById("status").textContent = "You won!";
            }
        }, 1000);

 } else {
    btn.classList.add("wrong");
    document.getElementById("status").textContent = "Wrong answer. Game over.";
    disableButtons();   // ← Add this line
}

}

function disableButtons() {
    document.querySelectorAll(".answer-btn").forEach(btn => btn.disabled = true);
}

document.querySelectorAll(".answer-btn").forEach(btn => {
    btn.addEventListener("click", () => checkAnswer(btn.id));
});

loadQuestion();
