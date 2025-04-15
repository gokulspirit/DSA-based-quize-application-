const questions = [
  {
    question: "What is the time complexity of binary search?",
    options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
    answer: "O(log n)"
  },
  {
    question: "Which data structure uses FIFO?",
    options: ["Stack", "Queue", "Tree", "Graph"],
    answer: "Queue"
  },
  {
    question: "Which is not a stable sorting algorithm?",
    options: ["Merge Sort", "Bubble Sort", "Selection Sort", "Insertion Sort"],
    answer: "Selection Sort"
  },
  {
    question: "What data structure is used for recursion?",
    options: ["Queue", "Stack", "Heap", "Linked List"],
    answer: "Stack"
  },
  {
    question: "Which traversal method is used in Depth First Search?",
    options: ["In-order", "Pre-order", "Post-order", "All of these"],
    answer: "All of these"
  },
  // Add remaining 45 questions
];

// Continue adding more questions
for (let i = 6; i <= 50; i++) {
  questions.push({
    question: `Sample DSA Question ${i}?`,
    options: ["Option A", "Option B", "Option C", "Option D"],
    answer: "Option A"
  });
}
