import { useState } from "react";

export default function Login({ setLoggedIn }) {
 const [email, setEmail] = useState("");
 const [pass, setPass] = useState("");

 const handleSubmit = (e) => {
  e.preventDefault();
 };

 const emailChange = (e) => {
  setEmail(e.target.value);
 };

 const passChange = (e) => {
  setPass(e.target.value);
 };

 const validEmail = new RegExp("^[a-zA-Z0-9._:$!%-]+@srmist.edu.in$");
 const onSubmit = () => {
  console.log("submitted");
  if (!validEmail.test(email)) {
   console.log("invalid email");
  } else {
   console.log("valid");
   setLoggedIn(true);
  }
 };
 return (
  <>
   <section className="bg-gray-50 dark:bg-gray-900 h-screen">
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
     <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
      <span className="material-symbols-outlined mx-2">🚀</span>
      MESSxCHECK
     </a>
     <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
       <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">Sign in to your account</h1>
       <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
        <div>
         <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Your email
         </label>
         <input
          type="email"
          name="email"
          value={email}
          onChange={emailChange}
          id="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="username@srmist.edu.in"
          required=""
         />
        </div>
        <div>
         <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          <div className="flex justify-between">Password</div>
         </label>
         <input
          name="password"
          id="password"
          value={pass}
          onChange={passChange}
          placeholder="Password"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required=""
         />
        </div>
        <div className="flex items-center justify-between">
         <div className="flex items-start">
          <div className="flex items-center h-5">
           <input
            id="remember"
            aria-describedby="remember"
            type="checkbox"
            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
            required=""
           />
          </div>
          <div className="ml-3 text-sm">
           <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">
            Remember me
           </label>
          </div>
         </div>
         <a href="#" className="text-sm font-medium text-gray-500 hover:underline dark:text-primary-500">
          Forgot password?
         </a>
        </div>
        <div className="py-5">
         <button type="submit" onClick={onSubmit} className="text-dark font-bold w-36 h-8 m-auto block rounded-md  bg-gray-400 hover:bg-gray-900 hover:text-white duration-300">
          Sign in
         </button>
        </div>
       </form>
      </div>
     </div>
    </div>
   </section>
  </>
 );
}
