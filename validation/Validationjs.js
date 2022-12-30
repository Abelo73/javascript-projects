

let passwordError = document.getElementById('password-error');
let validPassword = document.getElementById('valid-password');

let cpasswordError = document.getElementById('cpassword-error');
let validCPassword = document.getElementById('valid-cpassword');

let mobileError = document.getElementById('mobile-error');
let validMobile = document.getElementById('valid-mobile');

let emailError = document.getElementById('email-error');
let validEmail = document.getElementById('valid-email');

let nameError = document.getElementById('name-error');
let validName = document.getElementById('valid-name');
let form = document.getElementById('form');


function validateName(){

	let name = document.getElementById('name').value;
	let pattern = /^[A-Za-z]*\s{1}[A-Za-z]*$/;

	if(name.length == 0){
		form.classList.add('invalid');
		form.classList.remove('valid');

		nameError.innerHTML = "Name is requred";
		nameError.style.color = "red";
		validName.innerHTML = '<i class="fa fa-exclamation-circle"></i>';
		validName.style.color = "red";

	}else if(!name.match(pattern)){
		form.classList.add('invalid');
		form.classList.remove('valid');

		nameError.innerHTML = "Full Name is Required";
		nameError.style.color = "orange";
		validName.innerHTML = '<i class="fa fa-warning"></i>';
		validName.style.color = "orange";
	}else if(name.match(pattern)) {
		form.classList.remove('invalid');
		form.classList.add('valid');

		nameError.innerHTML = "Valid Name";
		nameError.style.color = "green";
		validName.innerHTML = '<i class="fa fa-check-circle"></i>';
		validName.style.color = "green";
	}
}


function validateEmail(){
	let email = document.getElementById('email').value;
	let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

	if(email.length == 0){
		form.classList.remove('Valid');
		form.classList.remove('invalid');
		emailError.innerHTML = "Email is requred";
		validEmail.innerHTML  ='<i class="fa fa-warning"</i>';
		validEmail.style.color = "red";
		emailError.style.color = "red";
		return false;
	}else if(email.match(pattern)){
		form.classList.add('Valid');
		form.classList.remove('invalid');
		emailError.innerHTML = "Your eamil is valid";
		validEmail.innerHTML  ='<i class="fa fa-check-circle"</i>';
		validEmail.style.color = "green";
		emailError.style.color = "green";
		return true;
	}else if(!email.match(pattern)){
		form.classList.remove('Valid');
		form.classList.add('invalid');
		emailError.innerHTML = "Not valid Email!";
		validEmail.innerHTML  ='<i class="fa fa-warning"</i>';
		validEmail.style.color = "orange";
		emailError.style.color = "orange";
		return false;

	}
	
}

function validateMobile(){

	let mobile = document.getElementById('mobile').value;
	let patterns = /^[0-9]{10}$/;


	if(mobile.length === 0){
		form.classList.remove('valid');
		form.classList.add('invalid');

		mobileError.style.color = "red";
		validMobile.style.color = "red";
		mobileError.innerHTML = "Mobile number is requred";
		validMobile.innerHTML = '<i class="fa fa-exclamation-circle"></i>';
		return false;

	}else if(mobile.length < 10){
		    form.classList.remove('valid');
		    form.classList.add('invalid');
		    mobileError.style.color = "orange";
   		    validMobile.style.color = "orange";
   		    mobileError.innerHTML = "minimum number";
		    validMobile.innerHTML = '<i class="fa fa-warning"></i>';
		    return false;
	}
	else if(mobile.length > 10){
		    form.classList.remove('valid');
		    form.classList.add('invalid');
		    mobileError.style.color = "orange";
   		    validMobile.style.color = "orange";
   		    mobileError.innerHTML = "maximum number";
		    validMobile.innerHTML = '<i class="fa fa-warning"></i>';
		    return false;
	}else if(!mobile.match(patterns)){
		    form.classList.add('valid');
		    form.classList.remove('invalid');
   		    mobileError.style.color = "red";
   		    validMobile.style.color = "red";
   		    mobileError.innerHTML = "Only Digits are allowed!";
		    validMobile.innerHTML = '<i class="fa fa-warning"></i>';
		    return false;

	}else if(mobile.match(patterns)){
		    form.classList.add('valid');
		    form.classList.remove('invalid');
   		    mobileError.style.color = "green";
   		    validMobile.style.color = "green";
   		    mobileError.innerHTML = "Valid number";
		    validMobile.innerHTML = '<i class="fa fa-check-circle"></i>';
		    return true;

	}
}

function validatePassword(){

	let password = document.getElementById('password').value;

	if(password.length == 0){
		form.classList.remove('valid');
		form.classList.add('invalid');

		passwordError.style.color = "red";
		validPassword.style.color = "red";
		passwordError.innerHTML = "password is requred";
		validPassword.innerHTML = '<i class="fa fa-exclamation-circle"></i>'

	}else if(password.length < 6){
		form.classList.remove('valid');
		form.classList.add('invalid');

		let left = 6 - password.length;
		passwordError.innerHTML = left + " more characters required";
		passwordError.style.color = "orange";
		validPassword.style.color = "orange";
		validPassword.innerHTML = '<i class="fa fa-warning"></i>'
	}else if(password.length >= 6){
		form.classList.add('valid');
		form.classList.remove('invalid');

		passwordError.style.color = "green";
		validPassword.style.color = "green";
		passwordError.innerHTML = "Your password is valid";
		validPassword.innerHTML = '<i class="fa fa-check-circle"></i>'

	}else{
		form.classList.remove('valid');
		form.classList.remove('invalid');
	}
}

function validateCPassword(){

	let cpassword = document.getElementById('cpassword').value;
	let password = document.getElementById('password').value;

	if(password.length == 0){
		form.classList.remove('valid');
		form.classList.add('invalid');

		cpasswordError.style.color = "red";
		validCPassword.style.color = "red";
		cpasswordError.innerHTML = "password is requred";
		validCPassword.innerHTML = '<i class="fa fa-exclamation-circle"></i>'

	}else if(password.length < 6){
		form.classList.remove('valid');
		form.classList.add('invalid');

		let left = 6 - password.length;
		cpasswordError.innerHTML = left + " more characters required";
		cpasswordError.style.color = "orange";
		validCPassword.style.color = "orange";
		validCPassword.innerHTML = '<i class="fa fa-warning"></i>';
		return false;
	}else if(password.length >= 6){
		if(password === cpassword){

		    form.classList.add('valid');
		    form.classList.remove('invalid');
		    cpasswordError.style.color = "green";
		    validCPassword.style.color = "green";
		    cpasswordError.innerHTML = "password matchs";
		    validCPassword.innerHTML = '<i class="fa fa-check-circle"></i>'
		}else if(password !=cpassword){
			form.classList.remove('valid');
		    form.classList.add('invalid');
   		    cpasswordError.style.color = "warning";
   		    validCPassword.style.color = "warning";
   		    cpasswordError.innerHTML = "password deosnot meatch";
		    validCPassword.innerHTML = '<i class="fa fa-warning"></i>';
		}

	}else{
		form.classList.remove('valid');
		form.classList.remove('invalid');

		cpasswordError.style.color = "blue";
   		    validCPassword.style.color = "blue";
   		    cpasswordError.innerHTML = "no";
		    validCPassword.innerHTML = '<i class="fa fa-warning"></i>'


	}

}