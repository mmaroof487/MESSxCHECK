export default function Mess() {
 const date = new Date();
 const hour = date.getHours();
 const min = date.getMinutes();
 const lunch = 12;

 return (
  <>
   <main className="bg-gray-900 w-full h-screen text-white px-32 p-8 text-xl">
    <div className="flex justify-between">
     <div>
      Current Time: {hour}:{min}{" "}
     </div>
     <div>Upcoming: Lunch (12:00pm - 02:00pm)</div>
     <div>
      Next Meal In: {lunch - (hour % 13)}:{min}{" "}
     </div>
    </div>
    <div className="mt-8 flex flex-row gap-6">
     <div className="inline-block h-full">Next Meal:</div>
     <ul className="list-none flex gap-4 flex-wrap">
      <div className="flex gap-24">
       <div className="flex flex-col gap-4">
        <li>Chappathi</li>
        <li>Black Channa</li>
        <li>Veg pulao</li>
       </div>
       <div className="flex flex-col gap-4">
        <li>Garlic Dal</li>
        <li>Steamed Rice</li>
        <li>Sambar</li>
       </div>
       <div className="flex flex-col gap-4">
        <li>Pineapple Rasam</li>
        <li>Cabbage Thoran</li>
        <li>Butter Milk</li>
       </div>
       <div className="flex flex-col gap-4">
        <li>Frymes</li>
        <li>Pickle</li>
       </div>
      </div>
     </ul>
    </div>
    <div className="mt-8">Response Time: {lunch - (hour % 13) - 2} Hours</div>

    <div className="flex justify-center gap-2 mt-8">
     <button className="bg-green-600 text-white w-[40%]  h-16 m-3 rounded-sm hover:bg-green-800 duration-300 ease-in-out flex  justify-center items-center">Eating</button>
     <button className="bg-red-600 text-white w-[40%]  h-16 m-3 rounded-sm hover:bg-red-800 duration-300 ease-in-out flex  justify-center items-center">Not Eating</button>
    </div>
   </main>
  </>
 );
}
