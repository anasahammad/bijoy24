"use client"
import Link from "next/link";

import { useState } from "react";





const Navbar = () => {

    const [isDropDownOpen, setIsDropDownOpen] = useState(false)

    const handleToggle = ()=>{
        setIsDropDownOpen(!isDropDownOpen)
    }
    const navLinks = [
        {
            path: "/",
            title: "Home"
        },
        {
            path: "/login",
            title: "Login"
        },
        {
            path: "/signup",
            title: "SignUp"
        }
    ]
    return (
        <div className="sticky top-0 w-full bg-slate-200 shadow-sm z-30">
      <div className="py-4 border-b-[1px]">
            <div className="container mx-auto">
            <div className="flex items-center justify-between gap-3 md:gap-0">
            <Link href="/" className="font-bold text-2xl">
              Bijoy24
            </Link>
            <div className="hidden md:block">
              {navLinks.map((item) => (
                <Link className="text-xl ml-4" key={item.title} href={item.path}>
                  {item.title}
                </Link>
              ))}
            </div>
            <div className="flex items-center gap-8 md:gap-12">
            
              <div className="relative" >
                <img
                  src="path-to-user-image.jpg"
                  alt="User"
                  className="w-10 h-10 rounded-full cursor-pointer"
                  onClick={handleToggle}
                />
               
               {isDropDownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-20">
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                     
                    >
                      Sign Out
                    </a>
                  </div>
                )}
               
              </div>
            </div>
          </div>
            </div>
          
        
      </div>
    </div>
    );
};

export default Navbar;