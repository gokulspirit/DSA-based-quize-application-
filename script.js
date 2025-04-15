let currentIndex = 0;
let score = 0;
let timer;
let timeLeft = 15;

function startQuiz() {
  document.getElementById("start-screen").style.display = "none";
  document.getElementById("quiz-box").style.display = "block";
  loadQuestion();
  startTimer();
}

function loadQuestion() {
  resetState();
  const current = questions[currentIndex];
  document.getElementById("question").textContent = current.question;
  document.getElementById("question-count").textContent = `Question ${currentIndex + 1} of ${questions.length}`;
  const optionsDiv = document.getElementById("options");

  current.options.forEach(option => {
    const btn = document.createElement("div");
    btn.className = "option";
    btn.textContent = option;
    btn.onclick = () => selectAnswer(btn, current.answer);
    optionsDiv.appendChild(btn);
  });
}

function resetState() {
  document.getElementById("options").innerHTML = "";
  document.getElementById("next-btn").style.display = "none";
  resetTimer();
}

function selectAnswer(selected, correct) {
  const options = document.querySelectorAll(".option");
  options.forEach(opt => opt.style.pointerEvents = "none");

  if (selected.textContent === correct) {
    selected.classList.add("correct");
    score++;
  } else {
    selected.classList.add("wrong");
    options.forEach(opt => {
      if (opt.textContent === correct) opt.classList.add("correct");
    });
  }

  document.getElementById("next-btn").style.display = "block";
  clearInterval(timer);
}

function nextQuestion() {
  currentIndex++;
  if (currentIndex < questions.length) {
    loadQuestion();
    startTimer();
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById("quiz-box").style.display = "none";
  document.getElementById("result-box").style.display = "block";
  document.getElementById("score").textContent = `You scored ${score} out of ${questions.length}`;
}

function startTimer() {
  timeLeft = 15;
  document.getElementById("time").textContent = timeLeft;
  timer = setInterval(() => {
    timeLeft--;
    document.getElementById("time").textContent = timeLeft;
    if (timeLeft === 0) {
      clearInterval(timer);
      nextQuestion();
    }
  }, 1000);
}

function resetTimer() {
  clearInterval(timer);
  timeLeft = 15;
}
