import img1 from "./assets/img1.png";
import img2 from "./assets/img4.png";

export default function Master() {
 return (
  <main className="bg-gray-900 w-full h-screen text-white px-32 p-8 text-xl">
   <p>
    The Mess Management System project aims to develop a web application using ReactJS and MySQL to efficiently manage food resources in a student mess. This application will allow students to mark
    their attendance for meals on a given day, providing real-time data on the number of students who will dine. By collecting this data, the system will generate an estimated count of students for
    each meal, enabling the mess administration to prepare an appropriate amount of food, thereby significantly reducing food wastage. This proactive approach ensures that resources are utilized
    effectively, contributing to both cost savings and environmental sustainability. The system is designed to be user-friendly and scalable, addressing the needs of educational institutions looking
    to optimize their mess management processes.
   </p>
   <div className="my-8 flex justify-between">
    <img src={img1} alt="" className="w-[49%] inline-block h-64" />
    <img src={img2} alt="" className="w-[49%] inline-block h-64" />
   </div>
   <p>
    Attendance Students have to give their daily attendance 4 hour prior to mess timings , to have food on that day What if anyone forgot ? He or she will be given access to mess but if it continued
    for 3 to 4 days , he or she will be fined by mess management And same if someone given attendance but didn't have food for 3 to 4 days. The report found special food items like non-vegetarian
    dishes, sweets, salads, generally do not contribute to the wastage as much as staple food like dal, rice and vegetables. "Examples of students throwing plates full of food are common," says the
    students' magazine, Insight. Data compiled by the institute from 2011, which students quoted in the report, states the institute wasted 952 kg of food daily on an average. After 2011, most hostel
    messes were private, so wastage should have gone down. But with addition of two new hostels, it remains almost the same. The report added the lit's not my problem' attitude of students was
    responsible for the wastage.
   </p>
  </main>
 );
}
