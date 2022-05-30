const submit = document.getElementById('submit')
const results = document.getElementById('results')
const answers = document.getElementsByClassName('answers')
const answerKey = document.getElementById('answerKey')

let quizRunning = true

answerKey.style.visibility = 'hidden'

const newQuiz = () => {
  answerKey.style.visibility = 'hidden'
  quizRunning = true
  for (let i = 0; i < answers.length; i++) {
    answers[i].checked = false
  }
}
newQuiz()

const buttonClick = (event) => {
  if (quizRunning) {
    console.log(event)
    console.log(event.target.textContent)
  }
}
