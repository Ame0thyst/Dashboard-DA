document.addEventListener('DOMContentLoaded', function() {
    const chatBubble = document.getElementById('chatBubble');
    const modal = document.getElementById('exampleModal');
    const openModalButtons = document.querySelectorAll('[data-toggle="modal"]');
    const closeModalButtons = modal.querySelectorAll('[data-dismiss="modal"]');
    const modalTitle = modal.querySelector('.modal-title');
    const recipientInput = modal.querySelector('#recipient-name');
    const form = document.querySelector('.form-body');

    function showBubble() {
        chatBubble.style.display = 'block';
        setTimeout(() => {
            chatBubble.style.display = 'none';
        }, 4000);
    }

    setInterval(showBubble, 2000);

    openModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const recipient = button.getAttribute('data-whatever');
            modalTitle.textContent = ``;
            recipientInput.value = recipient;
            modal.classList.add('show');

            // Reset form values
            resetForm();
        });
    });

    closeModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            modal.classList.remove('show');
        });
    });

    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.classList.remove('show');
        }
    });

    // Load EmailJS SDK
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';
    script.onload = function() {
        emailjs.init({
            publicKey: "7HJFP3xUcoiIdz-IA"
        });
    };
    document.head.appendChild(script);

    // Handle form submission
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Get form data
        var email = document.getElementById('Email-name-sander').value;
        var message = document.getElementById('message-text').value;

        // Send email using EmailJS
        emailjs.send("service_jpza6ra","template_yc4299p",{
            from_email: email,
            message: message
        }).then(function(response) {
            console.log("SUCCESS!", response.status, response.text);
            alert("Feedback sent successfully!");
            modal.classList.remove('show'); // Close modal after successful submission

            // Reset form values
            resetForm();
        }, function(error) {
            console.log("FAILED...", error);
            alert("Failed to send feedback. Please try again.");
        });
    });

    // Function to reset form values manually
    function resetForm() {
        document.getElementById('Email-name-sander').value = '';
        document.getElementById('message-text').value = '';
    }
});
