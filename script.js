const questions = [
  {
    question: "Find the missing number in an array of 1 to n.",
    options: ["Use XOR", "Sort the array", "Brute force", "Linear search"],
    answer: "Use XOR"
  },
  {
    question: "Which algorithm finds the largest sum subarray?",
    options: ["Dijkstra", "Bellman Ford", "Kadane’s", "Floyd-Warshall"],
    answer: "Kadane’s"
  },
  {
    question: "How to merge two sorted arrays?",
    options: ["Use queue", "Compare & insert", "HashMap", "Sort one then the other"],
    answer: "Compare & insert"
  },
  {
    question: "Best way to find duplicates in array?",
    options: ["Binary Search", "Hashing", "Sorting", "Stack"],
    answer: "Hashing"
  },
  {
    question: "How to rotate an array by k steps?",
    options: ["Reverse array parts", "Swap elements", "Sort again", "Heapify"],
    answer: "Reverse array parts"
  },
  {
    question: "Which structure helps check if a string is palindrome?",
    options: ["Stack", "Queue", "Map", "Set"],
    answer: "Stack"
  },
  {
    question: "How to reverse words in a string?",
    options: ["Split & reverse", "Loop with i--", "Stack", "Recursion"],
    answer: "Split & reverse"
  },
  {
    question: "How to find longest substring without repeating characters?",
    options: ["Brute force", "Sliding window", "Heap", "DFS"],
    answer: "Sliding window"
  },
  {
    question: "What is the use of strstr() in C/C++?",
    options: ["Find string length", "Compare strings", "Search substring", "Replace substring"],
    answer: "Search substring"
  },
  {
    question: "What does the count-and-say problem involve?",
    options: ["Recursion", "Sorting", "Backtracking", "Stack"],
    answer: "Recursion"
  },
  {
    question: "How to reverse a linked list?",
    options: ["Use stack", "Iterative pointers", "DFS", "Sort list"],
    answer: "Iterative pointers"
  },
  {
    question: "How to detect cycle in linked list?",
    options: ["Floyd's Algorithm", "DFS", "HashMap", "Sort"],
    answer: "Floyd's Algorithm"
  },
  {
    question: "How to merge two sorted linked lists?",
    options: ["Recursion or Iteration", "DFS", "Stack", "Graph"],
    answer: "Recursion or Iteration"
  },
  {
    question: "Find the middle node of a linked list?",
    options: ["Count & divide", "Two pointers", "HashMap", "DFS"],
    answer: "Two pointers"
  },
  {
    question: "How to remove nth node from end in linked list?",
    options: ["Two pointers", "Queue", "Stack", "DFS"],
    answer: "Two pointers"
  },
  {
    question: "How to implement stack using queue?",
    options: ["1 or 2 queues", "Heap", "Graph", "Hashmap"],
    answer: "1 or 2 queues"
  },
  {
    question: "Implement a queue using stack?",
    options: ["Use two stacks", "Use two queues", "Priority queue", "Heapify"],
    answer: "Use two stacks"
  },
  {
    question: "Which structure helps validate parenthesis?",
    options: ["Stack", "Queue", "HashMap", "Set"],
    answer: "Stack"
  },
  {
    question: "Next greater element problem is solved using?",
    options: ["Stack", "Queue", "DFS", "Hashmap"],
    answer: "Stack"
  },
  {
    question: "How to implement LRU cache?",
    options: ["Map + Doubly Linked List", "Stack", "Queue", "Set"],
    answer: "Map + Doubly Linked List"
  },
  {
    question: "What is Inorder traversal in BST?",
    options: ["Left-Root-Right", "Root-Left-Right", "Right-Root-Left", "Root-Right-Left"],
    answer: "Left-Root-Right"
  },
  {
    question: "Which traversal is BFS?",
    options: ["Level-order", "In-order", "Post-order", "DFS"],
    answer: "Level-order"
  },
  {
    question: "How to check if a binary tree is symmetric?",
    options: ["Mirror traversal", "BFS", "DFS", "Inorder"],
    answer: "Mirror traversal"
  },
  {
    question: "Convert sorted array to BST involves?",
    options: ["Middle element", "Last element", "First element", "Heapify"],
    answer: "Middle element"
  },
  {
    question: "LCA in BST is found by?",
    options: ["Tree traversal", "DFS", "Binary Search", "DP"],
    answer: "Binary Search"
  },
  {
    question: "Detect cycle in undirected graph?",
    options: ["DFS with parent check", "BFS", "Stack", "Backtracking"],
    answer: "DFS with parent check"
  },
  {
    question: "How does DFS work?",
    options: ["Stack or recursion", "Queue", "BFS", "Tree"],
    answer: "Stack or recursion"
  },
  {
    question: "BFS uses which data structure?",
    options: ["Queue", "Stack", "Tree", "Array"],
    answer: "Queue"
  },
  {
    question: "Which algorithm finds shortest path in weighted graph?",
    options: ["Dijkstra", "DFS", "Kruskal", "Prim"],
    answer: "Dijkstra"
  },
  {
    question: "Topological sort is used on?",
    options: ["DAG", "BST", "Heap", "Queue"],
    answer: "DAG"
  },
  {
    question: "Quick sort is based on?",
    options: ["Divide & Conquer", "Greedy", "BFS", "Backtracking"],
    answer: "Divide & Conquer"
  },
  {
    question: "Merge sort time complexity?",
    options: ["O(n log n)", "O(n^2)", "O(n)", "O(log n)"],
    answer: "O(n log n)"
  },
  {
    question: "Binary search requires?",
    options: ["Sorted array", "Hashmap", "Graph", "Queue"],
    answer: "Sorted array"
  },
  {
    question: "Find peak element in array?",
    options: ["Binary search logic", "Brute force", "DFS", "Queue"],
    answer: "Binary search logic"
  },
  {
    question: "Search in rotated sorted array uses?",
    options: ["Modified Binary Search", "DFS", "Hashing", "Stack"],
    answer: "Modified Binary Search"
  },
  {
    question: "N-Queens uses?",
    options: ["Backtracking", "DP", "Greedy", "Heap"],
    answer: "Backtracking"
  },
  {
    question: "Rat in a maze problem type?",
    options: ["Backtracking", "Graph", "DP", "Queue"],
    answer: "Backtracking"
  },
  {
    question: "How to solve sudoku?",
    options: ["Backtracking", "Sorting", "Greedy", "DP"],
    answer: "Backtracking"
  },
  {
    question: "Generate parentheses problem uses?",
    options: ["Backtracking", "Heap", "BFS", "Sorting"],
    answer: "Backtracking"
  },
  {
    question: "Subset problem is solved by?",
    options: ["Backtracking", "Stack", "Queue", "Hashing"],
    answer: "Backtracking"
  },
  {
    question: "Fibonacci using DP avoids?",
    options: ["Recomputations", "Hashing", "Queue", "Stack"],
    answer: "Recomputations"
  },
  {
    question: "LCS uses?",
    options: ["DP Table", "Recursion", "HashMap", "Stack"],
    answer: "DP Table"
  },
  {
    question: "Knapsack 0/1 uses?",
    options: ["DP", "Greedy", "Binary Tree", "Sorting"],
    answer: "DP"
  },
  {
    question: "Coin change problem uses?",
    options: ["Dynamic Programming", "Stack", "Greedy", "Backtracking"],
    answer: "Dynamic Programming"
  },
  {
    question: "Edit distance between strings?",
    options: ["Dynamic Programming", "DFS", "Stack", "Queue"],
    answer: "Dynamic Programming"
  },
  {
    question: "Trie is useful for?",
    options: ["Prefix search", "BFS", "Stack", "Greedy"],
    answer: "Prefix search"
  },
  {
    question: "Union-Find helps in?",
    options: ["Disjoint Set", "Sorting", "DP", "Stack"],
    answer: "Disjoint Set"
  },
  {
    question: "Kth largest element can be found using?",
    options: ["Min Heap", "Max Heap", "Queue", "BFS"],
    answer: "Min Heap"
  },
  {
    question: "Median of 2 sorted arrays uses?",
    options: ["Binary Search", "DP", "Hashing", "Queue"],
    answer: "Binary Search"
  },
  {
    question: "Detect loop and remove it in a linked list?",
    options: ["Floyd’s + pointer fix", "DFS", "Hashmap", "Recursion"],
    answer: "Floyd’s + pointer fix"
  }
];
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
