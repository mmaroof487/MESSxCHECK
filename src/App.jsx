import { useState } from "react";
import LogIn from "./components/Login.jsx";
import Home from "./components/Home.jsx";

export default function App() {
 const [loggedIn, setLoggedIn] = useState(true);

 return <>{loggedIn ? <Home /> : <LogIn setLoggedIn={setLoggedIn} />}</>;
}
