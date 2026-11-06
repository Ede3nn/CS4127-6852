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

    // used to check if the topic is chosen or empty
    if (topicInput.value === '') {
        showError(topicInput, ' Please select a topic.');
        valid = false;
    } else {
        clearError(topicInput);
    }

    // Check the message isn't empty
    if (messageInput.value.trim() === '') {
        showError(messageInput, 'Please enter your message.');
        valid = false;
    } else {
        clearError(messageInput);
    }


        // Check the name isn't empty.
        // name check
        // email check
        // topic check
        // message check

            // if all inputs are valid, shows a success message
            if (valid) {
            status.textContent = 'Your enquiry has been submitted successfully!';
            status.style.color = 'green';

            // Clear all form inputs
            form.reset();

            
            } else {
                status.textContent = 'Please correct the errors in the form.';
                status.style.color = 'red';
            }

    }); // Closes the submit handler
}       // Closes if (form)