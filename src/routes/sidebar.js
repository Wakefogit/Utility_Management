/** Icons are imported separatly to reduce build time */

import BellIcon from "@heroicons/react/24/outline/BellIcon";

import DocumentTextIcon from "@heroicons/react/24/outline/DocumentTextIcon";

import Squares2X2Icon from "@heroicons/react/24/outline/Squares2X2Icon";

import TableCellsIcon from "@heroicons/react/24/outline/TableCellsIcon";

import WalletIcon from "@heroicons/react/24/outline/WalletIcon";

import CodeBracketSquareIcon from "@heroicons/react/24/outline/CodeBracketSquareIcon";

import DocumentIcon from "@heroicons/react/24/outline/DocumentIcon";

import ExclamationTriangleIcon from "@heroicons/react/24/outline/ExclamationTriangleIcon";

import CalendarDaysIcon from "@heroicons/react/24/outline/CalendarDaysIcon";

import ArrowRightOnRectangleIcon from "@heroicons/react/24/outline/ArrowRightOnRectangleIcon";

import UserIcon from "@heroicons/react/24/outline/UserIcon";

import Cog6ToothIcon from "@heroicons/react/24/outline/Cog6ToothIcon";

import BoltIcon from "@heroicons/react/24/outline/BoltIcon";

import ChartBarIcon from "@heroicons/react/24/outline/ChartBarIcon";

import CurrencyDollarIcon from "@heroicons/react/24/outline/CurrencyDollarIcon";
import ComputerDesktopIcon from "@heroicons/react/24/outline/ComputerDesktopIcon";

import InboxArrowDownIcon from "@heroicons/react/24/outline/InboxArrowDownIcon";

import UsersIcon from "@heroicons/react/24/outline/UsersIcon";

import KeyIcon from "@heroicons/react/24/outline/KeyIcon";

import DocumentDuplicateIcon from "@heroicons/react/24/outline/DocumentDuplicateIcon";

import { SpeakerphoneIcon, VolumeOffIcon } from "@heroicons/react/outline";

import Sound from "../components/Sound";

const iconClasses = `h-6 w-6 `;

const submenuIconClasses = `h-5 w-5`;

const routes = [
  {
    path: "/app/dashboard",

    icon: <Squares2X2Icon className={iconClasses} />,

    name: "Dashboard",
    isSettings: false,
  },

  {
    path: "/app/cost", // url

    icon: <CurrencyDollarIcon className={iconClasses} />, // icon component

    name: "Cost", // name that appear in Sidebar
    isSettings: false,
  },
  {
    path: "/app/zone", // url

    icon: <ComputerDesktopIcon className={iconClasses} />, // icon component

    name: "Zones",
    isSettings: false, // name that appear in Sidebar
  },
  // {
  //   path: "/app", // url
  //   isSettings: false,
  //   icon: (
  //     <svg
  //       xmlns="http://www.w3.org/2000/svg"
  //       fill="none"
  //       viewBox="0 0 24 24"
  //       stroke-width="1.5"
  //       stroke="currentColor"
  //       class="w-6 h-6"
  //     >
  //       <path
  //         stroke-linecap="round"
  //         stroke-linejoin="round"
  //         d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5"
  //         className={iconClasses} />
  //     </svg>
  //   ), // icon component

  //   name: "Zones", // name that appear in Sidebar
  // },

  {
    path: "/app", // url
    isSettings: false,

    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
          className={iconClasses}  />

        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
          className={iconClasses} />
      </svg>
    ), // icon component

    name: "Reports",
    isSettings: false, // name that appear in Sidebar
  },

  {
    path: "/app/analytics", // url

  
    icon: <ChartBarIcon className={iconClasses} />, // icon component

    name: "Analytics",
    isSettings: false , // name that appear in Sidebar
  },

  // {

  //   path: '/app/calendar', // url

  //   icon: <CalendarDaysIcon className={iconClasses}/>, // icon component

  //   name: 'Calendar', // name that appear in Sidebar

  // },

  // {

  //   path: '', //no url needed as this has submenu

  //   icon: <DocumentDuplicateIcon className={`${iconClasses} inline` }/>, // icon component

  //   name: 'Pages', // name that appear in Sidebar

  //   submenu : [

  //     {

  //       path: '/login',

  //       icon: <ArrowRightOnRectangleIcon className={submenuIconClasses}/>,

  //       name: 'Login',

  //     },

  //     {

  //       path: '/register', //url

  //       icon: <UserIcon className={submenuIconClasses}/>, // icon component

  //       name: 'Register', // name that appear in Sidebar

  //     },

  //     {

  //       path: '/forgot-password',

  //       icon: <KeyIcon className={submenuIconClasses}/>,

  //       name: 'Forgot Password',

  //     },

  //     {

  //       path: '/app/blank',

  //       icon: <DocumentIcon className={submenuIconClasses}/>,

  //       name: 'Blank Page',

  //     },

  //     {

  //       path: '/app/404',

  //       icon: <ExclamationTriangleIcon className={submenuIconClasses}/>,

  //       name: '404',

  //     },

  //   ]

  // },

  {
    path: "", //no url needed as this has submenu

    icon: <Cog6ToothIcon className={`${iconClasses} inline`} />, // icon component

    name: "Settings", // name that appear in Sidebar

    isSettings: true,

    submenu: [
      {
        path: "/app/settings-profile", //url

        icon: <UserIcon className={submenuIconClasses} />, // icon component

        name: "Profile", // name that appear in Sidebar
      },

      {
        path: "/app/", //url

        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
            />
          </svg>
        ), // icon component

        name: "Prices and rates", // name that appear in Sidebar
      },

      // {

      //   path: '/app/settings-billing',

      //   icon: <WalletIcon className={submenuIconClasses}/>,

      //   name: 'Billing',

      // },

      // {

      //   path: '/app/settings-team', // url

      //   icon: <UsersIcon className={submenuIconClasses}/>, // icon component

      //   name: 'Team Members', // name that appear in Sidebar

      // },

      // {

      //     path: '/app/settings-team', // url

      //     icon: <UsersIcon className={submenuIconClasses}/>, // icon component

      //     name: 'Team Members', // name that appear in Sidebar

      //   },
    ],
  },

  // {

  //   path: '', //no url needed as this has submenu

  //   icon: <DocumentTextIcon className={`${iconClasses} inline` }/>, // icon component

  //   name: 'Documentation', // name that appear in Sidebar

  //   submenu : [

  //     {

  //       path: '/app/getting-started', // url

  //       icon: <DocumentTextIcon className={submenuIconClasses}/>, // icon component

  //       name: 'Getting Started', // name that appear in Sidebar

  //     },

  //     {

  //       path: '/app/features',

  //       icon: <TableCellsIcon className={submenuIconClasses}/>,

  //       name: 'Features',

  //     },

  //     {

  //       path: '/app/components',

  //       icon: <CodeBracketSquareIcon className={submenuIconClasses}/>,

  //       name: 'Components',

  //     }

  //   ]

  // },

  // {

  //   path: '/app/settings-sound', // url

  //   icon: isSoundOn ? <SpeakerphoneIcon className={submenuIconClasses} /> : <VolumeOffIcon className={submenuIconClasses} />, // icon component based on sound state

  //   name: `Sound ${isSoundOn ? 'On' : 'Off'}`, // name that appear in Sidebar

  // }
];

export default routes;
