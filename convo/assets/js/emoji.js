var emojis = JSON.parse('[{"name":null,"width":"72","height":"72"},{"name":null,"width":"72","height":"72"},{"name":null,"width":"72","height":"72"},{"name":null,"width":"72","height":"72"},{"name":null,"width":"72","height":"72"},{"name":null,"width":"72","height":"72"},{"name":null,"width":"72","height":"72"},{"name":null,"width":"72","height":"72"},{"name":null,"width":"72","height":"72"},{"name":null,"width":"72","height":"72"},{"name":null,"width":"72","height":"72"},{"name":null,"width":"72","height":"72"},{"name":null,"width":"72","height":"72"},{"name":null,"width":"72","height":"72"},{"name":null,"width":"72","height":"72"},{"name":null,"width":"72","height":"72"},{"name":null,"width":"72","height":"72"},{"name":null,"width":"72","height":"72"},{"name":null,"width":"72","height":"72"},{"name":null,"width":"72","height":"72"},{"name":"./assets/img/good.gif","width":"72","height":"72"},{"name":"./assets/img/cry.gif","width":"72","height":"72"},{"name":"./assets/img/hug.gif","width":"72","height":"72"},{"name":"./assets/img/laugh.gif","width":"72","height":"72"},{"name":"./assets/img/love.gif","width":"72","height":"72"},{"name":"./assets/img/zzz.gif","width":"72","height":"72"}]');
// Not Made to be production level I made this quickly for testing a websocket server and added the emojies for fun!
// Selectors
var messages = document.querySelector('.msg-container')
var btn = document.querySelector('.submit')
var input = document.querySelector('.input input')
var emojiholder = document.querySelector('.emoji-holder')
var emojiwrapper = document.querySelector('.emoji-wrapper')
var emojibtn = document.querySelector('.emoji-btn')

// Button/Enter Key
btn.addEventListener('click', sendMessage)
input.addEventListener('keyup', function (evt) {
    if (evt.keyCode == 13) sendMessage()
})
emojibtn.addEventListener('click', function (e) {
    e.stopPropagation()
    this.classList.toggle('open')
})
document.body.addEventListener('click', function () {
    emojibtn.classList.remove('open')
})

// Messenger Functions
function sendMessage() {
    var msg = input.value;
    input.value = ''
    writeLine(msg)
}

function addMessage(evt) {
    console.log(evt);
    var msg = evt.data ? JSON.parse(evt.data) : evt;
    writeLine(`${msg.FROM}: ${msg.MESSAGE}`)
}

function writeLine(text) {
    var message = document.createElement('div')
    message.classList.add('emoji-message')
    message.innerHTML = ' ' + text
    messages.appendChild(message)
    messages.scrollTop = messages.scrollHeight;
}

// Load the Emojies
for (var i = 0; i < emojis.length; i++) {
    if (emojis[i].name == null) continue
    emojiwrapper.innerHTML += `
      <img class="emoji-img" src="${emojis[i].name}"/>
   `
}

// Emoji Events
var emojiElements = []
setTimeout(function () {
    emojiElements = document.querySelectorAll('.emoji-popup .emoji-img')
    for (var i = 0; i < emojiElements.length; i++) {
        emojiElements[i].addEventListener('click', function () {
            input.value = `<img style="width:95px; height: 95px; margin: 20px 0px 0px 50px; "; src="${this.getAttribute('src')}"/>`
            sendMessage()
            emojibtn.classList.remove('open')
        })
    }
})
