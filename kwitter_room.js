  //Adicione os links de configurações de seu App Firebase
  const firebaseConfig = {
    apiKey: "AIzaSyAdIn1SFMVpqRqzcIp_I1M6mQwFyTDwJqQ",
    authDomain: "kwiterdb.firebaseapp.com",
    projectId: "kwiterdb",
    storageBucket: "kwiterdb.appspot.com",
    messagingSenderId: "1077490427500",
    appId: "1:1077490427500:web:a9ca3715cc2efb163cda49",
    measurementId: "G-GXHX2D0TTT",
    databaseURL:"https://kwiterdb-default-rtdb.firebaseio.com/"
  };
    // Inicializar Firebase
   firebase.initializeApp(firebaseConfig);
  
  user_name = localStorage.getItem("user_name");
  
  document.getElementById("user_name").innerHTML = "Bem-vindo(a) " + user_name + "!";
  
  function addRoom()
  {
    room_name = document.getElementById("room_name").value;
  
    firebase.database().ref("/").child(room_name).update({
      purpose : "adicionando nome da sala"
    });
  
      localStorage.setItem("room_name", room_name);
      
      window.location = "kwitter_page.html";
  }
  
  function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
         Room_names = childKey;
         console.log("Nome da Sala - " + Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
        document.getElementById("output").innerHTML += row;
      });
    });
  
  }
  
  getData();
  
  function redirectToRoomName(name)
  {
    console.log(name);
    localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
  }
  
  function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
      window.location = "index.html";
  }
  