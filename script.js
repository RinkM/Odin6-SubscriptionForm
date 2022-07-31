// ID signUpForm


const form = document.getElementById('signUpForm');
form.addEventListener('submit',console.log("Submitted") )

const formData = new FormData(form);

const output = document.getElementById('output');




document.querySelector('signUpForm').addEventListener('submit', function(e) {
    e.preventDefault();
    let x = document.querySelector('form.form').elements;
    console.log("Username: ", x['userid'].value);
    console.log("Password: ", x['pwd'].value);
  });


const submitBtn = document.querySelector('.submitBtn');
submitBtn.addEventListener('click', ()=>{buttonPress(0);});


function submitData (){
    for (const [key, value] of formData) {
        output.textContent += `${key}: ${value}\n`;
      }

}
