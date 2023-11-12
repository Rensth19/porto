$(document).ready(function() {
    $('#contactForm').submit(function(e) {
        e.preventDefault();
        alert('Thank you for reaching out! Your message has been sent.');
    });
});
