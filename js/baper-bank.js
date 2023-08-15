// all id for work //
const logInButton =  document.getElementById('login-btn');
const emailField = document.getElementById('email-field');
const passwordField =  document.getElementById('password-field');
// all id for work //

// operation for login //
logInButton.addEventListener('click', function(){
  const getEmailField = emailField.value;
  const getPasswordField = passwordField.value;
  
  if(getEmailField === "baperbank123@gmail.com" && getPasswordField === "amarbaperbank"){
    window.location.href = 'bank.html';
  } else{
     alert ('Tui password vule gechos! Tore ami teijjo sontan goshona korlam!!')
  }
});