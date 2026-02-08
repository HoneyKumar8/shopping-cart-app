import { useState } from "react";
import Login from "./components/Login";
import ItemList from "./components/ItemList";
import Navbar from "./components/Navbar";

function App() {
  const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem("token"));

  return (
    <div>
      {loggedIn ? (
        <>
          <Navbar setLoggedIn={setLoggedIn} />
          <ItemList />
        </>
      ) : (
        <Login setLoggedIn={setLoggedIn} />
      )}
    </div>
  );
}

export default App;
