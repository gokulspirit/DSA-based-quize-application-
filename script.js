// script.js import { auth, provider, signInWithPopup, signOut, db, doc, setDoc, addDoc, collection } from './firebase.js'; import { questions } from './questions.js';

let currentQuestion = 0; let score = 0; let timer; let user = null;

const quizBox = document.getElementById("quizBox"); const questionText = document.getElementById("questionText"); const optionsList = document.getElementById("optionsList"); const nextBtn = document.getElementById("nextBtn"); const explanation = document.getElementById("explanation"); const progressBar = document.getElementById("progressBar"); const timeText = document.getElementById("time");

// Google Sign-In const signInBtn = document.getElementById("googleSignIn"); const signOutBtn = document.getElementById("googleSignOut");

signInBtn.onclick = async () => { try { const result = await signInWithPopup(auth, provider); user = result.user; quizBox.style.display = 'block'; signInBtn.style.display = 'none'; signOutBtn.style.display = 'inline-block'; loadQuestion(); } catch (error) { console.error(error); } };

signOutBtn.onclick = async () => { await signOut(auth); user = null; quizBox.style.display = 'none'; signInBtn.style.display = 'inline-block'; signOutBtn.style.display = 'none'; clearInterval(timer); alert("You signed out"); };

function loadQuestion() { clearInterval(timer); explanation.innerText = ""; const q = questions[currentQuestion]; questionText.innerText = q.question; optionsList.innerHTML = ""; q.options.forEach((opt, idx) => { const li = document.createElement("li"); li.innerText = opt; li.onclick = () => selectOption(idx); optionsList.appendChild(li); }); startTimer(); }

function selectOption(selectedIdx) { const q = questions[currentQuestion]; const allOptions = optionsList.querySelectorAll("li"); allOptions.forEach((li, idx) => { li.classList.add(idx === q.answer ? 'correct' : 'wrong'); li.onclick = null; }); explanation.innerText = q.explanation; if (selectedIdx === q.answer) score++; updateProgress(); }

function updateProgress() { const percent = ((currentQuestion + 1) / questions.length) * 100; progressBar.style.width = percent + "%"; }

nextBtn.onclick = () => { currentQuestion++; if (currentQuestion < questions.length) { loadQuestion(); } else { endQuiz(); } };

function startTimer() { let timeLeft = 15; timeText.innerText = timeLeft; timer = setInterval(() => { timeLeft--; timeText.innerText = timeLeft; if (timeLeft === 0) { clearInterval(timer); selectOption(-1); } }, 1000); }

async function endQuiz() { clearInterval(timer); questionText.innerText = Quiz Complete! Score: ${score}/${questions.length}; optionsList.innerHTML = ""; explanation.innerText = "Thanks for playing!"; nextBtn.style.display = 'none';

// Store to Firestore if (user) { try { const historyRef = collection(db, "quizHistory"); await addDoc(historyRef, { uid: user.uid, email: user.email, score, total: questions.length, timestamp: new Date().toISOString() }); } catch (e) { console.error("Failed to store score:", e); } } localStorage.setItem("lastScore", score); }

