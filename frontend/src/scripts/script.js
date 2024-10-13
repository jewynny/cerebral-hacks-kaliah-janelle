// Function to open Kindo chatbot link in a new window
function openKindoChatbot() {
    window.open('https://app.kindo.ai/?workflowId=c1c9d8fc-d8e3-4b42-9dc2-24398616e0b0', '_blank');
}

// Event listener to trigger the chatbot function on button click
document.addEventListener('DOMContentLoaded', function() {
    const chatButton = document.getElementById('chat-button');
    chatButton.addEventListener('click', openKindoChatbot);
});
