var inputs = document.getElementsByClassName('mode-switcher');

for (var i = 0; i < inputs.length; i++) {
  var el = inputs[i];
  el.addEventListener('change', function() {
    defineSetting(this.value);
  })
}

function defineSetting(setting) {
  if (setting == 'root') {
    document.getElementById("nav1").classList.remove('hidden');
    document.getElementById("nav2").classList.add('hidden');
    document.getElementById("nav3").classList.add('hidden');
    document.getElementById("sitebar").classList.add('hidden');
    document.getElementById("title").classList.add('hidden');
  } else if (setting == 'team') {
    document.getElementById("nav1").classList.add('hidden');
    document.getElementById("nav2").classList.remove('hidden');
    document.getElementById("nav3").classList.add('hidden');
    document.getElementById("sitebar").classList.add('hidden');
    document.getElementById("title").classList.add('hidden');
  } else if (setting == 'site') {
    document.getElementById("nav1").classList.add('hidden');
    document.getElementById("nav2").classList.add('hidden');
    document.getElementById("nav3").classList.remove('hidden');
    document.getElementById("sitebar").classList.remove('hidden');
    document.getElementById("title").classList.remove('hidden');
  }
}