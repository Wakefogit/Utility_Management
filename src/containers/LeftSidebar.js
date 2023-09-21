import routes from '../routes/sidebar'
import { NavLink, Routes, Link, useLocation } from 'react-router-dom'
import SidebarSubmenu from './SidebarSubmenu';
import XMarkIcon from '@heroicons/react/24/outline/XMarkIcon'
import { useDispatch } from 'react-redux';
import AppImages from "../../../Utility_Management/src/components/AppImages"
 import { primary } from 'daisyui/src/colors';

function LeftSidebar() {
    const location = useLocation();

    const dispatch = useDispatch()


    const close = (e) => {
        document.getElementById('left-sidebar-drawer').click()
    }

    return (
        <div className="drawer-side ">
            <label htmlFor="left-sidebar-drawer" className="shadow-lg drawer-overlay"></label>
            <ul className="menu w-64 bg-blue-900 dark:bg-gray-900 text-white">
                <button className="btn btn-ghost bg-base-300  btn-circle z-50 top-0 right-0 absolute lg:hidden" onClick={() => close()}>
                    <XMarkIcon className=" inline-block " />
                </button>
            
                {/* <li className=" font-semibold text-xl h-16 p-0 ">

                    <div className="text-3xl text-primary"><span src={AppImages.energy}></span></div> </li>
                     */}
                     {/* <img src={AppImages.logo} alt="Icon" className=" ml-3 w-40" /> */}
                     <img src={AppImages.logo} alt="Icon" className=" ml-3 w-40" />
                {
                    routes.map((route, k) => {


                        return (
                            <li className="" key={k}>

                                {
                                    route.submenu ?
                                        <SidebarSubmenu {...route} /> :

                                        (<NavLink
                                            end
                                            to={route.path}
                                            className={({ isActive }) => `${isActive ? 'font-semibold  bg-grey-400 ' : 'font-normal'}`} >
                                            {route.icon} {route.name}
                                            {


                                                location.pathname === route.path ? (<span className="absolute inset-y-0 left-0 w-1 rounded-tr-md rounded-br-md bg-primary "
                                                    aria-hidden="true"></span>) : null
                                            }


                                        </NavLink>)
                                }

                                {/* {routes.map((route, key) => (
                                    <div key={key}> 
                                {/* ... other submenu items */}

                                {/* Empty space after the "Settings" submenu item */}
                                {/* {route.isSettings && <div className="h-4"></div>}
                                    </div>
                                ))}  */}

                            </li>
                        )
                    })
                }


            </ul>
        </div>
    )
}

export default LeftSidebar