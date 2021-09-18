// Contact form with emailJs
function sendMail(contactForm) {
    emailjs.send("service_8lzwnfj", "memory_light5", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "contact_request": contactForm.request.value
    })
    .then(
        function(response) {
            // Sweet Alert
            Swal.fire('Request submitted!');
        },
        function(error) {
            // Sweet Alert
            Swal.fire('Oops, something went wrong...');
        }
    );
    return false;
}
