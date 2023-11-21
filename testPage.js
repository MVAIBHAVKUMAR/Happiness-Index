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
  1: "I am not afraid to voice my opinions, even when they are in opposition to the opinions of most people.",
  2: "For me, life has been a continuous process of learning, changing, and growth.",
  3: "In general, I feel I am in charge of the situation in which I live.",
  4: "People would describe me as a giving person, willing to share my time with others.",
  5: "I enjoy making plans for the future and working to make them a reality.",
  6: "Most people see me as loving and affectionate.",
  7: "When I look at the story of my life, I am pleased with how things have turned out.",
  8: "My decisions are not usually influenced by what everyone else is doing.",
  9: "I think it is important to have new experiences that challenge how you think about yourself and the world.",
  10: "I judge myself by what I think is important, not by the values of what others think is important.",
  11: "In general, I feel confident and positive about myself.",
  12: "I have been able to build a living environment and a lifestyle for myself that is much to my liking.",
  13: "I know that I can trust my friends, and they know they can trust me.",
  14: "Some people wander aimlessly through life, but I am not one of them.",
  15: "When I compare myself to friends and acquaintances, it makes me feel good about who I am.",
  16: "I have confidence in my opinions, even if they are contrary to the general consensus.",
  17: "I am quite good at managing the many responsibilities of my daily life.",
  18: "I have the sense that I have developed a lot as a person over time.",
  19: "I enjoy personal and mutual conversations with family members and friends.",
  20: "I like most parts of my personality.",
  21: "I have a sense of direction and purpose in life.",
};

const optionsss = [
  "Strongly agree",
  "Somewhat agree ",
  "A little agree",
  "Neither agree nor disagree",
  "A little disagree",
  "Somewhat disagree",
  "Strongly disagree",
];

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
      }" value="${i + 1}">
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

  totalScore += (8 - parseInt(selectedButton.value));
  console.log(parseInt(selectedButton.value));

  if (currentIndex == 20) {
    document.cookie = 'bscore1=' + totalScore;
    window.location.href = "./testPage2.html";
  }
  currentIndex++;
  showQuestion();
});

document.getElementById("submit").addEventListener("click", () => {
  // Display total score

  document.cookie = 'bscore1=' + totalScore;
  window.location.href = "./testPage2.html";
});

showQuestion();
