
const chatbotButton = document.querySelector('#chatbot-button');
const chatbotContainer = document.querySelector('#chatbot-container');

chatbotButton.addEventListener('click', () => {
    chatbotContainer.classList.toggle('show-chatbot');
});
