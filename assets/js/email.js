function sendMail(contactForm) {
    emailjs.send("service_8lzwnfj", "memory_light5", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "contact_request": contactForm.request.value
    })
    .then(
        function(response) {
            Swal.fire('Request submitted!')
        },
        function(error) {
            Swal.fire('Oops, something went wrong...')
        }
    );
    return false;
}
