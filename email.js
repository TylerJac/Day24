// Initialize EmailJS with keys
emailjs.init("3xe7QvERMbo26l7sp");

// Function to send email
function sendEmail(event) {
    event.preventDefault();
    
    emailjs.sendForm('service_krl1hyi', 'template_cd623zy', '#contact-form')
        .then(function(response) {
            alert('SUCCESS!', response.status, response.text);
        }, function(error) {
            alert('FAILED...', error);
        });
}
