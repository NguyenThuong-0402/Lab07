import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import logo from '../assets/imgs/Logo.png'
import dashboard from '../assets/imgs/dashboard.png'
import folder from '../assets/imgs/Folder.png'
import groups from '../assets/imgs/Groups.png'
import pieChart from '../assets/imgs/Pie chart.png'
import chat from '../assets/imgs/Chat.png'
import code from '../assets/imgs/Code.png'
import tryNow from '../assets/imgs/Group.png'

function Admin() {
    return (
        <div className='m-auto max-w-[90%] my-5 p-5 flex justify-between rounded-2xl'>
            {/* Sidebar */}
            <div className='mr-10'>
                <Link to={'/'}>
                    <img src={logo} alt="" />
                </Link>

                <ul className='mt-5 min-w-2xs'>
                    <li className='my-3 text-gray-700 font-bold rounded m'>
                        <NavLink
                            className={({ isActive }) => (isActive ? 'p-2 w-full block bg-primary text-white rounded' : "w-full block p-2")}
                            to="/"
                        >
                            <span className='flex items-center'>
                                <img className='mr-2' src={dashboard} alt="" />
                                DashBoard
                            </span>
                        </NavLink>
                    </li>
                    <li className='my-3 text-gray-700 font-bold rounded m'>
                        <NavLink
                            className={({ isActive }) => (isActive ? 'p-2 w-full block bg-primary text-white rounded' : "w-full block p-2")}
                            to="/project"
                        >
                            <span className='flex items-center'>
                                <img className='mr-2' src={folder} alt="" />
                                Project
                            </span>
                        </NavLink>
                    </li>
                    <li className='my-3 text-gray-700 font-bold rounded m'>
                        <NavLink
                            className={({ isActive }) => (isActive ? 'p-2 w-full block bg-primary text-white rounded' : "w-full block p-2")}
                            to="/teams"
                        >
                            <span className='flex items-center'>
                                <img className='mr-2' src={groups} alt="" />
                                Teams
                            </span>
                        </NavLink>
                    </li>
                    <li className='my-3 text-gray-700 font-bold rounded m'>
                        <NavLink
                            className={({ isActive }) => (isActive ? 'p-2 w-full block bg-primary text-white rounded' : "w-full block p-2")}
                            to="/analytic"
                        >
                            <span className='flex items-center'>
                                <img className='mr-2' src={pieChart} alt="" />
                                Analytics
                            </span>
                        </NavLink>
                    </li>
                    <li className='my-3 text-gray-700 font-bold rounded m'>
                        <NavLink
                            className={({ isActive }) => (isActive ? 'p-2 w-full block bg-primary text-white rounded' : "w-full block p-2")}
                            to="/message"
                        >
                            <span className='flex items-center'>
                                <img className='mr-2' src={chat} alt="" />
                                Messages
                            </span>
                        </NavLink>
                    </li>
                    <li className='my-3 text-gray-700 font-bold rounded m'>
                        <NavLink
                            className={({ isActive }) => (isActive ? 'p-2 w-full block bg-primary text-white rounded' : "w-full block p-2")}
                            to="/integration"
                        >
                            <span className='flex items-center'>
                                <img className='mr-2' src={code} alt="" />
                                Integrations
                            </span>
                        </NavLink>
                    </li>
                </ul>

                <div>
                    <img className='mt-20' src={tryNow} alt="" />
                    <h1 className='my-4 text-2xl text-gray-800 font-bold text-center'>V2.0 is available</h1>
                    <button className='px-6 py-1 text-blue-500 border-blue-500 border rounded w-full'>Try now</button>
                </div>
            </div>

            {/* Main Content */}
            <div className='grow'>
                <Outlet />
            </div>
        </div>
    )
}

export default Admin
