const questions = [
  {
    question: "What is the time complexity of binary search?",
    options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
    answer: "O(log n)"
  },
  {
    question: "Which data structure follows FIFO order?",
    options: ["Stack", "Queue", "Graph", "Tree"],
    answer: "Queue"
  },
  {
    question: "Which sorting algorithm is the fastest on average for large datasets?",
    options: ["Bubble Sort", "Insertion Sort", "Quick Sort", "Selection Sort"],
    answer: "Quick Sort"
  },
  {
    question: "Which data structure uses LIFO?",
    options: ["Stack", "Queue", "Graph", "Array"],
    answer: "Stack"
  },
  {
    question: "What is the best case complexity of linear search?",
    options: ["O(n)", "O(log n)", "O(1)", "O(n^2)"],
    answer: "O(1)"
  },
  {
    question: "What is the worst case time complexity of Merge Sort?",
    options: ["O(n^2)", "O(n)", "O(log n)", "O(n log n)"],
    answer: "O(n log n)"
  },
  {
    question: "Which algorithm is used to find the shortest path in a graph?",
    options: ["DFS", "BFS", "Dijkstra", "Prim"],
    answer: "Dijkstra"
  },
  {
    question: "Which of the following is not a linear data structure?",
    options: ["Array", "Queue", "Tree", "Stack"],
    answer: "Tree"
  },
  {
    question: "What is the maximum number of children in a binary tree node?",
    options: ["1", "2", "3", "4"],
    answer: "2"
  },
  {
    question: "Which traversal technique is used in DFS?",
    options: ["Breadth-First", "In-order", "Depth-First", "Level-order"],
    answer: "Depth-First"
  },
  {
    question: "What is a hash table primarily used for?",
    options: ["Sorting", "Searching", "Hashing", "Mapping keys to values"],
    answer: "Mapping keys to values"
  },
  {
    question: "Which data structure uses nodes and pointers?",
    options: ["Array", "Stack", "Linked List", "Queue"],
    answer: "Linked List"
  },
  {
    question: "Which sorting algorithm is stable?",
    options: ["Quick Sort", "Heap Sort", "Merge Sort", "Selection Sort"],
    answer: "Merge Sort"
  },
  {
    question: "In which data structure is deletion done from the front?",
    options: ["Stack", "Queue", "Array", "Tree"],
    answer: "Queue"
  },
  {
    question: "Which algorithm uses divide and conquer?",
    options: ["Bubble Sort", "Merge Sort", "Linear Search", "Binary Search"],
    answer: "Merge Sort"
  },
  {
    question: "Which of these is not a graph traversal algorithm?",
    options: ["DFS", "BFS", "Dijkstra", "Binary Search"],
    answer: "Binary Search"
  },
  {
    question: "Which data structure is used in BFS?",
    options: ["Stack", "Queue", "Tree", "Heap"],
    answer: "Queue"
  },
  {
    question: "What does AVL in AVL tree stand for?",
    options: ["Adelson-Velsky and Landis", "Automatic Variable Length", "Advanced Value Lookup", "Array Vector List"],
    answer: "Adelson-Velsky and Landis"
  },
  {
    question: "Which structure is used for implementing recursion?",
    options: ["Queue", "Stack", "Heap", "Graph"],
    answer: "Stack"
  },
  {
    question: "Which algorithm finds Minimum Spanning Tree?",
    options: ["Dijkstra", "Prim", "DFS", "Kruskal"],
    answer: "Kruskal"
  },
  {
    question: "What is the height of a balanced binary tree with n nodes?",
    options: ["log(n)", "n", "n/2", "sqrt(n)"],
    answer: "log(n)"
  },
  {
    question: "Which of these is a non-linear data structure?",
    options: ["Stack", "Queue", "Array", "Graph"],
    answer: "Graph"
  },
  {
    question: "Which data structure is best for implementing undo feature?",
    options: ["Queue", "Stack", "Tree", "Graph"],
    answer: "Stack"
  },
  {
    question: "Which of the following is a self-balancing tree?",
    options: ["Binary Tree", "AVL Tree", "Heap", "Trie"],
    answer: "AVL Tree"
  },
  {
    question: "What is the time complexity of inserting an element in a max heap?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    answer: "O(log n)"
  },
  {
    question: "Which algorithm is used to detect cycle in a graph?",
    options: ["BFS", "DFS", "Kruskal", "Dijkstra"],
    answer: "DFS"
  },
  {
    question: "Which of the following is not a type of linked list?",
    options: ["Singly", "Doubly", "Triply", "Circular"],
    answer: "Triply"
  },
  {
    question: "What is a complete binary tree?",
    options: ["Every level is full", "All leaves at same level", "All nodes have 2 children", "Heap property maintained"],
    answer: "Every level is full"
  },
  {
    question: "Which traversal gives nodes in non-decreasing order for BST?",
    options: ["Pre-order", "Post-order", "In-order", "Level-order"],
    answer: "In-order"
  },
  {
    question: "Which is used to represent hierarchical data?",
    options: ["Array", "Stack", "Queue", "Tree"],
    answer: "Tree"
  },
  {
    question: "What is the space complexity of DFS in a graph?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n + e)"],
    answer: "O(n)"
  },
  {
    question: "What is the key difference between array and linked list?",
    options: ["Random access", "Fixed size", "Insertion cost", "All of the above"],
    answer: "All of the above"
  },
  {
    question: "Which sorting algorithm is best for nearly sorted data?",
    options: ["Merge Sort", "Quick Sort", "Bubble Sort", "Insertion Sort"],
    answer: "Insertion Sort"
  },
  {
    question: "Which algorithm is used in A* search?",
    options: ["BFS", "Heuristics", "Dijkstra", "DFS"],
    answer: "Heuristics"
  },
  {
    question: "What is the max height difference in an AVL Tree?",
    options: ["1", "2", "3", "No limit"],
    answer: "1"
  },
  {
    question: "Which of these does not require a key comparison?",
    options: ["Heap Sort", "Counting Sort", "Quick Sort", "Bubble Sort"],
    answer: "Counting Sort"
  },
  {
    question: "In graph, what is the minimum number of edges for n vertices?",
    options: ["0", "n", "n-1", "n+1"],
    answer: "0"
  },
  {
    question: "Which algorithm is used for topological sorting?",
    options: ["DFS", "BFS", "Kruskal", "Dijkstra"],
    answer: "DFS"
  },
  {
    question: "Which is not true about greedy algorithms?",
    options: ["Locally optimal", "Backtracking", "Efficient", "Simple"],
    answer: "Backtracking"
  },
  {
    question: "Which structure is used in Heap Sort?",
    options: ["Tree", "Heap", "Array", "Graph"],
    answer: "Heap"
  },
  {
    question: "Which data structure is best for constant-time lookup?",
    options: ["Array", "Hash Table", "Queue", "Heap"],
    answer: "Hash Table"
  },
  {
    question: "Which traversal method is used in backtracking?",
    options: ["DFS", "BFS", "Topological", "Level-order"],
    answer: "DFS"
  },
  {
    question: "Which of the following is used in dynamic programming?",
    options: ["Recursion", "Memoization", "Backtracking", "Greedy"],
    answer: "Memoization"
  },
  {
    question: "Which of these is not an application of stack?",
    options: ["Expression evaluation", "Backtracking", "Infix to postfix", "Level order traversal"],
    answer: "Level order traversal"
  },
  {
    question: "Which of the following is NOT a type of tree traversal?",
    options: ["In-order", "Pre-order", "Circular", "Post-order"],
    answer: "Circular"
  },
  {
    question: "Which graph traversal is used in shortest path algorithms?",
    options: ["BFS", "DFS", "In-order", "Backtracking"],
    answer: "BFS"
  },
  {
    question: "In which tree are keys always greater in right subtree?",
    options: ["AVL Tree", "Heap", "BST", "B-Tree"],
    answer: "BST"
  },
  {
    question: "What is the space complexity of an adjacency matrix?",
    options: ["O(n)", "O(n^2)", "O(log n)", "O(e)"],
    answer: "O(n^2)"
  },
  {
    question: "Which data structure is preferred for hierarchical representations?",
    options: ["Tree", "Array", "Queue", "Stack"],
    answer: "Tree"
  }
];
