// All components mapping with path for internal routes
// import Price from '../features/settings/Price'
import { lazy } from 'react'
import Reports from '../pages/protected/Reports/Reports'
import Power from '../pages/Power'
import gas from '../pages/gas'

const Dashboard = lazy(() => import('../pages/protected/Dashboard'))
const Welcome = lazy(() => import('../pages/protected/Welcome'))
const Page404 = lazy(() => import('../pages/protected/404'))
const Blank = lazy(() => import('../pages/protected/Blank'))
const Charts = lazy(() => import('../pages/protected/Charts'))
const Leads = lazy(() => import('../pages/protected/Leads'))
const Integration = lazy(() => import('../pages/protected/Integration'))
const Calendar = lazy(() => import('../pages/protected/Calendar'))
const Team = lazy(() => import('../pages/protected/Team'))
const Transactions = lazy(() => import('../pages/protected/Transactions'))
const Price = lazy(() => import('../features/settings/priceandrates/Price'))
const ProfileSettings = lazy(() => import('../pages/protected/ProfileSettings'))
const GettingStarted = lazy(() => import('../pages/GettingStarted'))
const DocFeatures = lazy(() => import('../pages/DocFeatures'))
const DocComponents = lazy(() => import('../pages/DocComponents'))
const Analytics = lazy(() => import('../pages/protected/Analytics'))
const ElectricityTraffic = lazy(() => import('../features/settings/priceandrates/trafficpages/ElectricityTraffic'))
const GasTariff = lazy(() => import('../features/settings/priceandrates/trafficpages/GasTariff'))
const WaterTariff = lazy(() => import('../features/settings/priceandrates/trafficpages/WaterTariff'))
const CompressedAirTariff = lazy(() => import('../features/settings/priceandrates/trafficpages/CompressedAirTariff'))

const routes = [
  {
    path: '/dashboard', // the url
    component: Dashboard, // view rendered
  },
  {
    path: '/welcome', // the url
    component: Welcome, // view rendered
  },
  {
    path: '/leads',
    component: Leads,
  },
  {
    path: '/settings-team',
    component: Team,
  },
  {
    path: '/calendar',
    component: Calendar,
  },
  {
    path: '/transactions',
    component: Transactions,
  },
  {
    path: '/settings-profile',
    component: ProfileSettings,
  },
 
  {
    path: '/getting-started',
    component: GettingStarted,
  },
  {
    path: '/features',
    component: DocFeatures,
  },
  {
    path: '/components',
    component: DocComponents,
  },
  {
    path: '/integration',
    component: Integration,
  },
  {
    path: '/charts',
    component: Charts,
  },
  {
    path: '/404',
    component: Page404,
  },
  {
    path: '/blank',
    component: Blank,
  },
  {
    path: '/analytics',
    component: Analytics,
  },
  {
    path: '/Price/electricitytariff',
    component: ElectricityTraffic,
  },
  {
    path: '/Price/gastariff',
    component: GasTariff,
  },
  {
    path: '/Price/watertariff',
    component: WaterTariff,
  },
  {
    path: 'Price/compressedairtariff',
    component: CompressedAirTariff,
  },
  {
    path: '/Reports',
    component: Reports,
  },
  {
    path: '/Price',
    component: Price,
  },
  // {
  //   path: '/power',
  //   component: Power,
  // },
  // {
  //   path:'/Power1',
  //   component:Power1,
  // }
  {
    path:'/Gas',
    component: gas,
  },
]

export default routes
