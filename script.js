// Setup and start animation! name
var typed = new Typed('#name', {
    strings: ['Omkar,'],
    typeSpeed: 80,
});

// Setup and start animation! 'Web Developer', 'Linux Administrator', 'Java Developer'
var typed = new Typed('#element', {
    strings: [ 'Linux Administrator','Network Management','Web Developer', 'Java Developer'],
    typeSpeed: 50,
    backSpeed: 0,
    loop: true
});

// Chatbot functionality
const chatbotButton = document.getElementById('chatbot-button');
const chatbotContainer = document.getElementById('chatbot-container');
const closeChatButton = document.getElementById('close-chat-btn');
const chatbotOverlay = document.getElementById('chatbot-overlay');

// Function to open the chatbot
function openChat() {
  chatbotContainer.style.display = 'block';  // Show the chat
  chatbotOverlay.style.display = 'block';   // Show the overlay
  setTimeout(() => {
    chatbotContainer.style.opacity = '1';   // Fade-in effect for chatbot
    chatbotContainer.style.transform = 'translateY(0)';  // Slide-up effect
    chatbotOverlay.style.opacity = '1';     // Fade-in effect for overlay
  }, 10);  // Delay to ensure display is set before opacity transition
  chatbotButton.style.display = 'none';    // Hide the button
}

// Function to close the chatbot
function closeChat() {
  chatbotContainer.style.opacity = '0';    // Fade-out effect for chatbot
  chatbotContainer.style.transform = 'translateY(120px)';  // Slide-down effect
  chatbotOverlay.style.opacity = '0';     // Fade-out effect for overlay
  setTimeout(() => {
    chatbotContainer.style.display = 'none';  // Hide the chat after fading out
    chatbotOverlay.style.display = 'none';   // Hide the overlay
  }, 1000);  // Wait for the fade-out transition to complete
  chatbotButton.style.display = 'block';    // Show the 'Chat with us' button again
}

// Open chat automatically when the page loads
window.onload = openChat;

// Close the chat when the 'X' button is clicked
closeChatButton.addEventListener('click', closeChat);

// Optional: Close chat if overlay is clicked
chatbotOverlay.addEventListener('click', () => {
  closeChatButton.click();  // Simulate click on close button
});

// Make sure the 'Chat with us' button reopens the chat after it is closed
chatbotButton.addEventListener('click', openChat);
