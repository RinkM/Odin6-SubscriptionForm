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
  let verified = [];
  if (!userInfo.firstName){
    firstNameError.style.display = "block";
    verified.push(0)
  }else{firstNameError.style.display = "none";}

  if (userInfo.lastName){
      lastNameError.style.display = "none";
    } else {lastNameError.style.display = "block";
      verified.push(0)}


  if (phoneReg.test(userInfo.phone)==false){
    phoneError.style.display = "block";
    verified.push(0)
  }else{phoneError.style.display = "none";}

  if (userInfo.password !== userInfo.passwordConfirm){
    passwordConfirmError.style.display = "block";
    verified.push(0)
  }else{passwordConfirmError.style.display = "none";}

  if (emailReg.test(userInfo.email)==false){
    emailError.style.display = "block";
    verified.push(0)
  }else{emailError.style.display = "none";}
  
  if (verified.includes(0))
    {return false
    }else {return true}
    

}


form.addEventListener('submit', function(e) {
  e.preventDefault();
  const formData = new FormData(this);
  const entries = formData.entries();
  for (var input of entries) {
    (userInfo[input[0]] = input[1]);
  }
  console.log(userInfo)
  if (verify()){alert("Thanks for your interest! We will contact you soon.")}
  });






