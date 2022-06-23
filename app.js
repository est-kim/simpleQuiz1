const submit = document.querySelector('#submit')
const retry = document.querySelector('#retry')
// const q1choices = document.querySelectorAll('input[name="q1"]')
// const q2choices = document.querySelectorAll('input[name="q2"]')
const results = document.getElementById('results')
const answers = document.getElementsByClassName('answers')
// console.log(answers)
const answerKey = document.getElementById('answerKey')
const output = document.getElementById('output')

const correctBonus = 10
let quizRunning = true
let score = 0
let isGameOver = false
retry.style.visibility = 'hidden'

// answerKey.style.visibility = 'hidden'

const myQuestions = [
  {
    questionText: "In which country do red onions originate?",
    optionA: "China",
    optionB: "South Africa",
    optionC: "Italy",
    optionD: "France",
    answer: "c"
  }, 
  {
    questionText: "What is the most popular soup flavor sold in the UK?",
    optionA: "Tomato",
    optionB: "Split Pea and Barley",
    optionC: "Potato and Leek",
    optionD: "Chicken and Mushroom",
    answer: "a"
  },
  {
    questionText: "What type of pastry are profiteroles made out of?",
    optionA: "Phyllo Pastry",
    optionB: "Choux Pastry",
    optionC: "Croissant Dough",
    optionD: "Flaky Pastry",
    answer: "b"
  },
  {
    questionText: "Grenadine is obtained from which fruit?",
    optionA: "Maraschino Cherry",
    optionB: "Meyer Lemon",
    optionC: "Black Cherry",
    optionD: "Pomegranate",
    answer: "d"
  },
  {
    questionText: "How many kernels will you find on an average ear of corn?",
    optionA: "200",
    optionB: "400",
    optionC: "600",
    optionD: "800",
    answer: "d"
  },
  {
    questionText: "How many segments are in most oranges?",
    optionA: "6",
    optionB: "8",
    optionC: "10",
    optionD: "12",
    answer: "c"
  },
  {
    questionText: "Which is the most stolen food in the world?",
    optionA: "Beef Ribs",
    optionB: "Bread",
    optionC: "Cheese",
    optionD: "Rice",
    answer: "c"
  },
  {
    questionText: "What is the most widely eaten meat in the world?",
    optionA: "Pork",
    optionB: "Beef",
    optionC: "Chicken",
    optionD: "Fish",
    answer: "a"
  },
  {
    questionText: "In which country was ice cream invented?",
    optionA: "Mexico",
    optionB: "China",
    optionC: "Italy",
    optionD: "Germany",
    answer: "b"
  },
  {
    questionText: "What was the first food eaten in space?",
    optionA: "Chocolate Bar",
    optionB: "Peanuts",
    optionC: "Beef Jerky",
    optionD: "Applesauce",
    answer: "d"
  }
]

const i = 1;
let questionHTML = ''
for (let i = 1; i <= myQuestions.length; i++) {
  questionHTML += `<p class="question is-size-5 has-text-weight-semibold">${myQuestions[i-1].questionText}</p>
  <ul class="answers">
    <input type="radio" name="q${i}" class="q${i}" value="a" id="q${i}a" /><label
      for="q${i}a"
      > ${myQuestions[i-1].optionA}</label
    ><br />
    <input type="radio" name="q${i}" class="q${i}" value="b" id="q${i}b" /><label
      for="q${i}b"
      > ${myQuestions[i-1].optionB}</label
    ><br />
    <input type="radio" name="q${i}" class="q${i}" value="c" id="q${i}c" /><label
      for="q${i}c"
      > ${myQuestions[i-1].optionC}</label
    ><br />
    <input type="radio" name="q${i}" class="q${i}" value="d" id="q${i}d" /><label
      for="q${i}d"
      > ${myQuestions[i-1].optionD}</label
    ><br />
  </ul>`

}

document.getElementById('quiz').innerHTML = questionHTML


const newQuiz = () => {
  score = 0
  // answerKey.style.visibility = 'hidden'
  quizRunning = true
  for (let i = 0; i < answers.length; i++) {
    answers[i].checked = false //redefine answers to select input tags, not ul's
  }
}
newQuiz()


//store button click for q1

//store button click for submitting quiz
// submit.addEventListener('click', function() {
//   let selectedAnswer1
//   let selectedAnswer2
//   isGameOver = true
//   retry.style.visibility = 'visible'
//   for (const q1choice of q1choices) {
//     if (q1choice.checked) {
//       selectedAnswer1 = q1choice.value
//       if (selectedAnswer1 == 'correct') {
//         incrementScore(correctBonus)
//         //break
//       }
//     } 
//   }
//   for (const q2choice of q2choices) {
//     if (q2choice.checked) {
//       selectedAnswer2 = q2choice.value
//       if (selectedAnswer2 == 'correct') {
//         incrementScore(correctBonus)
//         //break
//       }
//     } 
//   }
//   // output.innerText = selectedAnswer1 ? `You selected ${selectedAnswer1}` : `You haven't selected`
//   console.log(selectedAnswer1)
//   console.log(selectedAnswer2)
// })

// const q1choices = document.querySelectorAll('input[name="q1"]')

submit.addEventListener('click', function(e) {
  e.preventDefault();
  isGameOver = true
  retry.style.visibility = 'visible'
  for(let qIndex = 1; qIndex <= myQuestions.length; qIndex++) {  
    // let myClass = "q" + qIndex;
    // console.log(myClass)
    let elemA = document.getElementById("q" + qIndex + 'a')
    let elemB = document.getElementById("q" + qIndex + 'b')
    let elemC = document.getElementById("q" + qIndex + 'c')
    let elemD = document.getElementById("q" + qIndex + 'd')
    let choices = [elemA, elemB, elemC, elemD]
    // console.log(choices)
    for (const answerChoice of choices) {
      if (answerChoice.checked) {
        console.log(answerChoice.value) 
        if (answerChoice.value == myQuestions[qIndex-1].answer) {
          incrementScore(correctBonus)
          break
        }
      } 
    }
  }
  // output.innerText = selectedAnswer1 ? `You selected ${selectedAnswer1}` : `You haven't selected`
})

incrementScore = num => {
  score += num
  results.innerText = score
}


retry.addEventListener('click', function(e) {
  isGameOver = false
  retry.style.visibility = 'hidden'
  allInp = document.getElementsByTagName("input")
  for (let i = 0; i < allInp.length; i++) {
  if (allInp[i].type == "radio") {
    allInp[i].checked = false; 
  }
}
  score = 0
  results.innerText = 0
})