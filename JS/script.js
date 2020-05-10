//	Set errors array for error_msg empty
var errors = new Array(' ', ' ', ' ', ' ');

//	Print all errors to error_msg div or enable submit button if no errors
function printErrors() {
	error_msg.innerHTML = errors[0] + '<br>' + errors[1] + '<br>' + errors[2] + '<br>' + errors[3];
	if (errors[0] === '' && errors[1] === '' && errors[2] === '' && errors[3] === '') {
		error_msg.innerHTML = '';
		submit.style.background = 'goldenrod';
		submit.style.color = 'black';
		submit.disabled = false;
	} else {
		submit.style.background = 'grey';
		submit.style.color = 'white';
		submit.disabled = true;
	}
}

//	Check if at least 2 characters in firstName or error
function checkName1() {
	if (firstName.value.length > 1) {
		firstName.style.border = '';
		errors[0] = ``;
		printErrors();
		return true;
	} else {
		firstName.style.border = '2px solid red';
		errors[0] = `Please enter a valid first name`;
		printErrors();
		return false;
	}
}

//	Check if at least 2 characters in lastName or error
function checkName2() {
	if (lastName.value.length > 1) {
		lastName.style.border = '';
		errors[1] = ``;
		printErrors();
		return true;
	} else {
		lastName.style.border = '2px solid red';
		errors[1] = `Please enter a valid last name`;
		printErrors();
		return false;
	}
}

//	Check if email addresses match or error
function emailEqual() {
	if (email1.value.length > 0 && email2.value.length > 0) {
		if (email1.value === email2.value) {
			email1.style.border = '';
			email2.style.border = '';
			errors[2] = ``;
			printErrors();
			return true;
		} else {
			email1.style.border = '2px solid red';
			email2.style.border = '2px solid red';
			errors[2] = `Email addresses don't match`;
			printErrors();
			return false;
		}
	}
}

//	Check if passwords match or error
function passEqual() {
	if (pass1.value.length > 0 && pass2.value.length > 0) {
		if (pass1.value === pass2.value) {
			pass1.style.border = '';
			pass2.style.border = '';
			errors[3] = ``;
			printErrors();
			return true;
		} else {
			pass1.style.border = '2px solid red';
			pass2.style.border = '2px solid red';
			errors[3] = `Passwords don't match`;
			printErrors();
			return false;
		}
	}
}

//	Run all validations on submit prior to post. Error on any failures.
function validateForm() {
	if (checkName1() === true && checkName2() === true && emailEqual() === true && passEqual() === true) {
		alert('Form successfully submitted');
		return true;
	} else {
		alert('Form submission unsuccessful');
		return false;
	}
}
