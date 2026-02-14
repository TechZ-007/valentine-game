let currentStage = 'intro'

const messages = [
  "You make normal days feel less normal.",
  "You somehow make chaos feel comfortable.",
  "And honestly… I like who I am around you."
]

let msgIndex = 0

function showStage(id) {
  document.querySelectorAll('.stage').forEach(s => s.classList.remove('active'))
  document.getElementById(id).classList.add('active')
  currentStage = id
}

function nextStage(id) {
  showStage(id)
}

function yesStage1() {
  nextStage('stage2')
}

function noStage1() {
  alert("suspicious response detected. please try again")
}

document.addEventListener('mousemove', e => {
  const dot = document.createElement('div')
  dot.className = 'cursor-dot'
  dot.style.left = e.clientX + 'px'
  dot.style.top = e.clientY + 'px'
  document.body.appendChild(dot)
  setTimeout(() => dot.remove(), 600)
})

function yesStage2() {
  nextStage('stage3')
  showMessage()
}

function moveYesButton() {
  const btn = document.getElementById('movingYes')
  if (!btn) return
  btn.style.left = Math.random() * 80 + '%'
  btn.style.top = Math.random() * 80 + '%'
}

setInterval(moveYesButton, 1200)

function showMessage() {
  document.getElementById('messageText').innerText = messages[msgIndex]
}

function nextMessage() {
  msgIndex++
  if (msgIndex >= messages.length) {
    nextStage('stage4')
  } else {
    showMessage()
  }
}

function yesFinal() {
  nextStage('celebration')
}
