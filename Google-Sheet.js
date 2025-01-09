const scriptURL = 'https://script.google.com/macros/s/AKfycbxaiz9nhd4M-pGywi3VsfbF3wQjlEcAGgIYcFh5MW8HdP0rtSNBJpX_ZR2LPSi40BLw/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  
  e.preventDefault()
  
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! Form is submitted" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
