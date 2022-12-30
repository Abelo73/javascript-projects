

let passwordError = document.getElementById('password-error');
let validPassword = document.getElementById('valid-password');


function validatePassword(){
	let password = document.getElementById('password').value;
	let form = document.getElementById('form');


	if(password.length === 0){
		form.classList.remove('valid');
		form.classList.add('invalid');

		passwordError.innerHTML = "passsword required";
		passwordError.style.color = "red";
		validPassword.innerHTML = '<i class="fa fa-warning"</i>';
		validPassword.style.color = "red";

	}else if(password.length < 6){
		form.classList.add('invalid');
		form.classList.remove('valid');


		let left = 6 - password.length;

		passwordError.innerHTML =left +" more characters required";
		passwordError.style.color = "orange";
		validPassword.innerHTML = '<i class="fa fa-exclamation-circle"</i>';
		validPassword.style.color = "orange";


	}else if(password.length >= 6){

		form.classList.remove('invalid');
		form.classList.add('valid');

		passwordError.innerHTML = "password valid";
		passwordError.style.color = "green";
		validPassword.innerHTML = '<i class="fa fa-check-circle"</i>';
		validPassword.style.color = "green";
		validPassword.style.fontSize = "20px";
	}
}