const quizData = [
  {
    question: "Which game features a blocky world and Creepers?",
    options: ["Roblox", "Minecraft", "Terraria", "Fortnite"],
    answer: "Minecraft"
  },
  {
    question: "In which game do players build structures while fighting?",
    options: ["Valorant", "PUBG", "Fortnite", "Free Fire"],
    answer: "Fortnite"
  },
  {
    question: "Kratos is the protagonist of which game series?",
    options: ["Assassin's Creed", "God of War", "Red Dead Redemption", "Elden Ring"],
    answer: "God of War"
  },
  {
    question: "Which game features Mario and Luigi as main characters?",
    options: ["Sonic", "Super Mario", "Zelda", "Crash Bandicoot"],
    answer: "Super Mario"
  },
  {
    question: "Which mobile game was famous for tapping a bird through pipes?",
    options: ["Angry Birds",  "Jetpack Joyride", "Temple Run","Flappy Bird"],
    answer: "Flappy Bird"
  },
  {
    question: "Which game features crewmates and impostors?",
    options: ["Among Us", "Minecraft", "Valorant", "Overcooked"],
    answer: "Among Us"
  },
  {
    question: "Which game has characters like Jinx, Yasuo, and Lux?",
    options: ["Dota 2", "Valorant","League of Legends", "Overwatch"],
    answer: "League of Legends"
  },
  {
  question: "In this fighting game series, shadowy warriors battle using martial arts, weapons, and powerful moves. Guess the game.",
  options: ["Mortal Kombat","Tekken", "Street Fighter", "Shadow Fight"],
  answer: "Shadow Fight"
  },
  {
    question: "Which company developed Brawl Stars?",
    options: ["Supercell", "Epic Games", "Tencent", "Ubisoft"],
    answer: "Supercell"
  },
  {
    question: "Which character runs from zombies in Temple Run?",
    options: [ "Sub-Zero","Guy Dangerous", "Crash", "Nate Drake"],
    answer: "Guy Dangerous"
  },
  {
    question: "Which game has the tagline 'Gotta catch ‘em all'?",
    options: ["Digimon", "Pokemon", "Beyblade", "Zelda"],
    answer: "Pokemon"
  },
  {
  question: "In this classic arcade game, you play as a yellow circle eating pellets while avoiding colorful ghosts. Guess the game.",
  options: ["Pac-Man", "Snake", "Space Invaders", "Frogger"],
  answer: "Pac-Man"
  },
  {
  question: "In this battle royale game, 100 players parachute onto an island and fight to be the last one standing. Guess the game.",
  options: ["Free Fire",  "Call of Duty","PUBG", "Fortnite"],
  answer: "PUBG"
  },
  {
    question: "Which game lets you race with Mario characters?",
    options: ["Need for Speed", "Mario Kart", "F-Zero", "Sonic Dash"],
    answer: "Mario Kart"
  },
  {
  question: "You play as CJ, returning home to Grove Street to save your family and reclaim your turf. Guess the game.",
  options: [ "Saints Row", "GTA V", "Red Dead Redemption 2","GTA: San Andreas",],
  answer: "GTA: San Andreas"
  },
  {
  question: "In this mobile strategy game, you build a village, train barbarians and archers, and defend against raids. Guess the game.",
  options: ["Boom Beach", "Clash of Clans", "Clash Royale", "Lords Mobile"],
  answer: "Clash of Clans"
  },
  {
  question: "In this colorful puzzle game, you match 3 or more candies to clear them and complete level goals. Guess the game.",
  options: ["Candy Crush Saga", "Bejeweled", "Tetris", "Fruit Ninja"],
  answer: "Candy Crush Saga"
  },
  {
  question: "In this endless runner game, you dodge trains and collect coins while being chased by a grumpy inspector. Guess the game.",
  options: ["Temple Run",  "Jetpack Joyride", "Minion Rush","Subway Surfers",],
  answer: "Subway Surfers"
  },
  {
  question: "This military shooter franchise features intense multiplayer battles and famous modes like Team Deathmatch and Zombies. Guess the game.",
  options: ["Call of Duty", "Battlefield", "Valorant", "CS:GO"],
  answer: "Call of Duty"
  },
  {
  question: "This racing game features real licensed cars from Ferrari, Lamborghini, and Bugatti,You perform barrel rolls and 360° spins while racing through cities. Guess the game.",
  options: ["Need for Speed",  "Real Racing 3", "CSR Racing","Asphalt 9",],
  answer: "Asphalt 9"
  },

];

let currentQuestion = 0;
let score = 0;
let correct = 0;
let incorrect = 0;
let attempted = 0;

const questionText = document.getElementById('question-text');
const optionsEl = document.getElementById('options');
const nextBtn = document.getElementById('nextBtn');
const submitBtn = document.getElementById('submitBtn');
const resultEl = document.getElementById('result');

function loadQuestion() {
  const current = quizData[currentQuestion];
  questionText.textContent = current.question;
  optionsEl.innerHTML = '';

  nextBtn.classList.add('hidden');
  submitBtn.classList.add('hidden');

  current.options.forEach(option => {
    const btn = document.createElement('button');
    btn.textContent = option;
    btn.onclick = () => selectAnswer(btn, option);
    optionsEl.appendChild(btn);
  });
}


function selectAnswer(button, selectedOption) {
  attempted++;
  const correctAnswer = quizData[currentQuestion].answer;

  Array.from(optionsEl.children).forEach(btn => {
    btn.disabled = true;
    if (btn.textContent === correctAnswer) {
      btn.style.backgroundColor = 'green'; 
    }
  });

  if (selectedOption === correctAnswer) {
    score += 4;
    correct++;
    button.style.backgroundColor = 'green';
  } else {
    score -= 1;
    incorrect++;
    button.style.backgroundColor = 'crimson';
  }

  if (currentQuestion < quizData.length - 1) {
    nextBtn.classList.remove('hidden');
  } else {
    submitBtn.classList.remove('hidden');
  }
}


nextBtn.onclick = () => {
  currentQuestion++;
  nextBtn.classList.add('hidden');
  loadQuestion();
};

submitBtn.onclick = () => {
  showResult();
};

function showResult() {
  document.getElementById('question-box').classList.add('hidden');
  nextBtn.classList.add('hidden');
  submitBtn.classList.add('hidden');
  resultEl.classList.remove('hidden');
  const unattempted = quizData.length - attempted;
  resultEl.innerHTML = `
    <h2>Quiz Result</h2>
    <p>Total Questions: ${quizData.length}</p>
    <p>Attempted: ${attempted}</p>
    <p>Unattempted: ${unattempted}</p>
    <p>Correct Answers: ${correct}</p>
    <p>Incorrect Answers: ${incorrect}</p>
    <h3>Your Final Score: ${score}</h3>
  `;
}

loadQuestion();


