  // Button toggle register/sign in //
  // JS actionable elements called by ID when clicking //
  let signupBtn = document.getElementById("signupBtn")
  let signinBtn = document.getElementById("signinBtn")
  let nameField = document.getElementById("nameField")
  let title = document.getElementById("title")

  // nameField function to disable Register/SignUp button on clicking Sign in //
signinBtn.onclick = function(){
  nameField.style.maxHeight = "0"; // hides nameField see css input field//
  title.innerHTML = "Sign In"; // to change the title to match the selection //
  signupBtn.classList.add("disable"); // to grey out signinBtn on signup//
  signinBtn.classList.remove("disable"); // to reactivate signinBtn on signin //
}

// nameField function to disable login/Signin button on clicking Sign Up //
signupBtn.onclick = function(){
  nameField.style.maxHeight = "60px"; // unhides user/nameField see css input field//
  title.innerHTML = "Register"; // to change the title to match the selection //
  signupBtn.classList.remove("disable"); // to change signinBtn colour on signup//
  signinBtn.classList.add("disable"); // to reactivate signinBtn on signin //
}

//Validation //
// starting input field variables //
const nameVal = document.getElementById('nameField');
const emailVal = document.getElementById('email');
const passVal = document.getElementById('password');
const formVal = document.getElementById('form');

// error field variables//
const nameField_error = document.getElementById('nameField_error');
const email_error = document.getElementById('email_error');
const password_error = document.getElementById('password_error');





// add an event listener to the form to validate each of the above via 'e'//
formVal.addEventListener('submit',(e)=>{

    var email_check = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


    //if cond. to check for an empty or null (name) field //
    if(nameField.value === '' || nameField.value == null)

    {
        e.preventDefault(); // prevent reload under 'if' cond.//
        nameField_error.innerHTML = "Username cannot be empty";
    }
    // if there is no error, else cond. to write no error msg //
    else
    {
      nameField_error.innerHTML = "";
    }

    if(emailVal.value.match(email.check))
    {
      e.preventDefault(); // prevent reload under 'if' cond.//
      email_error.innerHTML = "Email cannot be empty";
    }

    else
    {
      email_error.innerHTML = "";
    }

    if(password.value.length <= 5) // at least 6 characters //
    {
      e.preventDefault(); // prevent reload under 'if' cond.//
      password_error.innerHTML = "Password cannot be less than 6..";
    }

    if(password.value.length >= 20) // less than 20 characters //

    {
      e.preventDefault(); // prevent reload under 'if' cond.//
      password_error.innerHTML = "Password cannot be more than 19..";
    }

    if(password.value === 'passoword') // less than 20 characters //

    {
      e.preventDefault(); // prevent reload under 'if' cond.//
      password_error.innerHTML = "Password cannot be 'password'";
    }

    else
    {
      password_error.innerHTML = "";
    }

})
