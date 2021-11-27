// Contact form send button
const btn = document.getElementById('sendbutton');

// This changes the button text
function changeSendBtnText() {
    btn.textContent = 'Send';
}

// This resets the contact form
function resetContactForm() {
    document.getElementById('contactForm').reset();
}


// This is for when a message has been successfully sent
let messageConfirmation = document.getElementById('message-confirmation');

function hideSentMessage() {
    messageConfirmation.style.display = "none";
}

// This is for when a message does not send
let messageError = document.getElementById('message-error');

function hideErrorMessage() {
    messageError.style.display = "none";
}

// This hides the checkbox once a message has been sent
let checkboxConfirm = document.getElementById('checkbox-confirm');

function ShowCheckbox() {
    checkboxConfirm.style.display = "block";
}

// This is for the option list other, when selected 
// it will make the subject input field appear and if not
// the subject field value will be the select option chosen
$("#subSelect").change(function () {
    if ($(this).val() == "Other") {
        $("#subject").show().val("");
    } else {
        $("#subject").hide().val($("#subSelect").val());
    }
});

// This block is for the contact form, when the submit button is clicked
// the submit text will change to sending
document.getElementById('contactForm')
    .addEventListener('submit', function (event) {
        event.preventDefault();

        btn.textContent = 'Sending...';

        // Emailjs service ID and template ID
        const serviceID = 'ionos-info-email';
        const templateID = 'aph-default-template';

        // This is taking the form values from the html to
        // be assigned to the emailjs template variables
        emailjs.send(serviceID, templateID, {
                "from_name": this.name.value,
                "message": this.message.value,
                "from_email": this.email.value,
                "contact_number": this.number.value,
                "subject_select": $("#subSelect").val(),
                "subject": this.subject.value,
            })
            // Message success block
            .then((response) => {
                btn.textContent = 'Sent';
                messageConfirmation.style.display = "block";
                checkboxConfirm.style.display = "none";
                console.log("Message Has Been Sent", response);
                resetContactForm();
                setTimeout(changeSendBtnText, 10000);
                setTimeout(hideSentMessage, 10000);
                setTimeout(ShowCheckbox, 10000);

                // Message error block
            }, (error) => {
                btn.textContent = 'Error';
                messageError.style.display = "block";
                checkboxConfirm.style.display = "none";
                console.log("Message Failed To Send", error);
                resetContactForm();
                setTimeout(changeSendBtnText, 20000);
                setTimeout(hideErrorMessage, 20000);
                setTimeout(ShowCheckbox, 20000);
            });
    });