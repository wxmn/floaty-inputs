var inputs = document.querySelectorAll('input.floaty')

// Add classes to floaty inputs for events: focus, blur, keyup, and empty
Array.prototype.forEach.call(inputs, function(input) {
  input.addEventListener('focus', function() {
    input.classList.add('focused')
  })
  input.addEventListener('blur', function() {
    input.classList.remove('focused')
  })
  input.addEventListener('keyup', function() {
    if (input.value.length === 0) {
      input.classList.add('empty')
    } else {
      input.classList.remove('empty')
      input.classList.remove('error')
    }
  })
})

// Call on page load in case there are existing values;
Array.prototype.forEach.call(inputs, function(input) {
  if (input.value.length === 0) {
    input.classList.add('empty')
  } else {
    input.classList.remove('empty')
  }
})