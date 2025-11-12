import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import UserRoutes from './route/userRoute'
import PublicRoutes from './route/publicRoute'
import AdminRoutes from './route/adminRoute'

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes (without layout) */}
        <Route path="/login" element={<PublicRoutes />} />
        <Route path="/register" element={<PublicRoutes />} />
        
        {/* Admin Routes (with admin layout) */}
        <Route path="/admin/*" element={<AdminRoutes />} />
        
        {/* User Routes (with layout) */}
        <Route path="/*" element={<UserRoutes />} />
      </Routes>
    </Router>
  )
}

export default App

