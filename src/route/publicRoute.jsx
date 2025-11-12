import { useLocation } from 'react-router-dom'
import Login from '../pages/auth/login'
import Register from '../pages/auth/register'

function PublicRoutes() {
  const location = useLocation()
  
  // Return specific component based on current path
  if (location.pathname === '/login') {
    return <Login />
  }
  
  if (location.pathname === '/register') {
    return <Register />
  }
  
  return <Login /> // Default fallback
}

export default PublicRoutes
