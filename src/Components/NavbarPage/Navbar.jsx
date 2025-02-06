// import React, { useState } from 'react'
// import { IoSearchOutline } from "react-icons/io5";
// import logo from "../../Images/COMPANY LOGO 1.png";


// function Navbar() {
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//     const toggleMobileMenu = () => {
//       setIsMobileMenuOpen(!isMobileMenuOpen);
//     };
  
//   return (
//     <div>
//         <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm">
//         <div className="py-4 w-full border-b shadow-2xl">
//           <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
//             {/* Logo */}
//             <div className="flex items-center space-x-3">
//               <img src={logo} alt="Razobyte Logo" className="h-14" />
//             </div>

//             {/* Desktop Menu */}
//             <nav className="hidden md:flex space-x-16 font-semibold text-black">
//               <a href="#" className="hover:text-[#3B7FBF]">
//                 Home
//               </a>
//               <a href="#" className="hover:text-[#3B7FBF]">
//                 About Us
//               </a>
//               <a href="#" className="hover:text-[#3B7FBF]">
//                 Services
//               </a>
//               <a href="#" className="hover:text-[#3B7FBF]">
//                 Portfolio
//               </a>
//               <a href="#" className="hover:text-[#3B7FBF]">
//                 Get in Touch
//               </a>
//             </nav>

//             {/* Mobile Menu Button */}
//             <button
//               onClick={toggleMobileMenu}
//               className="md:hidden text-black focus:outline-none"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-6 w-6"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 {isMobileMenuOpen ? (
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 ) : (
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M4 6h16M4 12h16m-7 6h7"
//                   />
//                 )}
//               </svg>
//             </button>

//             {/* Mobile Menu */}
//             {isMobileMenuOpen && (
//               <nav className="absolute top-16 left-0 w-full bg-white shadow-md border-t border-black md:hidden">
//                 <ul className="flex flex-col items-center space-y-4 py-4 font-bold">
//                   <li>
//                     <a href="#" className="hover:text-[#3B7FBF]">
//                       Home
//                     </a>
//                   </li>
//                   <li>
//                     <a href="#" className="hover:text-[#3B7FBF]">
//                       About Us
//                     </a>
//                   </li>
//                   <li>
//                     <a href="#" className="hover:text-[#3B7FBF]">
//                       Services
//                     </a>
//                   </li>
//                   <li>
//                     <a href="#" className="hover:text-[#3B7FBF]">
//                       Portfolio
//                     </a>
//                   </li>
//                   <li>
//                     <a href="#" className="hover:text-[#3B7FBF]">
//                       Get in Touch
//                     </a>
//                   </li>

//                   {/* Book a Session Button inside Mobile Menu */}
//                   <li>
//                     <button className="flex items-center text-[#3B7FBF] border border-black px-4 py-2 rounded-lg font-semibold text-sm md:text-base hover:bg-black hover:text-[#3B7FBF] transition-all duration-300 ease-in-out">
//                       BOOK A SESSION
//                     </button>
//                   </li>
//                 </ul>
//               </nav>
//             )}

//             {/* CTA Button */}
//             <div className="flex items-center space-x-4">
//               {/* Search Icon (hidden on mobile) */}
//               <div className="hidden md:flex justify-center items-center font-bold text-[#3B7FBF] p-2 rounded-full hover:bg-gray-300 cursor-pointer  transition-all duration-300 ease-in-out">
//                 <IoSearchOutline className="text-3xl font-bold" />
//               </div>
//               {/* Book a Session Button (Visible only on Desktop) */}
//               <button className="hidden md:block items-center text-[#3B7FBF] border border-black px-4 py-2 rounded-lg font-semibold text-sm md:text-base hover:bg-[#3B7FBF] hover:text-white transition-all duration-300 ease-in-out">
//                 BOOK A SESSION
//               </button>
//             </div>
//           </div>
//         </div>
//       </header>

//     </div>
//   )
// }

// export default Navbar