const questions =[  
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
  {
    question: "Which sorting algorithm is the fastest on average for large datasets?",
    answers: [
      { text: "Bubble Sort", correct: false },
      { text: "Insertion Sort", correct: false },
      { text: "Quick Sort", correct: true },
      { text: "Selection Sort", correct: false },
    ],
    explanation: "Quick Sort is usually the fastest due to its average-case efficiency."
  },
  {
    question: "Which data structure uses LIFO?",
    answers: [
      { text: "Stack", correct: true },
      { text: "Queue", correct: false },
      { text: "Graph", correct: false },
      { text: "Array", correct: false },
    ],
    explanation: "Stack stands for Last In First Out."
  },
  {
    question: "What is the best case complexity of linear search?",
    answers: [
      { text: "O(n)", correct: false },
      { text: "O(log n)", correct: false },
      { text: "O(1)", correct: true },
      { text: "O(n^2)", correct: false },
    ],
    explanation: "Best case is when the element is at the first position."
  },
  {
    question: "What is the worst case time complexity of Merge Sort?",
    answers: [
      { text: "O(n^2)", correct: false },
      { text: "O(n)", correct: false },
      { text: "O(log n)", correct: false },
      { text: "O(n log n)", correct: true },
    ],
    explanation: "Merge Sort always has a time complexity of O(n log n)."
  },
  {
    question: "Which algorithm is used to find the shortest path in a graph?",
    answers: [
      { text: "DFS", correct: false },
      { text: "BFS", correct: false },
      { text: "Dijkstra", correct: true },
      { text: "Prim", correct: false },
    ],
    explanation: "Dijkstra's algorithm finds the shortest path from a source node."
  },
  {
    question: "Which of the following is not a linear data structure?",
    answers: [
      { text: "Array", correct: false },
      { text: "Queue", correct: false },
      { text: "Tree", correct: true },
      { text: "Stack", correct: false },
    ],
    explanation: "Tree is a non-linear hierarchical data structure."
  },
  {
    question: "What is the maximum number of children in a binary tree node?",
    answers: [
      { text: "1", correct: false },
      { text: "2", correct: true },
      { text: "3", correct: false },
      { text: "4", correct: false },
    ],
    explanation: "Binary trees have at most two children per node."
  },
  {
    question: "Which traversal technique is used in DFS?",
    answers: [
      { text: "Breadth-First", correct: false },
      { text: "In-order", correct: false },
      { text: "Depth-First", correct: true },
      { text: "Level-order", correct: false },
    ],
    explanation: "DFS explores as far as possible along a branch before backtracking."
  },
      { text: "Level-order", correct: false },
    ],
    explanation: "Pre-order traversal gives prefix notation of expression trees."
  },
  {
    question: "What is the minimum number of edges in a tree with n nodes?",
    answers: [
      { text: "n-1", correct: true },
      { text: "n", correct: false },
      { text: "n+1", correct: false },
      { text: "n^2", correct: false },
    ],
    explanation: "A tree with n nodes always has n-1 edges."
  },
  {
    question: "Which of these is a self-balancing binary search tree?",
    answers: [
      { text: "BST", correct: false },
      { text: "AVL Tree", correct: true },
      { text: "Heap", correct: false },
      { text: "BFS Tree", correct: false },
    ],
    explanation: "AVL Tree automatically balances itself after insertion/deletion."
  },
  {
    question: "Which algorithm is used for topological sorting?",
    answers: [
      { text: "DFS", correct: true },
      { text: "BFS", correct: false },
      { text: "Dijkstra", correct: false },
      { text: "Prim", correct: false },
    ],
    explanation: "DFS-based approach helps in topological sorting of a DAG."
  },
  {
    question: "Which of the following data structures is non-linear?",
    answers: [
      { text: "Array", correct: false },
      { text: "Stack", correct: false },
      { text: "Queue", correct: false },
      { text: "Tree", correct: true },
    ],
    explanation: "Tree is a hierarchical (non-linear) data structure."
  },
  {
    question: "Which algorithm is used to find Minimum Spanning Tree?",
    answers: [
      { text: "Kruskal's", correct: true },
      { text: "Dijkstra's", correct: false },
      { text: "Floyd-Warshall", correct: false },
      { text: "DFS", correct: false },
    ],
    explanation: "Kruskal's algorithm builds MST using greedy approach."
  },
  {
    question: "Which hashing technique handles collision using linked lists?",
    answers: [
      { text: "Linear Probing", correct: false },
      { text: "Chaining", correct: true },
      { text: "Quadratic Probing", correct: false },
      { text: "Double Hashing", correct: false },
    ],
    explanation: "Chaining uses linked lists to handle collisions at hash buckets."
  },
  {
    question: "Which data structure is used in undo operations?",
    answers: [
      { text: "Queue", correct: false },
      { text: "Stack", correct: true },
      { text: "Heap", correct: false },
      { text: "Array", correct: false },
    ],
    explanation: "Stack is used to reverse previous operations like undo."
  },
  {
    question: "Which tree has all leaf nodes at the same level?",
    answers: [
      { text: "Binary Search Tree", correct: false },
      { text: "Complete Tree", correct: false },
      { text: "Full Binary Tree", correct: false },
      { text: "Perfect Binary Tree", correct: true },
    ],
    explanation: "Perfect Binary Tree has all internal nodes with two children and all leaves at same level."
  }
{
    question: "Which algorithm finds shortest paths from a single source in weighted graphs?",
    answers: [
      { text: "Prim's Algorithm", correct: false },
      { text: "Kruskal's Algorithm", correct: false },
      { text: "Dijkstra's Algorithm", correct: true },
      { text: "Floyd-Warshall Algorithm", correct: false },
    ],
    explanation: "Dijkstra’s Algorithm is used to find the shortest paths from a single source to all vertices in a graph with non-negative weights."
  },
  {
    question: "Which traversal is used in BFS of a graph?",
    answers: [
      { text: "Pre-order", correct: false },
      { text: "In-order", correct: false },
      { text: "Level-order", correct: true },
      { text: "Post-order", correct: false },
    ],
    explanation: "Level-order traversal is equivalent to BFS in trees and graphs."
  },
  {
    question: "What is the time complexity of inserting an element in a heap?",
    answers: [
      { text: "O(1)", correct: false },
      { text: "O(log n)", correct: true },
      { text: "O(n)", correct: false },
      { text: "O(n log n)", correct: false },
    ],
    explanation: "Insertion in a binary heap takes O(log n) due to heapify-up operation."
  },
  {
    question: "What is the auxiliary space complexity of Merge Sort?",
    answers: [
      { text: "O(1)", correct: false },
      { text: "O(log n)", correct: false },
      { text: "O(n)", correct: true },
      { text: "O(n^2)", correct: false },
    ],
    explanation: "Merge sort requires additional O(n) space for merging."
  },
  {
    question: "Which of these algorithms is NOT greedy?",
    answers: [
      { text: "Prim’s Algorithm", correct: false },
      { text: "Dijkstra’s Algorithm", correct: false },
      { text: "Knapsack (0/1)", correct: true },
      { text: "Kruskal’s Algorithm", correct: false },
    ],
    explanation: "0/1 Knapsack is solved using dynamic programming, not a greedy approach."
  },
  {
    question: "Which traversal gives post-fix expression in a binary expression tree?",
    answers: [
      { text: "Pre-order", correct: false },
      { text: "In-order", correct: false },
      { text: "Post-order", correct: true },
      { text: "Level-order", correct: false },
    ],
    explanation: "Post-order traversal yields the post-fix (Reverse Polish) expression."
  }
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
