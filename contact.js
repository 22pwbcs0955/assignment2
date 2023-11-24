function submitForm() {
    // Simple form validation
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    if (name === '' || email === '' || message === '') {
        alert('Please fill out all fields');
        return;
    }

    // Display confirmation message
    document.getElementById('contactForm').style.display = 'none';
    document.getElementById('confirmationMessage').style.display = 'block';
}
