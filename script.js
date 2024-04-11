const render = () => {

    const sendMessage = (userNumber) =>{

        let messageInput;
        let userClass;

        if (userNumber === 1) {
            messageInput = document.getElementById("messageInput1");
            userClass = "sendUser1";
        } else if ( userNumber === 2){
            messageInput = document.getElementById("messageInput2");
           userClass = "sendUser2";
        }

        const messageText = messageInput.value.trim();
        if (messageText !== "") {
            const chat = document.getElementById("chat");
            const newMessage = document.createElement("div");
            newMessage.classList.add("message",userClass);
            newMessage.textContent = messageText;
            chat.appendChild(newMessage);
            messageInput.value="";
        } else {
            alert("Por favor, escribe un mensaje antes de enviar.")
        }     
    } 
    document.getElementById("sendUser1").addEventListener("click", function() {
        sendMessage(1);
    });
    document.getElementById("sendUser2").addEventListener("click", function() {
        sendMessage(2);
    });
};

document.addEventListener("DOMContentLoaded", render);