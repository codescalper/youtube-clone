import React, { useState } from 'react';

function Sidebar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Set the initial state to true

    let handleSidebarToggle = () => {
        setIsSidebarOpen(!isSidebarOpen);
    }

    return (
        <div className={`w-64 transition-all duration-300 ease-in-out ${isSidebarOpen ? '' : 'w-16'}`}>
            <div className="mb-8">
                <svg onClick={handleSidebarToggle}
                    className="w-6 h-6 text-white m-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                </svg>

            </div>
            <div className={`pr-3 mb-4 text-gray-300 text-2xl font-bold ${isSidebarOpen ? '' : 'hidden'}`}>
                <p className='pb-10 pl-3' >Home</p>
                <p className='pb-10 pl-3' >Videos</p>
                <p className='pb-10 pl-3'>Subscriptions</p>
                <p className='pb-10 pl-3' >Library</p>
                <p className='pb-10 pl-3'>Trending</p>
            </div>
        </div >
    );
}

export default Sidebar;
