import "./App.css";
import Elementcontainer from "./components/element/elementContainer";
import Profile from "./components/profile";
import Contact from "./components/contact/contact";

function App() {
  return (
    <div className="App">
      <div className="background"></div>
      <div className="content">
        <Profile />
        <Elementcontainer />
        <Contact />
      </div>
    </div>
  );
}

export default App;
