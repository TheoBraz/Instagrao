roomName = localStorage.getItem("roomName")
userName = localStorage.getItem("userName")
function getData() {
    firebase.database().ref("/" + roomName).on('value', function (snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key; childData = childSnapshot.val();

            if (childKey != "purpose") {
                firebaseMessageId = childKey;
                messageData = childData;

                console.log(firebaseMessageId);
                console.log(messageData);


                name = messageData['name'];
                message = messageData['message'];
                like = messageData['like'];

                nameWithTag = "<h4> " + name + "</h4>";
                messageWithTag = "<h4 class='message_h4'>" + message + "</h4>";
                like_button = "<button class='btn btn-warning' id=" + firebaseMessageId + " value=" + like + " onclick='updateLike(this.id)'>";
                spanWithTag = "<span class='glyphicon glyphicon-thumbs-up'>Like: " + like + "</span></button><hr>";


                row = nameWithTag + messageWithTag + like_button + spanWithTag;
                document.getElementById("output").innerHTML += row;

            }
        });
    });
}
function sendMeme() {
    var novaMensagem = document.getElementById("sendMsg").value;
    firebase.database().ref(roomName).push({
        name: userName,
        message: novaMensagem,
        like: 0
    })
    document.getElementById("sendMsg").value = "";
    getData();
}