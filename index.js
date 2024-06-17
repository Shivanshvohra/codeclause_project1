const quizData = [
    {
      question: "What does HTML stand for?",
      options: ["Home Tool Markup Language", "Hyperlinks and Text Markup Language", "Hypertext Markup Language", "hyperlinks and Tool Markup Language"],
      answer: "Hypertext Markup Language"
    },
    {
      question: "Choose the correct HTML element for the largest heading:?",
      options: ["<heading>", "<h1>", "<h5>", "<head>"],
      answer: "<h1>"
    },
    {
        question: "What is the correct HTML element for inserting a line break?",
        options: ["<br>", "<lb>", "<break>", "<hr>"],
        answer: "<br>"
    },
    {
        question: "What is the correct HTML element for inserting a horizontal line?",
        options: ["<br>", "<lb>", "<lr>", "<hr>"],
        answer: "<hr>"
    },
    {
        question: "Choose the correct HTML element to define important text?",
        options: ["<i>", "<important>", "<b>", "<strong>"],
        answer: "<strong>"
    },
    // Add more questions here...
  ];
  
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const submitButton = document.getElementById("submit");
  
  let currentQuestion = 0;
  let score = 0;
  
  function showQuestion() {
    const question = quizData[currentQuestion];
    questionElement.innerText = question.question;
  
    optionsElement.innerHTML = "";
    question.options.forEach(option => {
      const button = document.createElement("button");
      button.innerText = option;
      optionsElement.appendChild(button);
      button.addEventListener("click", selectAnswer);
    });
  }
  
  function selectAnswer(e) {
    const selectedButton = e.target;
    const answer = quizData[currentQuestion].answer;
  
    if (selectedButton.innerText === answer) {
      score++;
    }
  
    currentQuestion++;
  
    if (currentQuestion < quizData.length) {
      showQuestion();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    quiz.innerHTML = `
      <h1>Quiz Completed!</h1>
      <p>Your score: ${score}/${quizData.length}</p>
    `;
  }
  
  showQuestion();