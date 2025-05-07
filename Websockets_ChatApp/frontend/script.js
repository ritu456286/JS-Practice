const socket = io("http://localhost:3000")

const form = document.getElementById("chat-form")
const input = document.getElementById('msg')
const allMessages = document.getElementById('messages')

socket.on("chat message", msg => {
    const p = document.createElement("p")
    p.innerText = msg;
    allMessages.appendChild(p);
})


form.addEventListener("submit", (e) => {
    e.preventDefault();
    if(input.value){
        socket.emit('chat message', input.value);
        input.value = '';
    }
});

