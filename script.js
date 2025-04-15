const questions = [
  {
    question: "What is the time complexity of binary search?",
    answers: [
      { text: "O(n)", correct: false },
      { text: "O(log n)", correct: true },
      { text: "O(n log n)", correct: false },
      { text: "O(1)", correct: false },
    ],
    explanation: "Binary search divides the array in half each step, hence O(log n)."
  },
  {
    question: "Which data structure uses FIFO order?",
    answers: [
      { text: "Stack", correct: false },
      { text: "Queue", correct: true },
      { text: "Tree", correct: false },
      { text: "Graph", correct: false },
    ],
    explanation: "Queue follows First In First Out order."
  },
];

let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft = 15;
let user = null;

const questionEl = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextBtn = document.getElementById("next-btn");
const restartBtn = document.getElementById("restart-btn");
const timerEl = document.getElementById("time");
const explanationEl = document.getElementById("explanation");

document.getElementById("darkToggle").addEventListener("change", () => {
  document.body.classList.toggle("dark");
});

nextBtn.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
});

restartBtn.addEventListener("click", () => {
  score = 0;
  currentQuestionIndex = 0;
  restartBtn.style.display = "none";
  showQuestion();
});

function showQuestion() {
  resetState();
  startTimer();

  const currentQuestion = questions[currentQuestionIndex];
  questionEl.innerText = currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
    const btn = document.createElement("button");
    btn.innerText = answer.text;
    btn.classList.add("btn");
    if (answer.correct) btn.dataset.correct = answer.correct;
    btn.addEventListener("click", selectAnswer);
    answerButtons.appendChild(btn);
  });
}

function resetState() {
  clearInterval(timer);
  nextBtn.style.display = "none";
  explanationEl.style.display = "none";
  answerButtons.innerHTML = "";
  timeLeft = 15;
  timerEl.innerText = timeLeft;
}

function startTimer() {
  timer = setInterval(() => {
    timeLeft--;
    timerEl.innerText = timeLeft;
    if (timeLeft === 0) {
      clearInterval(timer);
      autoSelectAnswer();
    }
  }, 1000);
}

function autoSelectAnswer() {
  const correctBtn = Array.from(answerButtons.children).find(btn => btn.dataset.correct === "true");
  if (correctBtn) correctBtn.classList.add("correct");

  Array.from(answerButtons.children).forEach(btn => btn.disabled = true);
  explanationEl.innerText = questions[currentQuestionIndex].explanation;
  explanationEl.style.display = "block";
  nextBtn.style.display = "block";
}

function selectAnswer(e) {
  clearInterval(timer);
  const selected = e.target;
  const isCorrect = selected.dataset.correct === "true";
  if (isCorrect) {
    selected.classList.add("correct");
    score++;
  } else {
    selected.classList.add("wrong");
  }

  Array.from(answerButtons.children).forEach(button => {
    if (button.dataset.correct === "true") button.classList.add("correct");
    button.disabled = true;
  });

  explanationEl.innerText = questions[currentQuestionIndex].explanation;
  explanationEl.style.display = "block";
  nextBtn.style.display = "block";
}

function showScore() {
  clearInterval(timer);
  questionEl.innerText = `You scored ${score} out of ${questions.length}!`;
  answerButtons.innerHTML = "";
  nextBtn.style.display = "none";
  restartBtn.style.display = "block";
  explanationEl.style.display = "none";

  const scoreData = {
    user: user?.displayName || "Anonymous",
    email: user?.email || "unknown",
    score: score,
    date: new Date().toLocaleString(),
  };

  if (user) {
    db.collection("quizScores").add(scoreData).then(() => {
      console.log("Score saved to Firestore.");
    });
  } else {
    localStorage.setItem("quizScore", JSON.stringify(scoreData));
    console.log("Score saved to localStorage.");
  }
}

// Firebase Authentication
document.getElementById("sign-in-btn").addEventListener("click", () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider).then(result => {
    user = result.user;
    document.getElementById("user-info").innerText = `Signed in as: ${user.displayName}`;
    document.getElementById("sign-in-btn").style.display = "none";
    document.getElementById("sign-out-btn").style.display = "inline";
  });
});

document.getElementById("sign-out-btn").addEventListener("click", () => {
  auth.signOut().then(() => {
    user = null;
    document.getElementById("user-info").innerText = "";
    document.getElementById("sign-in-btn").style.display = "inline";
    document.getElementById("sign-out-btn").style.display = "none";
  });
});

window.addEventListener("load", () => {
  showQuestion();
});
