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
  1: "Distressed",
  2: "Upset",
  3: "Guilty",
  4: "Scared",
  5: "Hostile",
  6: "Irritable",
  7: "Ashamed",
  8: "Nervos",
  9: "Jittery",
  10: "Afraid",
};

const optionsss = [
  "Very slightly or not at all",
  "A little",
  "Moderately",
  "Quite a bit",
  "Extremely",
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

  totalScore += (6 - parseInt(selectedButton.value));
  console.log(parseInt(selectedButton.value));

  if (currentIndex == 9) {
    const cookies = document.cookie;

    const score2 = cookies
      .split('; ')
      .find(row => row.startsWith('score2='))
      .split('=')[1];

    alert("Your total score is: " + (totalScore + parseInt(score2)));
    window.location.href = "./doyouknow2.html";
  }

  currentIndex++;
  showQuestion();
});

document.getElementById("submit").addEventListener("click", () => {

  // Display total score
  const cookies = document.cookie;

  const score2 = cookies
    .split('; ')
    .find(row => row.startsWith('score2='))
    .split('=')[1];

  alert("Your total score is: " + (totalScore + parseInt(score2)));
  window.location.href = "./doyouknow2.html";
});

showQuestion();
