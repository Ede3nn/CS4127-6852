const form = document.getElementById('enquiry-form');

if(form) {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const topicInput = document.getElementById('topic');
    const messageInput = document.getElementById('message');
    const status = document.getElementById('form-status');


    function showError(input, message) {
        document.getElementById(input.id + '-error').textContent = message;
        input.classList.add('invalid');
    }

    function clearError(input) {
        document.getElementById(input.id + '-error').textContent = '';
        input.classList.remove('invalid');
    }

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        let valid = true;

    if (nameInput.value.trim() .length < 2) {
        showError(nameInput, 'Please enter your full name.');
        valid = false;
    } else {
        clearError(nameInput);
    }

    const emailValue = emailInput.value.trim();
    const atPosition = emailValue.indexOf('@');

    if (atPosition < 1 || emailValue.indexOf('.', atPosition + 2) === -1) {
        showError(emailInput, 'Please enter a valid email address.');
        valid = false;
    } else {
        clearError(emailInput);
    }


        // Check the name isn't empty.
        // name check
        // email check
        // topic check
        // message check

    }); // Closes the submit handler
}       // Closes if (form)