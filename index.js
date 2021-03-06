const navLevelRadios = document.getElementsByClassName('mode-switcher');
for (const levelChoice of navLevelRadios) {
  levelChoice.addEventListener('change', () => switchNavLevel(levelChoice.value));
}

function switchNavLevel(level) {
  // Reset by hiding all nav items
  [...document.querySelectorAll('.nav-root, .nav-team, .nav-site, #sitebar, #title')].forEach(el => el.classList.add('hidden'))
  // Show nav for chosen nav level
  if (level === 'root') {
    [...document.querySelectorAll('.nav-root')].forEach(el => el.classList.remove('hidden'))
  } else if (level === 'team') {
    [...document.querySelectorAll('.nav-team')].forEach(el => el.classList.remove('hidden'))
  } else if (level === 'site') {
    [...document.querySelectorAll('.nav-site, #sitebar, #title')].forEach(el => el.classList.remove('hidden'))
  }
}