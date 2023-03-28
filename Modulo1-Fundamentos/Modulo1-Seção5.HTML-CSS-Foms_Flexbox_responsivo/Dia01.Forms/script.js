const submitButton = document.getElementById('submit-btn');
const agreement = document.getElementById('agreement');

agreement.addEventListener('change', () => {
    if(agreement.checked === true) {
        submitButton.disable = false;
    } else {
        submitButton.disable = true;
    };
});

submitButton.addEventListener('click', (event) => {
    event.preventDefault();
});