// import Link from "next/link";
// import React from "react";

// function Login() {
//   const handleSubmit = (e) => {
//     const [credentals, setCredentals] = useState({ email: " ", password: " " });
//     e.preventDeault();
//   };

//   const handleChange = (e) => {
//     setCredentals({ ...credentals, [e.target.name]: e.target.value });

//   };

//   return (
//     <div
//       style={{
//         height: "90vh",
//         backgroundImage:
//           'url("https://images.pexels.com/photos/326278/pexels-photo-326278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
//         backgroundSize: "cover",
//       }}
//       className="flex justify-center items-center"
//     >
//       <div className="w-full container max-w-md ">
//         <form
//           onSubmit={handleSubmit}
//           className="bg-gray-100 dark:bg-gray-900 dark:text-gray-100 border-gradient rounded-lg shadow-2xl px-8 pt-6 pb-8 mb-4"
//         >
//           <div className="mb-4">
//             <label
//               htmlFor="email"
//               className="block text-gray-700  dark:text-gray-300 text-sm font-bold mb-2"
//             >
//               Username
//             </label>
//             <input
//               onChange={handleChange}
//               type="text"
//               name="email"
//               value=""
//               placeholder="Enter your email/username"
//               required
//               className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 focus:border-indigo-700 text-gray-700 dark:text-gray-100  leading-tight focus:outline-none focus:shadow-outline"
//             />
//           </div>
//           <div className="mb-6">
//             <label
//               htmlFor="email"
//               className="block text-gray-700  dark:text-gray-300 text-sm font-bold mb-2"
//             >
//               Password
//             </label>
//             <input
//               onChange={handleChange}
//               type="password"
//               name="email"
//               value=""
//               placeholder="***********"
//               required
//               className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 focus:border-indigo-700 text-gray-700 dark:text-gray-100  leading-tight focus:outline-none focus:shadow-outline"
//             />
//           </div>
//           <div className="flex items-center justify-between"></div>
//           <button
//             type="submit"
//             className="border text-gray-900 dark:text-gray-100 font-bold dark:border-gray-400 border-gray-900 rounded mr-2 p-2 hover:bg-gradient-to-r from-indigo-700 via-violet-700 to-orange-700  hover:text-gray-100"
//           >
//             Login
//           </button>
//           <Link href={"/signup"} style={{ all: "unset" }}>
//             <button className="border text-gray-900 dark:text-gray-100 font-bold dark:border-gray-400 border-gray-900 rounded mr-2 p-2 hover:bg-gradient-to-r from-indigo-700 via-violet-700 to-orange-700  hover:text-gray-100">
//               New User?
//             </button>
//           </Link>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Login;

import Link from "next/link";
import React, { useState } from "react";

function Login() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(credentials);
  };

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <div
      style={{
        height: "90vh",
        backgroundImage:
          'url("https://images.pexels.com/photos/326278/pexels-photo-326278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
        backgroundSize: "cover",
      }}
      className="flex justify-center items-center"
    >
      <div className="w-full container max-w-md">
        <form
          onSubmit={handleSubmit}
          className="bg-gray-100 dark:bg-gray-900 dark:text-gray-100 border-gradient rounded-lg shadow-2xl px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
            >
              Username
            </label>
            <input
              onChange={handleChange}
              type="email"
              name="email"
              value={credentials.email}
              placeholder="Enter your email/username"
              required
              className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 focus:border-indigo-700 text-gray-700 dark:text-gray-100 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
            >
              Password
            </label>
            <input
              onChange={handleChange}
              type="password"
              name="password"
              value={credentials.password}
              placeholder="***********"
              required
              className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 focus:border-indigo-700 text-gray-700 dark:text-gray-100 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="border text-gray-900 dark:text-gray-100 font-bold dark:border-gray-400 border-gray-900 rounded mr-2 p-2 hover:bg-gradient-to-r from-indigo-700 via-violet-700 to-orange-700 hover:text-gray-100"
            >
              Login
            </button>
            <Link href={"/signup"} style={{ all: "unset" }}>
              <button className="border text-gray-900 dark:text-gray-100 font-bold dark:border-gray-400 border-gray-900 rounded mr-2 p-2 hover:bg-gradient-to-r from-indigo-700 via-violet-700 to-orange-700  hover:text-gray-100">
                New User?
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
