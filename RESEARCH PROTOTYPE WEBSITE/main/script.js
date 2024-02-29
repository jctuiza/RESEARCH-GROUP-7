const tapToggle = document.querySelector('.tap-toggle')
const tapToggleIcon = document.querySelector('.tap-toggle i')
const dropDown = document.querySelector('.dropdown')

tapToggle.onclick = function () {
  dropDown.classList.toggle('open')
  const Openned = dropDown.classList.contains('open')
  
  tapToggleIcon.classList = Openned
  ? 'fa-solid fa-xmark'
  : 'fa-solid fa-bars'
}