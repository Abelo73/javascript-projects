

let emailError = document.getElementById('email-error');
let validEmail = document.getElementById('valid-email');


function validateEmail(){
	let email = document.getElementById('email').value;
	let form = document.getElementById('form');
	let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,4}$/;


	if(email.match(pattern)){
		form.classList.add('valid');
		form.classList.remove('invalid');
		validEmail.innerHTML = '<i class="fa fa-check-circle"</i>'
		validEmail.style.color = "green";
		emailError.innerHTML = "Valid Email";
		emailError.style.color = "green"
	}else{
		form.classList.add('invalid');
		form.classList.remove('valid');

		emailError.innerHTML = "Invalid Email";
		emailError.style.color = "red";
		validEmail.style.color = "red";
		validEmail.innerHTML = '<i class="fa fa-close"</i>'
	}
	if(email.length == 0){
		form.classList.remove('invalid');
		form.classList.remove('valid');

		emailError.innerHTML = "Email is requred";
		emailError.style.color = "red";
		validEmail.style.color = "red";
		validEmail.innerHTML = '<i class="fa fa-exclamation-circle"</i>'
	}
}