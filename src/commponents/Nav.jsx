import search from "../assets/search-svgrepo-com.svg"
import { useState , useEffect } from "react";
import dark from "../assets/website/dark-mode-button.png";
import light from "../assets/website/light-mode-button.png";


export default function Nav(){
    const [isActive, setIsActive] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    useEffect(() => {
      const root = window.document.documentElement;
      if (darkMode) {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
    }, [darkMode]);
    return (
        <nav className="flex justify-between items-center p-4 pr-10 pl-10 static bg-white dark:bg-gray-900">
            <div className="logo text-3xl text-main font-bold ">Halawa</div>
            <ul className="catgory flex flex-1 justify-center sh gap-4 items-center ">
                <li className="text-amber-500 dark:text-amber-50 cursor-pointer hover:text-amber-400">home</li>
                <li className="text-amber-500 dark:text-amber-50 cursor-pointer hover:text-amber-400">shop</li>
                <li className="text-amber-500 dark:text-amber-50 cursor-pointer hover:text-amber-400">catgory</li>
                <li className="text-amber-500 dark:text-amber-50 cursor-pointer hover:text-amber-400">about</li>
            </ul>
            <div className="content flex gap-4 justify-center items-center">

            <div className="flex justify-center items-center">
                <div
                    className={`relative flex items-center transition-all duration-500 ease-in-out
                    ${isActive ? "bg-white shadow-lg px-3 w-64" : "bg-gray-800 px-2 w-12"} 
                    dark:bg-gray-700 dark:shadow-gray-900 
                    rounded-full overflow-hidden border-2 border-transparent 
                    `}
                    onMouseEnter={() => setIsActive(true)}
                    onMouseLeave={() => setIsActive(false)}
                >
                    {/* حقل الإدخال */}
                    <input
                    type="text"
                    className={`bg-transparent outline-none text-gray-900 dark:text-white 
                    w-full transition-all duration-500 ease-in-out 
                    ${isActive ? "opacity-100 px-2" : "opacity-0 w-0"}`}
                    placeholder="Search..."
                    />

                    {/* أيقونة البحث */}
                    <svg
                    className={`w-6 h-6 text-gray-300 dark:text-white 
                    transition-all duration-500 ease-in-out 
                    ${isActive ? "text-yellow-400" : "text-gray-500"}`}
                    viewBox="0 0 488.4 488.4"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        d="M0,203.25c0,112.1,91.2,203.2,203.2,203.2c51.6,0,98.8-19.4,134.7-51.2l129.5,129.5c2.4,2.4,5.5,3.6,8.7,3.6
                        s6.3-1.2,8.7-3.6c4.8-4.8,4.8-12.5,0-17.3l-129.6-129.5c31.8-35.9,51.2-83,51.2-134.7c0-112.1-91.2-203.2-203.2-203.2
                        S0,91.15,0,203.25z M381.9,203.25c0,98.5-80.2,178.7-178.7,178.7s-178.7-80.2-178.7-178.7s80.2-178.7,178.7-178.7
                        S381.9,104.65,381.9,203.25z"
                    />
                    </svg>
                </div>
                </div>
                <div className="car">car</div>
                <div className="mode cursor-pointer" onClick={() => setDarkMode(!darkMode)}>
                <img className='w-12 h-8 dark:block hidden' src={light} alt="logo" />
                <img className='w-12 h-8 dark:hidden block' src={dark} alt="logo" />
                </div>
            </div>
        </nav>
    );
}