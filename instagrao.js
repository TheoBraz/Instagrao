const firebaseConfig = {
    apiKey: "AIzaSyCaAZBfPuIboQ9tneQSaZLRityGH7_vsBg",
    authDomain: "bibliotecoinstagrao.firebaseapp.com",
    projectId: "bibliotecoinstagrao",
    storageBucket: "bibliotecoinstagrao.appspot.com",
    messagingSenderId: "161591434672",
    appId: "1:161591434672:web:5beef33518f6dabd74ca75",
    measurementId: "G-J9PZGVCSC2"
  };

  function addpeople(){
    userName = document.getElementById("userName").value;
    localStorage.setItem("userName", userName);
    window.location = "InstagraoCasa.html";
} 