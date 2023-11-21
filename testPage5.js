// const firebaseConfig = {
//   apiKey: "AIzaSyD5WblXbB9ShbrrrZ3lRUByc7NPjtG-QF0",
//   authDomain: "react-auth-d8502.firebaseapp.com",
//   projectId: "react-auth-d8502",
//   storageBucket: "react-auth-d8502.appspot.com",
//   messagingSenderId: "743370297798",
//   appId: "1:743370297798:web:ad034afc66b00e2298e2c7",
//   measurementId: "G-BWHGR7M1MP",
// };

// // Initialize Firebase
// const app = firebase.initializeApp(firebaseConfig);

// const db = firebase.database();
// console.log();

const section1Q = {
  1: "I am able to adapt when changes occur.",
  2: "I have one close and secure relationship.",
  3: "Sometimes fate or God helps me.",
  4: "I can deal with whatever comes my way.",
  5: "Past successes give me confidence.",
  6: "I try to see the humorous side of things when I am faced with problems.",
  7: "Having to cope with stress can make me stronger.",
  8: "I tend to bounce back after illness, injury or other hardships.",
  9: "I believe most things happen for a reason.",
  10: "I make my best effort, no matter what.",
  11: "I believe I can achieve my goals, even if there are obstacles.",
  12: "Even when hopeless, I do not give up.",
  13: "In times of stress, I know where to find help.",
  14: "Under pressure, I stay focused and think clearly.",
  15: "I prefer to take the lead in problem-solving.",
  16: "I am not easily discouraged by failure.",
  17: "I think of myself as a strong person when dealing with life's challenges and difficulties.",
  18: "I make unpopular or difficult decisions.",
  19: "I am able to handle unpleasant or painful feelings like sadness, fear, and anger.",
  20: "I have to act on a hunch.",
  21: "I have a strong sense of purpose in life.",
  22: "I feel like I am in control.",
  23: "I like challenges.",
  24: "I work to attain goals.",
  25: "I take pride in my achievements.",
};

const optionsss = ["Not True at all", "Rarely True", "Sometimes True", "Often True", "True nearly all the time"];

let currentIndex = 0;
let totalScore = 0;

function showQuestion() {
  const question = section1Q[currentIndex + 1];

  document.getElementById(
    "question"
  ).innerHTML = `<h2 class='animated-text'><span>${question} </span></h2>`;

  let html = "";

  for (let i = 0; i < optionsss.length; i++) {
    html += `<label class='animated-option'><input type='radio' name="q${currentIndex + 1
      }" value="${i}">
    ${optionsss[i]} </label>
  <br>`;
  }
  document.getElementById("options").innerHTML = html;
}

const options = document.getElementById("options");

options.addEventListener("click", (e) => {
  const selectedRadio = e.target;

  selectedRadio.classList.add("checked");

  const selectedButton = document.querySelector(
    `input[name="q${currentIndex + 1}"].checked`
  );

  totalScore += parseInt(selectedButton.value);
  console.log(parseInt(selectedButton.value));

  if (currentIndex == 24) {
    document.cookie = "score3=" + totalScore;
    window.location.href = "./doyouknow3.html";
  }

  currentIndex++;
  showQuestion();
});

document.getElementById("submit").addEventListener("click", () => {
  // Display total score
  document.cookie = "score3=" + totalScore;
  window.location.href = "./doyouknow3.html";
});

showQuestion();
