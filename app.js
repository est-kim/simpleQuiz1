const submit = document.querySelector('#submit')
const retry = document.querySelector('#retry')
const q1choices = document.querySelectorAll('input[name="q1"]')
const q2choices = document.querySelectorAll('input[name="q2"]')
const results = document.getElementById('results')
const answers = document.getElementsByClassName('answers')
console.log(answers)
const answerKey = document.getElementById('answerKey')
const output = document.getElementById('output')

const correctBonus = 10
let quizRunning = true
let score = 0
let isGameOver = false
retry.style.visibility = 'hidden'

// answerKey.style.visibility = 'hidden'

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
submit.addEventListener('click', function() {
  let selectedAnswer1
  let selectedAnswer2
  isGameOver = true
  retry.style.visibility = 'visible'
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

retry.addEventListener('click', function() {
  isGameOver = false
  retry.style.visibility = 'hidden'
  q1choices.checked = false
  q2choices.checked = false
})