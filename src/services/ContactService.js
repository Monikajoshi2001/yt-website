// Service for handling Send-Message Button Click Event
const SendEmail = (req) => {
    const to = 'priyankajoshi.abcofcommerce@gmail.com';
    const body = encodeURIComponent(`Hi myself ${req.username}`);
    let mailtoLink = "";
    if (to && body) {
        mailtoLink = `mailto:${to}?body=${body}`;
        // Inform the user about the action before redirecting
        const userConfirmation = window.confirm('Are you sure you want to send an email?');

        if (userConfirmation) {
            // Redirect to the user's default email client
            window.location.href = mailtoLink;
        } else {
            // Optionally handle the case when the user cancels the action
            console.log('Email sending cancelled by the user.');
        }
    } else {
        // Inform the user to enter values
        window.alert('Enter Username and password');
    }
};

export default SendEmail;
