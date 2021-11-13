const btn = document.getElementById('sendBtn');

function changeSendBtnText() {
    btn.textContent = 'Send';
}

function resetContactForm() {
    document.getElementById('contactForm').reset();
}

document.getElementById('contactForm')
    .addEventListener('submit', function (event) {
        event.preventDefault();

        btn.textContent = 'Sending...';

        const serviceID = 'aph-gmail-service';
        const templateID = 'my-default-template';

        emailjs.send(serviceID, templateID, {
                "from_name": this.name.value,
                "message": this.message.value,
                "from_email": this.email.value,
                "contact_number": this.number.value,
            })
            .then((response) => {
                btn.textContent = 'Sent';
                console.log("Message Has Been Sent", response);
                resetContactForm();
                setTimeout(changeSendBtnText, 5000);

            }, (error) => {
                btn.textContent = 'Error';
                console.log("Message Failed To Send", error);
                alert(`Oops something went wrong!`);
                resetContactForm();
                setTimeout(changeSendBtnText, 3000);
                //window.location.replace("assets/pages/message_404.html");
            });
    });