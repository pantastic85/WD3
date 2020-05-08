function passEqual() {
	if (pass1.value.length > 0 && pass2.value.length > 0) {
		if (pass1.value === pass2.value) {
			pass1.setCustomValidity('');
			pass2.setCustomValidity('');
			error_msg.innerHTML = ``;
			return true;
		} else {
			pass1.setCustomValidity(`Passwords don't match`);
			pass2.setCustomValidity(`Passwords don't match`);
			error_msg.innerHTML = `Please re-enter passwords`;
			return false;
		}
	}
}

function revealPass() {
	pass1.setAttribute('type', 'text');
	pass2.setAttribute('type', 'text');
}

function validateForm() {
	passEqual();
	if (firstName.checkValidity() === false) {
		firstName.setCustomValidity(`Error`);
		error_msg.innerHTML = `Error`;
	} else {
		firstName.setCustomValidity(``);
		error_msg.innerHTML = ``;
	}

	lastName.checkValidity() === false;
	lastName.setCustomValidity(`Error`);
}
