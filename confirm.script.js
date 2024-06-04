document.addEventListener('DOMContentLoaded', () => {
    let timer = 30;
    const timerElement = document.getElementById('time');
    const notificationElement = document.getElementById('notification');
    const confirmButton = document.getElementById('confirm_button');
    
    const countdown = setInterval(() => {
        if (timer > 0) {
            timer--;
            timerElement.textContent = timer;
        } else {
            clearInterval(countdown);
            notificationElement.textContent = 'Time is up!';
        }
    }, 1000);

    confirmButton.addEventListener('click', () => {
        const confirmationCode = document.getElementById('confirmation_code').value;
        const confirmRadio = document.getElementById('confirm').checked;

        if (confirmationCode && confirmRadio) {
            notificationElement.textContent = 'Code confirmed successfully!';
        } else {
            notificationElement.textContent = 'Please enter the code and select confirm.';
            notificationElement.style.color = 'red';
        }
    });
});
