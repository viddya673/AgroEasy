var firebaseConfig = {
    apiKey: "AIzaSyAIwOxFhwqrg4gZifj6vrLVrSEziVm5Yng",
    authDomain: "agro-easy-firebase.firebaseapp.com",
    databaseURL: "https://agro-easy-firebase-default-rtdb.firebaseio.com",
    projectId: "agro-easy-firebase",
    storageBucket: "agro-easy-firebase.appspot.com",
    messagingSenderId: "688165203405",
    appId: "1:688165203405:web:6d17118a3612ca96ef6884",
    measurementId: "G-08K2G89QR8"
  };

  //initialize firebase
  firebase.initializeApp(firebaseConfig);

  //reference for database
  //const sensorData = firebase.database.ref("SensorData")


  function getData()
  {
    //   user_name = document.getElementById("userName").value;
      firebase.database().ref("SensorData").on('value',function(snapshot)
      {
          snapshot.forEach(function(getSensotData)
          {
              sensorData=getSensotData.val();
              
              var humidity=sensorData["Humidity"];
              var moisture=sensorData["Moisture"];
              var temperature=sensorData["Temperature"];

              console.log(humidity+" "+moisture+" "+temperature);
          }
          )
      }
      )
  }

  getData();