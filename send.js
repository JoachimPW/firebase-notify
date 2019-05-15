var admin = require("firebase-admin");

var serviceAccount = require("./public/simply-notify-f4ce7-firebase-adminsdk-rmbmy-aeda3d34e7.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://simply-notify-f4ce7.firebaseio.com"
});

var registrationToken = "fFNjB2EAB_c:APA91bFhKQx-FnTLszkGMaWeu1iMsxVDse2I3Kqm71VBPTvnn1eXq1F3mTnrLbnKwRtQJPwaLzWPZWvsGxz1Mvp7iBFECsTki6rK26KAHX4YekHwNlUBb6xdGAY9QwyN_5xEceNFa765";

var payload = {
    notification: {
      title: "This is a Notification",
      body: "This is the body of the notification message."
    }
  };
  
   var options = {
    priority: "high",
    timeToLive: 60 * 60 *24
  }; 

  var topic = "all";

  admin.messaging().subscribeToTopic(registrationToken, topic)
  .then(function(response) {
      console.log("Success" + response);
  })
  .catch(function(error) {
      console.log("Fejl" + error)
  })

  admin.messaging().sendToTopic(topic, payload)
  .then(function(response) {
    console.log("Successfully sent message:", response);
  })
  .catch(function(error) {
    console.log("Error sending message:", error);
  }); 