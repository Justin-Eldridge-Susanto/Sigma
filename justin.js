document.getElementById('sendButton').addEventListener('click', function() {
  var message = document.getElementById('messageInput').value;
  if (message.trim() !== '') {
    var msgContainer = document.createElement('div');
    msgContainer.classList.add('outgoing-chats');

    var msgImg = document.createElement('div');
    msgImg.classList.add('outgoing-chats-img');
    var img = document.createElement('img');
    img.src = 'user1.png';
    msgImg.appendChild(img);

    var outgoingMsg = document.createElement('div');
    outgoingMsg.classList.add('outgoing-msg');

    var outgoingChatsMsg = document.createElement('div');
    outgoingChatsMsg.classList.add('outgoing-chats-msg');

    var p = document.createElement('p');
    p.textContent = message;

    var time = document.createElement('span');
    time.classList.add('time');
    var currentDate = new Date();
    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm + ' | ' + currentDate.toDateString();
    time.textContent = strTime;

    outgoingChatsMsg.appendChild(p);
    outgoingChatsMsg.appendChild(time);

    outgoingMsg.appendChild(outgoingChatsMsg);
    msgContainer.appendChild(msgImg);
    msgContainer.appendChild(outgoingMsg);

    document.getElementById('msg-page').appendChild(msgContainer);

    document.getElementById('messageInput').value = '';
  }
});