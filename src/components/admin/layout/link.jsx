import { 
  FaTh,
  FaBox,
  FaNetworkWired,
  FaDollarSign,
  FaBook,
  FaCog,
  FaQuestionCircle,
  FaSignOutAlt
} from 'react-icons/fa'

// Menu Items for Sidebar
export const menuItems = [
  { icon: FaTh, label: 'Dashboard', path: '/admin', title: 'The Arsenal Dashboard' },
  { icon: FaBox, label: 'New Drops', path: '/admin/new-drops', title: 'New Drops' },
  { icon: FaNetworkWired, label: 'Network Tree', path: '/admin/network-tree', title: 'Network Tree' },
  { icon: FaDollarSign, label: 'Sales & Earnings', path: '/admin/sales-earnings', title: 'Sales & Earnings' },
  { icon: FaBook, label: 'Training', path: '/admin/training', title: 'Training' },
  { icon: FaCog, label: 'Profile Setting', path: '/admin/profile', title: 'Profile Setting' }
]

// Bottom Items for Sidebar
export const bottomItems = [
  { icon: FaQuestionCircle, label: 'Help', path: '/admin/help', title: 'Help' },
  { icon: FaSignOutAlt, label: 'Logout', path: '/logout', isLogout: true }
]

// Title Mapping for Header
export const getPageTitle = (pathname) => {
  const titleMap = {
    '/admin': 'The Arsenal Dashboard',
    '/admin/': 'The Arsenal Dashboard',
    '/admin/new-drops': 'New Drops',
    '/admin/network-tree': 'Network Tree',
    '/admin/sales-earnings': 'Sales & Earnings',
    '/admin/training': 'Training',
    '/admin/profile': 'Profile Setting',
    '/admin/help': 'Help'
  }
  return titleMap[pathname] || 'The Arsenal Dashboard'
}

