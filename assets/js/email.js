function sendMail(contactForm) {
    emailjs.send("service_8lzwnfj", "memory_light5", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value, 
        "contact_request": contactForm.request.value
    })
    .then(
        function(response) {
            console.log("Sucesss", response);
        },
        function(error) {
            console.log("Failed", error);
        }
    );
    return false;
}