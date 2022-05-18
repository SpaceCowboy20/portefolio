import React, { useRef } from "react";
import "./App.css";
import Elementcontainer from "./components/element/elementContainer";
import Profile from "./components/profile/profile";
import Contact from "./components/contact/contact";
import Notif from "./components/notif/notif";

function App() {
  let notifRef = useRef(null);

  return (
    <div className="App">
      <div className="background" />
      <div className="content">
        <Profile />
        <Elementcontainer />
        <Contact notifRef={notifRef} />
      </div>
      <Notif ref={notifRef} />
    </div>
  );
}

export default App;
