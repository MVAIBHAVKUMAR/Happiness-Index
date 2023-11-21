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
  1: "There is a special person who is around when I am in need. ",
  2: "There is a special person with whom I can share my joys and sorrows.",
  3: "My family really tries to help me. ",
  4: "I get the emotional help and support I need from my family. ",
  5: "I have a special person who is a real source of comfort to me. ",
  6: "My friends really try to help me",
  7: "I can count on my friends when things go wrong",
  8: "I can talk about my problems with my family. ",
  9: "I have friends with whom I can share my joys and sorrows. ",
  10: "There is a special person in my life who cares about my feelings. ",
  11: "My family is willing to help me make decisions.",
  12: "I can talk about my problems with my friends.",
};

const optionsss = [
  "Very Strongly Disagree",
  "Strongly Disagree",
  "Mildly Disagree",
  "Neutral",
  "Mildly Agree",
  "Strongly Agree",
  "Very Strongly Agree",
];

let currentIndex = 0;
let totalScore = 0;

function showQuestion() {
  const question = "Do you feel " + section1Q[currentIndex + 1];

  document.getElementById(
    "question"
  ).innerHTML = `<h2 class='animated-text'><span>${question} </span></h2>`;

  let html = "";

  for (let i = 0; i < optionsss.length; i++) {
    html += `<label class='animated-option'><input type='radio' name="q${
      currentIndex + 1
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

  if(currentIndex == 11)
  {
    document.cookie = "score5="+totalScore;
    window.location.href = "./doyouknow5.html";
  }

  currentIndex++;
  showQuestion();
});

document.getElementById("submit").addEventListener("click", () => {
  // Display total score
  document.cookie = "score5="+totalScore;
  alert("Your total score is: " + totalScore);
  window.location.href = "./doyouknow5.html";
});

showQuestion();
