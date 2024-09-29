import { useState } from "react";
import LogIn from "./Login.jsx";
import Home from "./Home.jsx";

export default function App() {
 const [loggedIn, setLoggedIn] = useState(false);

 return <>{loggedIn ? <Home setLoggedIn={setLoggedIn} /> : <LogIn setLoggedIn={setLoggedIn} />}</>;
}
