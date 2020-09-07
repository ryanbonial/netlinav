const navLevelRadios = document.getElementsByClassName('mode-switcher');
for (const levelChoice of navLevelRadios) {
  levelChoice.addEventListener('change', () => switchNavLevel(levelChoice.value));
}

function switchNavLevel(level) {
  // Reset by hiding all nav items
  [...document.querySelectorAll('#nav1, #nav2, #nav3, #sitebar, #title')].forEach(el => el.classList.add('hidden'))
  // Show nav for chosen nav level
  if (level === 'root') {
    document.querySelector('#nav1').classList.remove('hidden')
  } else if (level === 'team') {
    document.querySelector('#nav2').classList.remove('hidden')
  } else if (level === 'site') {
    [...document.querySelectorAll('#nav3, #sitebar, #title')].forEach(el => el.classList.remove('hidden'))
  }
}