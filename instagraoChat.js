userName = localStorage.getItem("userName");
document.getElementById("userName").innerHTML = "Bem-vindo(a) " + userName + "!";
function addChat() {
    chatName = document.getElementById("chatName").value;
    firebase.database().ref("/").child(chatName).update({
        purpose: "Adicionando chat"
    });
    localStorage.setItem("roomName", chatName);
    console.log("foi adicionado " + chatName);
    getData();
}
function LogOut(){
    localStorage.removeItem("userName");
    localStorage.removeItem("roomName");
    window.location = "index.html";
}
function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            chatNames = childKey;
            console.log("Room name" + chatNames);
            row = "<div class='chatName' id=" + chatNames + " onclick='openRoom(this.id)' >#" + chatNames + "</div><hr>";
            document.getElementById("output").innerHTML += row;
        });
    });
}
function openRoom(chatName) {
    localStorage.setItem("roomName", chatName);
    window.location = "instagraoConversa.html";
}