import throttle from "lodash.throttle";

const feedbackForm = document.querySelector('.feedback-form');
const LS_KEY = 'feedback-form-state';

if (JSON.parse(localStorage.getItem(LS_KEY))) {
    const formData = JSON.parse(localStorage.getItem(LS_KEY));
    feedbackForm.elements.email.value = formData.email;
    feedbackForm.elements.message.value = formData.message
};

feedbackForm.addEventListener('input', throttle(saveFormData, 500));
function saveFormData (e) {
    const formData = {
        email: feedbackForm.elements.email.value,
        message: feedbackForm.elements.message.value,
    };
    localStorage.setItem(LS_KEY, JSON.stringify(formData));
};

feedbackForm.addEventListener('submit', onSubmit);
function onSubmit(e) {
    e.preventDefault();
    if (feedbackForm.elements.email.value === '' || feedbackForm.elements.message.value === '') {
        return alert('All fields must be filled!')
    }
    console.log(JSON.parse(localStorage.getItem(LS_KEY)))
    localStorage.removeItem(LS_KEY);
    feedbackForm.reset();
};