let buttons = document.querySelectorAll('button')
Array.prototype.forEach.call(buttons, function(button) {
  button.addEventListener('click', flipSection, false)
})

function flipSection() {
  let body = document.querySelector('.flip-container')
  let active = document.querySelector('.active')
  let activeClass = this.classList.contains('for') ? 'animate' : 'deAnimate'
  body.classList.add(activeClass)
  window.setTimeout(function(e) {
    active.classList.remove('active')
    activeClass === 'animate' ? active.nextElementSibling.classList.add('active') : active.previousElementSibling.classList.add('active')
  }, 200)
  window.setTimeout(function(e) {
    body.classList.remove(activeClass)
  }, 500)
}

document.addEventListener("DOMContentLoaded", function(event) {
  // window.addEventListener("wheel", function(e){
  // }, false )
});