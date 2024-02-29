const showToggle = document.querySelector('.show-toggle')
const showToggleIcon = document.querySelector('.show-toggle i')
const workoutList = document.querySelector('.workout-list')

showToggle.onclick = function () {
  workoutList.classList.toggle('open')
  const Openned = workoutList.classList.contains('open')
  
  showToggleIcon.classList = Openned
  ? 'fa-solid fa-xmark'
  : 'fa-solid fa-bars'
}