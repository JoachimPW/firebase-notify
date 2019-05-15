import * as firebase from 'firebase/app'; 
import '@firebase/messaging';


export const initializeFirebase = () => {
  firebase.initializeApp({
    messagingSenderId: "420238182415"
  });
   
}

export const askForPermissioToReceiveNotifications = async () => {
    try {
      const messaging = firebase.messaging();
      await messaging.requestPermission();
      const token = await messaging.getToken();    
     
      console.log('token:', token);
      
      return token;
    } catch (error) {
      console.error(error);
    }
  }

  export const subscribeToTopic =() => {
    firebase.messaging().subscribeToTopic("all") 
    console.log("Den kører")
    
  }