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
        1: "I have found a meaningful career.",
        2: "The work I do serves a greater purpose. ",
        3: "I view my work as contributing to my personal growth",
        4: "My work really makes no difference to the world.",
        5: "I understand how my work contributes to my life's meaning",
        6: "I have a good sense of what makes my job meaningful.",
        7: "I know my work makes a positive difference in the world.",
        8: "My work helps me better understand myself.",
        9: "I have discovered work that has a satisfying purpose.",
        10: "My work helps me make sense of the world around me."
    };
    
    const optionsss = [
        "Strongly Disagree",
        "Mildly Disagree",
        "Neutral",
        "Mildly Agree",
        "Strongly Agree",
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
    
        totalScore += parseInt(selectedButton.value);
        console.log(parseInt(selectedButton.value));
    
        if (currentIndex == 11) {
            document.cookie = "score6=" + totalScore;
            window.location.href = "./doyouknow6.html";
        }
    
        currentIndex++;
        showQuestion();
    });
    
    document.getElementById("submit").addEventListener("click", () => {
        // Display total score
        document.cookie = "score6=" + totalScore;
        alert("Your total score is: " + totalScore);
        window.location.href = "./doyouknow6.html";
    });
    
    showQuestion();
    