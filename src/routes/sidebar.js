/** Icons are imported separatly to reduce build time */

import Squares2X2Icon from "@heroicons/react/24/outline/Squares2X2Icon";

import UserIcon from "@heroicons/react/24/outline/UserIcon";

import BoltIcon from "@heroicons/react/24/outline/BoltIcon";

import Cog6ToothIcon from "@heroicons/react/24/outline/Cog6ToothIcon";

import ChartBarIcon from "@heroicons/react/24/outline/ChartBarIcon";

import CurrencyDollarIcon from "@heroicons/react/24/outline/CurrencyDollarIcon";

import ComputerDesktopIcon from "@heroicons/react/24/outline/ComputerDesktopIcon";

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

  {
    path: "", //no url needed as this has submenu

    icon: <ChartBarIcon className={`${iconClasses} inline `} />, // icon component

    name: " Analytics & Reports", // name that appear in Sidebar

    isSettings: true,

    submenu: [
      {
        path: "/Power", //url

        icon: <BoltIcon className={`${iconClasses} inline `} />, // icon component

        name: "Power", // name that appear in Sidebar
      },

      {
        path: "/app/Analytics&Reports-Gas", //url

        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152-.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.545 3.75 3.75 0 013.255 3.717z"
              clipRule="evenodd"
            />
          </svg>
        ), // icon component

        name: "Gas", // name that appear in Sidebar
      },

      {
        path: "/app/Analytics&Reports-Water", //url

        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 22a8 8 0 0 1-8-8c0-3.502 2.71-6.303 5.093-8.87L12 2l2.907 3.13C17.29 7.698 20 10.499 20 14a8 8 0 0 1-8 8Z"
            />
          </svg>
        ), // icon component

        name: "Water", // name that appears in Sidebar
      }, // icon component

      {
        path: "/app/Analytics&Reports-CompressedAir", //url

        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
          >
            <path
              fill="currentColor"
              d="M2.643 6.357c1.747-1.5 3.127-2.686 6.872-.57c1.799 1.016 3.25 1.4 4.457 1.398c2.115 0 3.486-1.176 4.671-2.193a1.037 1.037 0 0 0 .122-1.439a.987.987 0 0 0-1.41-.125c-1.746 1.502-3.127 2.688-6.872.57c-4.948-2.793-7.266-.803-9.128.797a1.037 1.037 0 0 0-.121 1.439a.986.986 0 0 0 1.409.123zm14.712 2.178c-1.746 1.5-3.127 2.688-6.872.57c-4.948-2.795-7.266-.804-9.128.795a1.037 1.037 0 0 0-.121 1.439a.986.986 0 0 0 1.409.125c1.747-1.501 3.127-2.687 6.872-.572c1.799 1.018 3.25 1.4 4.457 1.4c2.115 0 3.486-1.176 4.671-2.195a1.035 1.035 0 0 0 .122-1.438a.986.986 0 0 0-1.41-.124zm0 5.106c-1.746 1.502-3.127 2.688-6.872.572c-4.948-2.795-7.266-.805-9.128.795a1.037 1.037 0 0 0-.121 1.439a.985.985 0 0 0 1.409.123c1.747-1.5 3.127-2.685 6.872-.57c1.799 1.016 3.25 1.4 4.457 1.4c2.115 0 3.486-1.178 4.671-2.195a1.037 1.037 0 0 0 .122-1.439a.988.988 0 0 0-1.41-.125z"
            />
          </svg>
        ), // icon component

        name: "Compressed Air", // name that appear in Sidebar
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

  // {

  //   path: "/app/Reports", // url

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

  //         d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"

  //         className={iconClasses}  />

  //       <path

  //         stroke-linecap="round"

  //         stroke-linejoin="round"

  //         d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"

  //         className={iconClasses} />className={`${iconClasses} inline` }

  //     </svg>

  //   ), // icon component

  //   name: "Reports",

  //   submenu: [

  //     {

  //       path: "/app/reports/ListofDevices",

  //       icon: <ChartBarIcon className={submenuIconClasses} />,

  //       name: "List of Devices",

  //     },

  //     {

  //       path: "/app/reports/Parameters",

  //       icon: <ChartBarIcon className={submenuIconClasses} />,

  //       name: "Parameters",

  //     },

  //   ],

  // },

  // {

  //   path: "/app/analytics", // url

  //   icon: <ChartBarIcon className={iconClasses} />, // icon component

  //   name: "Analytics",

  //   isSettings: false , // name that appear in Sidebar

  // },

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
        path: "/app/Price", //url

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
