function submitForm() {
    const passwordInput = document.querySelector('.password-input');
    const password = passwordInput.value;

    if (password === 'jasmine0212') {
        window.location.href = 'main1.html';
    } 
    else if (password === 'rapunzel1304') {
        window.location.href = 'main2.html';
    } 
    else if(password === 'lampcode05') {
        window.location.href = 'main3.html';
    } 
    else if(password === 'rising05') {
        window.location.href = 'main.html';
    } 
    else {
        alert('dude Incorrect password. Please try again or go back.');
    }
}