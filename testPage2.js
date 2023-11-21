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
	1: "I am not interested in activities that will expand my horizons.",
	2: "In many ways I feel disappointed about my achievements in life.",
	3: "I live life one day at a time and don't really think about the future.",
	4: "I tend to worry about what other people think of me.",
	5: "I have difficulty arranging my life in a way that is satisfying to me.",
	6: "I gave up trying to make big improvements or changes in my life a long time ago.",
	7: "The demands of everyday life often get me down.",
	8: "I have not experienced many warm and trusting relationships with others.",
	9: "Maintaining close relationships has been difficult and frustrating for me.",
	10: "My attitude about myself is probably not as positive as most people feel about themselves.",
	11: "I tend to be influenced by people with strong opinions.",
	12: "I do not enjoy being in new situations that require me to change my old familiar ways of doing things.",
	13: "I do not fit very well with the people and the community around me.",
	14: "When I think about it, I haven't really improved much as a person over the years.",
	15: "I often feel lonely because I have few close friends with whom to share my concerns.",
	16: "I don't have a good sense of what it is I'm trying to accomplish in life.",
	17: "I sometimes feel as if I've done all there is to do in life.",
	18: "I feel like many of the people I know have gotten more out of life than I have.",
	19: "My daily activities often seem trivial and unimportant to me.",
	20: "It's difficult for me to voice my own opinions on controversial matters.",
	21: "I often feel overwhelmed by my responsibilities.",
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

	totalScore += parseInt(selectedButton.value);
	console.log(parseInt(selectedButton.value));
	if (currentIndex == 20) {
		const cookies = document.cookie;

		const score1 = cookies
			.split('; ')
			.find(row => row.startsWith('bscore1='))
			.split('=')[1];

		alert("Your total score is: " + (totalScore + parseInt(score1)));
		document.cookie = 'score1='+(totalScore+parseInt(score1));
		window.location.href = "./doyouknow.html";
	}
	currentIndex++;
	showQuestion();
});

document.getElementById("submit").addEventListener("click", () => {
	const cookies = document.cookie;

	const score1 = cookies
		.split('; ')
		.find(row => row.startsWith('score1='))
		.split('=')[1];

	alert("Your total score is: " + (totalScore + parseInt(score1)));
	window.location.href = "./doyouknow.html";
});

showQuestion();
