
import { useState } from "react";
import { Helmet } from "react-helmet";
import { NavLink, Outlet } from "react-router-dom";


export default function UserSideBar() {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    return (
        <div>
            <Helmet><title></title></Helmet>
            <button onClick={toggleSidebar} className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none">
                <span className="sr-only">Open sidebar</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
            </button>

            <aside id="sidebar-multi-level-sidebar" className={`fixed z-40 w-64 h-screen transition-transform ${isSidebarOpen ? "" : "-translate-x-full"
                } lg:translate-x-0`} aria-label="Sidebar">
                <div className="h-full pl-8 pr-4 py-8 overflow-y-auto bg-gray-50">
                    <ul className="space-y-6 font-medium">
                        <li>
                            <NavLink to="/dashboard/my-appointment">My Appointments</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/my-reviews">My Reviews</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/my-history">Payment History</NavLink>
                        </li>
                    </ul>
                </div>
            </aside>

            <div className="lg:py-12 min-h-screen lg:ml-64">
                <Outlet />
            </div>
        </div>
    )
}


