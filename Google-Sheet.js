const scriptURL = 'https://script.google.com/macros/s/AKfycbxu09aWpZcleyZTeN-G4VsLwY81FpbYsIrue93vXrnqWrH09j1o6SFSzy-blFDu5cM/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  
  e.preventDefault()
  
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! Form is submitted" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
