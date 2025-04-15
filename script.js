const questions = [{ question: "What is the time complexity of binary search?", options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"], answer: "O(log n)" }, { question: "Which data structure uses FIFO principle?", options: ["Stack", "Queue", "Tree", "Graph"], answer: "Queue" }, { question: "Which data structure uses LIFO principle?", options: ["Queue", "Array", "Stack", "Linked List"], answer: "Stack" }, { question: "What is the worst-case time complexity of Quick Sort?", options: ["O(n^2)", "O(n log n)", "O(n)", "O(log n)"], answer: "O(n^2)" }, { question: "Which of these is not a linear data structure?", options: ["Stack", "Queue", "Array", "Tree"], answer: "Tree" }, { question: "Which algorithm is used for finding the shortest path in a graph?", options: ["DFS", "BFS", "Dijkstra's", "Kruskal's"], answer: "Dijkstra's" }, { question: "Which sorting algorithm is best for nearly sorted data?", options: ["Quick Sort", "Bubble Sort", "Insertion Sort", "Merge Sort"], answer: "Insertion Sort" }, { question: "What is the auxiliary space complexity of Merge Sort?", options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"], answer: "O(n)" }, { question: "Which data structure is used for recursion?", options: ["Queue", "Heap", "Stack", "Tree"], answer: "Stack" }, { question: "What does DFS stand for?", options: ["Data Find Search", "Depth Full Search", "Depth First Search", "Data First Search"], answer: "Depth First Search" },{ question: "What is the time complexity of linear search?", options: ["O(log n)", "O(n)", "O(n log n)", "O(1)"], answer: "O(n)" }, { question: "Which data structure is used in BFS?", options: ["Stack", "Queue", "Tree", "Graph"], answer: "Queue" }, { question: "What is the height of a balanced binary tree with n nodes?", options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"], answer: "O(log n)" }, { question: "Which traversal gives nodes in sorted order in BST?", options: ["Preorder", "Postorder", "Inorder", "Level Order"], answer: "Inorder" }, { question: "What is the purpose of a hash function in hashing?", options: ["To compress data", "To encrypt data", "To locate data", "To store data"], answer: "To locate data" }, { question: "What is the maximum number of children in a binary tree node?", options: ["2", "3", "4", "5"], answer: "2" }, { question: "Which algorithm is used to detect cycles in a graph?", options: ["DFS", "BFS", "Dijkstra's", "Prim's"], answer: "DFS" }, { question: "Which tree is used in heap sort?", options: ["Binary Search Tree", "AVL Tree", "Heap Tree", "Red-Black Tree"], answer: "Heap Tree" }, { question: "What is the time complexity of inserting in a max-heap?", options: ["O(log n)", "O(n)", "O(1)", "O(n log n)"], answer: "O(log n)" }, { question: "Which traversal visits left, root, right?", options: ["Inorder", "Preorder", "Postorder", "Level Order"], answer: "Inorder" } ];

let currentQuestionIndex = 0;
let score = 0;

const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const nextBtn = document.getElementById('next-btn');
const scoreBox = document.getElementById('score-box');
const scoreText = document.getElementById('score');

function loadQuestion() {
  resetOptions();
  const current = questions[currentQuestionIndex];
  questionEl.textContent = `${currentQuestionIndex + 1}. ${current.question}`;
  
  current.options.forEach(option => {
    const li = document.createElement('li');
    li.textContent = option;
    li.onclick = () => selectOption(li, current.answer);
    optionsEl.appendChild(li);
  });
}

function resetOptions() {
  optionsEl.innerHTML = '';
  nextBtn.disabled = true;
  nextBtn.textContent = "Next";
}

function selectOption(selectedLi, correctAnswer) {
  const allOptions = document.querySelectorAll('#options li');
  allOptions.forEach(li => {
    li.classList.remove('selected');
    li.style.pointerEvents = 'none';
    if (li.textContent === correctAnswer) {
      li.classList.add('selected');
    }
  });

  selectedLi.classList.add('selected');

  if (selectedLi.textContent === correctAnswer) {
    score++;
  }

  nextBtn.disabled = false;
}

nextBtn.addEventListener('click', () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } else {
    showScore();
  }
});

function showScore() {
  document.getElementById('question-container').classList.add('hide');
  nextBtn.classList.add('hide');
  scoreBox.classList.remove('hide');
  scoreText.textContent = `Your Score: ${score} out of ${questions.length}`;
}

loadQuestion();
