import Master from "./Master";
import Mess from "./Mess";
import Menu from "./Menu";
import AboutUs from "./Aboutus";

export default function Home({ setLoggedIn }) {
 const onClick = () => {
  setLoggedIn(false);
 };

 return (
  <>
   <nav className="bg-gray-800 flex text-white justify-between">
    <div className="flex">
     <div className="p-4 hover:bg-gray-900">Home</div>
     <div className="p-4 hover:bg-gray-900">Mess</div>
     <div className="p-4 hover:bg-gray-900">Menu</div>
     <div className="p-4 hover:bg-gray-900">About Us</div>
    </div>
    <div>
     <button onClick={onClick} className="bg-red-600 text-white w-40  h-8 m-3 rounded-sm hover:bg-gray-400 duration-300 ease-in-out flex  justify-center items-center">
      Log Out{" "}
     </button>
    </div>
   </nav>
   <main>
    <Master />
   </main>
  </>
 );
}
