const submit = document.querySelector('#submit')
const q1choices = document.querySelectorAll('input[name="q1"]')
const q2choices = document.querySelectorAll('input[name="q2"]')
const results = document.getElementById('results')
const answers = document.getElementsByClassName('answers')
const answerKey = document.getElementById('answerKey')
const output = document.getElementById('output')

let quizRunning = true
let score = 0
const correctBonus = 10

// answerKey.style.visibility = 'hidden'

const newQuiz = () => {
  score = 0
  // answerKey.style.visibility = 'hidden'
  quizRunning = true
  for (let i = 0; i < answers.length; i++) {
    answers[i].checked = false
  }
}
newQuiz()


//store button click for q1


//store button click for submitting quiz
submit.addEventListener('click', function() {
  let selectedAnswer1
  let selectedAnswer2
  for (const q1choice of q1choices) {
    if (q1choice.checked) {
      selectedAnswer1 = q1choice.value
      if (selectedAnswer1 == 'correct') {
        incrementScore(correctBonus)
        //break
      }
    } 
  }
  for (const q2choice of q2choices) {
    if (q2choice.checked) {
      selectedAnswer2 = q2choice.value
      if (selectedAnswer2 == 'correct') {
        incrementScore(correctBonus)
        //break
      }
    } 
  }
  // output.innerText = selectedAnswer1 ? `You selected ${selectedAnswer1}` : `You haven't selected`
  console.log(selectedAnswer1)
  console.log(selectedAnswer2)
})

incrementScore = num => {
  score += num
  results.innerText = score
}
