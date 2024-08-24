document.getElementById('submitEmail').addEventListener('click', function (event) {

  event.preventDefault()

  let emailInput = document.getElementById('email');
  let emailError = document.getElementById('emailError');
  let email = emailInput.value.trim();
  let modal = document.getElementById('modal');


  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailRegex.test(email) && email.endsWith('@gmail.com')) {
    emailError.style.display = 'none'
    emailInput.style.cssText = 'background-color: none; border-color: none;'
    let p = document.getElementById('confirmationEmail')
    p.innerHTML = `A confirmation email has been sent to <strong>${email}.</strong> Please open it and click the button inside to confirm your subscription.`
    modal.style.display = 'flex'

  } else if (email === '') {
    emailError.style.cssText = 'display: block; color: rgba(247, 94, 81);';
    emailInput.style.cssText = 'background-color: rgba(247, 94, 81, 0.5); border-color: red;';
    emailError.textContent = 'The Email field is empty';
  } else {
    emailError.style.cssText = 'display: block; color: rgba(247, 94, 81)'
    emailInput.style.cssText = ' color: rgba(247, 94, 81); background-color: rgba(247, 94, 81, 0.5); border-color: rgba(247, 94, 81); gba(247, 94, 81);'
    emailError.textContent = 'Please enter a valid Gmail.';
  }
});


document.getElementById('closeModal').addEventListener('click', () => {
  modal.style.display = 'none'
})
