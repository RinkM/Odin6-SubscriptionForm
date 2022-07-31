// ID signUpForm

const firstNameError = document.getElementById("firstNameError")
const lastNameError = document.getElementById("lastNameError")
const emailError = document.getElementById("emailError")
const phoneError = document.getElementById("phoneError")
const passwordError = document.getElementById("passwordError")
const passwordConfirmError = document.getElementById("passwordConfirmError")

const phoneReg = /[0-9]{3}-[0-9]{3}-[0-9]{4}/
const emailReg = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/


const form = document.getElementById('signUpForm');

let userInfo = {}

const verify = () => {

  if (phoneReg.test(userInfo.phone)==false){
    phoneError.style.display = "block";
    return false
  }
  if (userInfo.password !== userInfo.passwordConfirm){
    passwordConfirmError.style.display = "block";
    return false
  }
  if (emailReg.test(userInfo.email)==false){
    emailError.style.display = "block";
    return false
  }
  return true

}


form.addEventListener('submit', function(e) {
  e.preventDefault();
  const formData = new FormData(this);
  const entries = formData.entries();
  for (var input of entries) {
    (userInfo[input[0]] = input[1]);
  }
  if (verify()){alert("Thanks for your interest! We will contact you soon.")}
  });






