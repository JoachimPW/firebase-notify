import React from 'react';
import logo from './logo.svg';
import './App.css';
import { askForPermissioToReceiveNotifications, subscribeToTopic } from './push-notification';
import '@firebase/messaging';


function App() {  
  return (
    <div className="App">
      <header>            
      </header>
      <button onClick={askForPermissioToReceiveNotifications} >
      NOTIFY
    </button>

    <button onClick={subscribeToTopic}>KOM SÅ</button>
    </div>
  );
}

export default App;

