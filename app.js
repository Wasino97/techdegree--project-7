const alertBannner = document.getElementById('alert');
const user = document.getElementById('userField');
const message = document.getElementById('messageField');
const send = document.getElementById('send');


//Alert Banner

alertBannner.innerHTML = 
    `
    <div class ='alert-banner'>
        <p><strong>Alert:</strong> You have <strong>6</strong> overdue tasks to complete</p>
        <p class = 'alert-banner-close'>x</p>
    </div>
    `
;

alertBannner.addEventListener('click', e => {
    const element = e.target;
    if (element.classList.contains('alert-banner-close')) {
        alertBannner.style.display = 'none'
    }
})

//Message Section

send.addEventListener('click', () => {
    if (user.value === '' && message.value === '') {
        alert('Please fill out user and message fields before sending');
    } else if (user.value === '' ) {
        alert('Please fill out user field before sending');
    } else if (message.value === '') {
        alert('Please fill out message field before sending');
    } else {
        alert(`Message successfully sent to: ${user.value}`);
    }
});