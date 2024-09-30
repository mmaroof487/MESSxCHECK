import Master from "./Master";
import Mess from "./Mess";
import Menu from "./Menu";
import AboutUs from "./Aboutus";
import { useState } from "react";

export default function Home({ setLoggedIn }) {
 const onClick = () => {
  setLoggedIn(false);
 };
 const [link, setLink] = useState(<Master />);

 const homeClick = () => {
  setLink(<Master />);
 };
 const messClick = () => {
  setLink(<Mess />);
 };
 const menuClick = () => {
  setLink(<Menu />);
 };
 const aboutClick = () => {
  setLink(<AboutUs />);
 };

 return (
  <>
   <nav className="bg-gray-800 flex text-white justify-between">
    <div className="flex">
     <div className="p-4 hover:bg-gray-900 cursor-pointer" onClick={homeClick}>
      Home
     </div>
     <div className="p-4 hover:bg-gray-900 cursor-pointer" onClick={messClick}>
      Mess
     </div>
     <div className="p-4 hover:bg-gray-900 cursor-pointer" onClick={menuClick}>
      Menu
     </div>
     <div className="p-4 hover:bg-gray-900 cursor-pointer">
      <a href="https://t.me/rajdappbot" target="_blank">
       Telegram
      </a>
     </div>
     <div className="p-4 hover:bg-gray-900 cursor-pointer" onClick={aboutClick}>
      About Us
     </div>
    </div>
    <div>
     <button onClick={onClick} className="bg-red-600 text-white w-40  h-8 m-3 rounded-sm hover:bg-gray-400 duration-300 ease-in-out flex  justify-center items-center">
      Log Out{" "}
     </button>
    </div>
   </nav>
   <main>{link}</main>
  </>
 );
}
