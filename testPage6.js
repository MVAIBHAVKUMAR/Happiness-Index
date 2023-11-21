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
  1: "In most ways my life is close to my ideal.",
  2: "The conditions of my life are excellent.",
  3: " I am satisfied with my life.",
  4: "So far I have gotten the important things I want in life.",
  5: "If I could live my life over, I would change almost nothing.",
};

const optionsss = [
  "Strongly disagree",
  "Disagree",
  "Slightly disagree",
  "Neither agree nor disagree",
  "Slightly agree",
  "Agree",
  "Strongly agree",
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

  totalScore += parseInt(selectedButton.value);
  console.log(parseInt(selectedButton.value));

  if (currentIndex == 4)
  {
    document.cookie = "score4=" + totalScore;
    window.location.href = "./doyouknow4.html"
  }

  currentIndex++;
  showQuestion();
});

document.getElementById("submit").addEventListener("click", () => {
  // Display total score
  document.cookie = "score4=" + totalScore;
  alert("Your total score is: " + totalScore);
  window.location.href = "./doyouknow4.html";
});

showQuestion();
